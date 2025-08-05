'use client';

// Library imports
import React, { useState } from 'react';
import Image from 'next/image';

// Axios instance import
import axiosInstance from '@/lib/utils/axios';

// Styles imports
import styles from './contact.module.scss';

function Contact({ id }: { id: string }) {
	type ContactFormData = {
		firstName: string;
		lastName: string;
		email: string;
		services: string[];
		message: string;
	};

	const [formData, setFormData] = useState<ContactFormData>({
		firstName: '',
		lastName: '',
		email: '',
		services: [],
		message: '',
	});

	const formReady = Boolean(
		formData.firstName &&
			formData.lastName &&
			formData.email &&
			formData.message &&
			formData.services.length > 0
	);

	const [formComplete, setFormComplete] = useState(false);

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value, type } = event.target;

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
			console.log(`Updated ${name}:`, value);
		}
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const response = await axiosInstance.post('/api/contact', {
				name: formData.firstName + ' ' + formData.lastName,
				email: formData.email,
				services: formData.services.join(', '),
				message: formData.message,
			});
			if (response.status === 201) {
				setFormComplete(true);
				setFormData({
					firstName: '',
					lastName: '',
					email: '',
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
				<h2 className={styles.h2}>Get in Touch</h2>
				{!formComplete ? (
					<form onSubmit={handleSubmit} className={styles['contact-form']}>
						<div className={styles['names-wrapper']}>
							<div className={styles['name-input']}>
								<label htmlFor='firstName'>First Name:</label>
								<input
									type='text'
									id='firstName'
									name='firstName'
									onChange={handleChange}
									required
								/>
							</div>
							<div className={styles['name-input']}>
								<label htmlFor='lastName'>Last Name:</label>
								<input
									type='text'
									id='lastName'
									name='lastName'
									onChange={handleChange}
									required
								/>
							</div>
						</div>

						<div className={styles['email-input']}>
							<label htmlFor='email'>Email:</label>
							<input
								type='email'
								id='email'
								name='email'
								onChange={handleChange}
								required
							/>
						</div>

						<div className={styles['services-wrapper']}>
							<h3>Service(s) Needed:</h3>
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
						</div>

						<div className={styles['message-wrapper']}>
							<label htmlFor='message'>Message:</label>
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
								!formReady ? styles.disabled : ''
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
							/>
						</div>
						<h3>Message Received!</h3>
						<p>
							We&#39;ve received your message. A member of our team will reach
							out to you shortly.
							<br />
							Thank you for contacting Retcon Consulting!
						</p>
					</div>
				)}
			</section>
		</div>
	);
}

export default Contact;
