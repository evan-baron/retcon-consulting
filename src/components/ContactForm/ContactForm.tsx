'use client';

import { cloneElement, useEffect, useRef, useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from '../Button/Button';
import { budgets, interests } from '@/lib/contact';
import { site } from '@/lib/site';
import styles from './contactForm.module.scss';

type Status = 'idle' | 'sending' | 'sent' | 'error';
type FieldErrors = Partial<Record<string, string[]>>;

export default function ContactForm() {
	const startedAt = useRef(0);
	useEffect(() => {
		startedAt.current = Date.now();
	}, []);
	const [status, setStatus] = useState<Status>('idle');
	const [message, setMessage] = useState('');
	const [errors, setErrors] = useState<FieldErrors>({});

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = Object.fromEntries(new FormData(form));

		setStatus('sending');
		setErrors({});
		setMessage('');

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...data,
					budget: data.budget || undefined,
					startedAt: startedAt.current,
				}),
			});
			const body = await res.json().catch(() => ({}));

			if (res.ok) {
				setStatus('sent');
				form.reset();
				return;
			}
			setErrors(body.errors ?? {});
			setMessage(body.message ?? 'Something went wrong. Please try again.');
			setStatus('error');
		} catch {
			setMessage('Network error. Please try again.');
			setStatus('error');
		}
	}

	if (status === 'sent') {
		return (
			<div className={styles.success} role='status'>
				<CheckCircle2 size={32} aria-hidden='true' />
				<h2>Thanks, your message is on its way.</h2>
				<p>We&apos;ll get back to you within one business day.</p>
			</div>
		);
	}

	const err = (field: string) => errors[field]?.[0];

	return (
		<form className={styles.form} onSubmit={onSubmit} noValidate>
			<div className={styles.row}>
				<Field label='Name' name='name' error={err('name')} required>
					<input name='name' autoComplete='name' required maxLength={100} />
				</Field>
				<Field label='Email' name='email' error={err('email')} required>
					<input
						name='email'
						type='email'
						autoComplete='email'
						required
						maxLength={200}
					/>
				</Field>
			</div>

			<div className={styles.row}>
				<Field label='Company' name='company' error={err('company')}>
					<input name='company' autoComplete='organization' maxLength={100} />
				</Field>
				<Field label='Website' name='website' error={err('website')}>
					<input name='website' autoComplete='url' maxLength={200} />
				</Field>
			</div>

			<div className={styles.row}>
				<Field
					label='I’m interested in'
					name='interest'
					error={err('interest')}
					required
				>
					<select name='interest' defaultValue='' required>
						<option value='' disabled>
							Select one
						</option>
						{interests.map((o) => (
							<option key={o}>{o}</option>
						))}
					</select>
				</Field>
				<Field label='Budget' name='budget' error={err('budget')}>
					<select name='budget' defaultValue=''>
						<option value=''>Prefer not to say</option>
						{budgets.map((o) => (
							<option key={o}>{o}</option>
						))}
					</select>
				</Field>
			</div>

			<Field label='How can we help?' name='message' error={err('message')} required>
				<textarea name='message' rows={6} required maxLength={5000} />
			</Field>

			{/* Honeypot: hidden from people, tempting to bots */}
			<div className={styles.trap} aria-hidden='true'>
				<label>
					Leave this field empty
					<input name='website_url' tabIndex={-1} autoComplete='off' />
				</label>
			</div>

			<div className={styles.footer}>
				<Button type='submit' disabled={status === 'sending'}>
					{status === 'sending' ? 'Sending…' : 'Send message'}
				</Button>
				<p className={styles.alt}>
					Prefer email? <a href={`mailto:${site.email}`}>{site.email}</a>
				</p>
			</div>

			{status === 'error' && (
				<p className={styles.error} role='alert'>
					{message}
				</p>
			)}
		</form>
	);
}

function Field({
	label,
	name,
	error,
	required,
	children,
}: {
	label: string;
	name: string;
	error?: string;
	required?: boolean;
	children: React.ReactElement<Record<string, unknown>>;
}) {
	const id = `field-${name}`;
	const errorId = `${id}-error`;
	return (
		<div className={styles.field}>
			<label htmlFor={id}>
				{label}
				{required && <span aria-hidden='true'> *</span>}
			</label>
			{/* Wire label + error text to the control */}
			{cloneControl(children, id, error ? errorId : undefined, !!error)}
			{error && (
				<p id={errorId} className={styles.fieldError}>
					{error}
				</p>
			)}
		</div>
	);
}

function cloneControl(
	el: React.ReactElement<Record<string, unknown>>,
	id: string,
	describedBy: string | undefined,
	invalid: boolean,
) {
	return cloneElement(el, {
		id,
		'aria-describedby': describedBy,
		'aria-invalid': invalid || undefined,
	});
}
