import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/contact';
import { sendContactEmail } from '@/lib/mail';

const MIN_FILL_MS = 3000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

// Best-effort, per-instance rate limit. Swap for a shared store (e.g. Upstash)
// if abuse becomes a problem on serverless.
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
	const now = Date.now();
	const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
	recent.push(now);
	hits.set(ip, recent);
	return recent.length > MAX_PER_WINDOW;
}

export async function POST(req: Request) {
	const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
	if (rateLimited(ip)) {
		return NextResponse.json(
			{ message: 'Too many requests. Please try again later.' },
			{ status: 429 },
		);
	}

	let json: unknown;
	try {
		json = await req.json();
	} catch {
		return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
	}

	const parsed = contactSchema.safeParse(json);
	if (!parsed.success) {
		// A filled honeypot fails validation too; don't reveal which rule tripped.
		return NextResponse.json(
			{
				message: 'Please check the form and try again.',
				errors: parsed.error.flatten().fieldErrors,
			},
			{ status: 400 },
		);
	}

	if (Date.now() - parsed.data.startedAt < MIN_FILL_MS) {
		return NextResponse.json({ message: 'Please try again.' }, { status: 400 });
	}

	try {
		await sendContactEmail(parsed.data);
	} catch (err) {
		console.error('Failed to send contact email:', err);
		return NextResponse.json(
			{ message: 'We could not send your message. Please email us directly.' },
			{ status: 502 },
		);
	}

	return NextResponse.json({ message: 'Message sent.' }, { status: 201 });
}
