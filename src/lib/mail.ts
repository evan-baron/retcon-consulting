import 'server-only';
import nodemailer from 'nodemailer';
import type { ContactInput } from './contact';

const escapeHtml = (value: string) =>
	value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');

const singleLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();

function getTransport() {
	const user = process.env.EMAIL_USER ?? process.env.NEXT_PUBLIC_EMAIL;
	const pass = process.env.EMAIL_PASSWORD;
	if (!user || !pass) {
		throw new Error('Email credentials are not configured.');
	}
	return {
		user,
		transport: nodemailer.createTransport({
			service: 'gmail',
			auth: { user, pass },
		}),
	};
}

function row(label: string, value: string) {
	if (!value) return '';
	return `<tr>
		<td style="padding:8px 16px 8px 0;color:#6b7280;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td>
		<td style="padding:8px 0;color:#111827">${escapeHtml(value).replace(/\n/g, '<br>')}</td>
	</tr>`;
}

export async function sendContactEmail(input: ContactInput) {
	const { user, transport } = getTransport();
	const to = process.env.PERSONAL_EMAIL ?? user;

	const html = `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px">
		<h1 style="font-size:20px;margin:0 0 16px">New inquiry from ${escapeHtml(input.name)}</h1>
		<table style="border-collapse:collapse;width:100%;font-size:15px">
			${row('Name', input.name)}
			${row('Email', input.email)}
			${row('Company', input.company)}
			${row('Website', input.website)}
			${row('Interested in', input.interest)}
			${row('Budget', input.budget ?? '')}
			${row('Message', input.message)}
		</table>
	</div>`;

	await transport.sendMail({
		from: `Retcon Consulting <${user}>`,
		to,
		replyTo: input.email,
		subject: `New inquiry from ${singleLine(input.name)}`,
		html,
		text: [
			`Name: ${input.name}`,
			`Email: ${input.email}`,
			input.company ? `Company: ${input.company}` : null,
			input.website ? `Website: ${input.website}` : null,
			`Interested in: ${input.interest}`,
			input.budget ? `Budget: ${input.budget}` : null,
			'',
			input.message,
		]
			.filter((line): line is string => line !== null)
			.join('\n'),
	});
}
