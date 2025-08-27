'use client';

// Library imports
import React, { useState } from 'react';
import Image from 'next/image';

// Axios instance import
import axiosInstance from '@/lib/utils/axios';

// Styles imports
import styles from './contact.module.scss';

function Contact({ id, page }: { id: string; page?: string }) {
	type ContactFormData = {
		firstName: string;
		lastName: string;
		email: string;
		phone: string;
		services: string[];
		message: string;
	};

	const [formData, setFormData] = useState<ContactFormData>({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		services: [],
		message: '',
	});

	const formReady = Boolean(
		formData.firstName &&
			formData.lastName &&
			formData.email &&
			formData.phone?.length === 10 &&
			formData.message &&
			formData.services.length > 0
	);

	const [formComplete, setFormComplete] = useState(false);

	function formatPhone(value: string): string {
		// Remove all non-digit characters
		const digits = value.replace(/\D/g, '');

		if (digits.length === 0) return '';
		if (digits.length < 4) return `${digits}`;
		if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
		if (digits.length <= 10)
			return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)} - ${digits.slice(
				6
			)}`;
		// If more than 10 digits, ignore extras
		return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)} - ${digits.slice(
			6,
			10
		)}`;
	}

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value, type } = event.target;

		if (name === 'phone') {
			// Only allow digits, but format for display
			const digits = value.replace(/\D/g, '');
			setFormData((prev) => ({
				...prev,
				phone: digits.slice(0, 10), // Limit to 10 digits
			}));
			return;
		}

		if (type === 'checkbox') {
			const checked = (event.target as HTMLInputElement).checked;
			setFormData((prev) => ({
				...prev,
				services: checked
					? [...prev.services, value]
					: prev.services.filter((service) => service !== value),
			}));
		} else {
			setFormData((prev) => ({ ...prev, [name]: value }));
		}
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const response = await axiosInstance.post('/api/contact', {
				name: formData.firstName + ' ' + formData.lastName,
				email: formData.email,
				phone: formData.phone,
				services: formData.services.join(', '),
				message: formData.message,
			});
			if (response.status === 201) {
				setFormComplete(true);
				setFormData({
					firstName: '',
					lastName: '',
					email: '',
					phone: '',
					services: [],
					message: '',
				});
			}
		} catch (error) {
			console.error('There was an error submitting the message.', error);
		}
	};

	return (
		<div className={styles['contact-wrapper']} id={id}>
			<section
				className={styles.contact}
				aria-label='Schedule a consultation to discuss your needs'
			>
				<h2 className={`${styles.h2} ${page && styles[page]}`}>
					{page !== 'development' ? 'Get in Touch' : 'Ready to Get Started?'}
				</h2>
				{!formComplete ? (
					<form onSubmit={handleSubmit} className={styles['contact-form']}>
						<fieldset className={styles['names-wrapper']}>
							<legend className={styles.legend}>Name</legend>
							<div className={styles['name-input']}>
								<label className={styles.required} htmlFor='firstName'>
									First Name:
								</label>
								<input
									type='text'
									id='firstName'
									name='firstName'
									onChange={handleChange}
									required
								/>
							</div>
							<div className={styles['name-input']}>
								<label className={styles.required} htmlFor='lastName'>
									Last Name:
								</label>
								<input
									type='text'
									id='lastName'
									name='lastName'
									onChange={handleChange}
									required
								/>
							</div>
						</fieldset>

						<fieldset className={styles['communication-wrapper']}>
							<legend className={styles.legend}>Contact Information</legend>
							<div className={styles['communication-input']}>
								<label className={styles.required} htmlFor='email'>
									Email:
								</label>
								<input
									type='email'
									id='email'
									name='email'
									onChange={handleChange}
									required
								/>
							</div>
							<div className={styles['communication-input']}>
								<label htmlFor='phone'>Phone:</label>
								<input
									type='tel'
									id='phone'
									name='phone'
									inputMode='numeric'
									onChange={handleChange}
									maxLength={16}
									value={formatPhone(formData.phone)}
									placeholder='(123) 456 - 7890'
								/>
							</div>
						</fieldset>

						<fieldset className={styles['services-wrapper']}>
							<legend className={`${styles.h3} ${styles.required}`}>
								Service(s) Needed:
							</legend>
							<div id='services' className={styles['services-checkboxes']}>
								<label>
									<input
										type='checkbox'
										name='services'
										value='consulting'
										onChange={handleChange}
									/>
									Consulting
								</label>
								<br />
								<label>
									<input
										type='checkbox'
										name='services'
										value='web-development'
										onChange={handleChange}
									/>
									Web Development
								</label>
								<br />
								<label>
									<input
										type='checkbox'
										name='services'
										value='web-design'
										onChange={handleChange}
									/>
									Web Design
								</label>
								<br />
								<label>
									<input
										type='checkbox'
										name='services'
										value='sales-methodology'
										onChange={handleChange}
									/>
									Sales Methodology
								</label>
								<br />
								<label>
									<input
										type='checkbox'
										name='services'
										value='personal-coaching'
										onChange={handleChange}
									/>
									Personal Coaching
								</label>
							</div>
						</fieldset>

						<div className={styles['message-wrapper']}>
							<label className={styles.required} htmlFor='message'>
								Add a brief description:
							</label>
							<textarea
								id='message'
								name='message'
								rows={4}
								onChange={handleChange}
								required
							/>
						</div>

						<button
							type='submit'
							className={`${styles.button} ${
								!formReady ? styles.disabled : styles.enabled
							}`}
							disabled={!formReady}
						>
							Send
						</button>
					</form>
				) : (
					<div className={styles['thankyou-form']}>
						<div className={styles['image-wrapper']}>
							<Image
								src='/message-received.webp'
								alt='Thank You'
								width={500}
								height={500}
								className={styles.image}
							/>
						</div>
						<h3>Message Received!</h3>
						<p>
							We&#39;ve received your message. A member of our team will reach
							out to you shortly.
							<br />
							<br />
							Thank you for contacting Retcon Consulting!
						</p>
						<button
							type='button'
							aria-label='Send Another Message'
							onClick={() => setFormComplete(false)}
							className={styles.button}
						>
							Send Another Message
						</button>
					</div>
				)}
			</section>
		</div>
	);
}

export default Contact;
