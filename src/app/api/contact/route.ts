import mailService from '@/services/mailService';
const { sendContactForm } = mailService;
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const { name, email, services, message } = await req.json() as {
			name: string;
			email: string;
			services: string;
			message: string;
		};

		await sendContactForm(name, email, services, message);

		const response = NextResponse.json(
			{
				message: 'Contact Us email sent',
			},
			{ status: 201 }
		);

		return response;
	} catch (err: unknown) {
		let errorMessage = 'An unexpected error occurred';
		if (err instanceof Error) {
			errorMessage = err.message;
		}
		console.log('Error sending contact form at api/contact/route.js:', err);
		return NextResponse.json({ message: errorMessage }, { status: 500 });
	}
}
