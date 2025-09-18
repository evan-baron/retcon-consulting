import mailService from '@/services/mailService';
const { sendContactForm, sendDetailedContactForm } = mailService;
import { NextResponse } from 'next/server';
import mathQuestions from '@/lib/data/mathQuestions';

export async function POST(req: Request) {
	try {
		const body = await req.json();
		
		const { inquiryType, name, email, message, antibot, antibotIndex } = body;

		// Basic validation
		if (!name || !email || !message || !inquiryType) {
			return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
		}

		// Simple anti-bot check
		if (
			antibotIndex === undefined ||
			antibot === undefined ||
			antibot !== mathQuestions[antibotIndex].answer.toString()
		) {
			return NextResponse.json({ message: 'Failed anti-bot check' }, { status: 400 });
		}

		if (inquiryType === 'general') {
			await sendContactForm(name, email, message);
		} else if (inquiryType === 'detailed') {
			const {				
				title,
				company,
				phone,
				website,
				services,
				timeline,
				budget,
				} = body;
			await sendDetailedContactForm(name, email, message, title, company, phone, website, services, timeline, budget);
		} else {
			// Unsupported inquiry type
			return NextResponse.json({ message: 'Unsupported inquiry type' }, { status: 400 });
		}

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
