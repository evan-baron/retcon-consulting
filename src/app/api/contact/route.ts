import mailService from '@/services/mailService';
const { sendContactForm } = mailService;
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const { inquiryType, name, email, message, antibot, antibotIndex } = await req.json() as {
			inquiryType: string;
			name: string;
			email: string;
			message: string;
			antibot: string;
			antibotIndex: number;
		};

		if (inquiryType === 'general') {
			await sendContactForm(name, email, message);
		} else if (inquiryType === 'detailed') {
			// await sendContactForm(name, email, message);
		} else {
			// Handle other inquiry types if needed
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
