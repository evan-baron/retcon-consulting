import { z } from 'zod';

export const interests = [
	'Web development',
	'Web design',
	'Consulting',
	'Something else',
] as const;

export const budgets = [
	'Under $5k',
	'$5k – $15k',
	'$15k – $50k',
	'$50k+',
	'Not sure yet',
] as const;

const optionalText = (max: number) =>
	z.string().trim().max(max).optional().default('');

export const contactSchema = z.object({
	name: z.string().trim().min(1, 'Please enter your name.').max(100),
	email: z.email('Please enter a valid email address.').max(200),
	company: optionalText(100),
	website: optionalText(200),
	interest: z.enum(interests, { error: 'Please choose an option.' }),
	budget: z.enum(budgets).optional(),
	message: z
		.string()
		.trim()
		.min(10, 'Please tell us a little more (at least 10 characters).')
		.max(5000, 'Please keep your message under 5,000 characters.'),
	// Spam traps: `website_url` is a hidden honeypot, `startedAt` is when the
	// form was rendered so we can reject instant submissions.
	website_url: z.string().max(0).optional().default(''),
	startedAt: z.number(),
});

export type ContactInput = z.infer<typeof contactSchema>;
