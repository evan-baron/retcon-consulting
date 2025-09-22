'use client';

// Library imports
import React, { useState } from 'react';

// Axios instance import
import axiosInstance from '@/lib/utils/axios';

// Hooks imports

// Styles imports
import styles from '../forms.module.scss';

// Icon imports
import {} from '@mui/icons-material';

// Components imports
import AntiBot from '../antiBot/AntiBot';

// Context imports
import { useAppContext } from '../../context/AppContext';

// Type imports
import { FormData } from '../../../lib/types/formTypes';

const GeneralInquiry = ({ parent }: { parent?: string }) => {
	const { setLoading, setLoadingMessage } = useAppContext();
	const [formIncrement, setFormIncrement] = useState(0);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [isAntiBotValid, setIsAntiBotValid] = useState(false);
	const [formData, setFormData] = useState<FormData>({
		name: {
			value: '',
			touched: false,
		},
		email: {
			value: '',
			touched: false,
		},
		message: {
			value: '',
			touched: false,
		},
		antibot: {
			value: '',
			touched: false,
		},
		antibotIndex: -1,
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		if (['name', 'email', 'message', 'antibot'].includes(name)) {
			type ObjectField = Exclude<keyof FormData, 'antibotIndex'>;
			const fieldName = name as ObjectField;
			setFormData((prev) => ({
				...prev,
				[fieldName]: {
					...prev[fieldName],
					value,
				},
			}));
		}
	};

	const formValid =
		formData.name.value.trim() !== '' &&
		formData.email.value.trim() !== '' &&
		formData.message.value.trim() !== '' &&
		formData.antibot.value.trim() &&
		isAntiBotValid;

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setFormSubmitted(true);

		try {
			setLoading(true);

			const response = await axiosInstance.post('/api/contact', {
				inquiryType: 'general',
				name: formData.name.value,
				email: formData.email.value,
				message: formData.message.value,
				antibot: formData.antibot.value,
				antibotIndex: formData.antibotIndex,
			});
			if (response.status === 201) {
				setLoadingMessage({
					message: "We've received your message!",
					type: 'confirm',
				});

				// Reset form
				setFormIncrement((prev) => prev + 1);
				setFormSubmitted(false);
				setFormData({
					name: {
						value: '',
						touched: false,
					},
					email: {
						value: '',
						touched: false,
					},
					message: {
						value: '',
						touched: false,
					},
					antibot: {
						value: '',
						touched: false,
					},
					antibotIndex: -1,
				});
			}
		} catch (error) {
			setLoadingMessage({
				message: 'There was an error with your submission.',
				type: 'error',
			});
			setFormSubmitted(false);
			console.error('There was an error submitting the message.', error);
		}
	};

	return (
		<form
			className={`${styles.form} ${
				parent === 'homeContact' ? styles['home-contact'] : ''
			}`}
			onSubmit={handleSubmit}
			noValidate
		>
			<section aria-labelledby='contact-info-heading'>
				{parent === 'homeContact' || parent === 'development' ? (
					<h3 id='contact-info-heading'>Contact Information</h3>
				) : (
					<h2 id='contact-info-heading'>Contact Information</h2>
				)}
				<div className={styles['name-email']}>
					<fieldset>
						<legend className='sr-only'>Your Name</legend>
						<label htmlFor='name'>
							Name<span aria-hidden='true'>*</span>
						</label>
						<input
							onChange={handleChange}
							onBlur={() =>
								setFormData((prev) => ({
									...prev,
									name: { ...prev.name, touched: true },
								}))
							}
							value={formData.name.value}
							type='text'
							id='name'
							name='name'
							maxLength={50}
							required
							aria-required='true'
							aria-invalid={
								formData.name.touched && formData.name.value.trim() === ''
									? 'true'
									: 'false'
							}
							aria-describedby={
								formData.name.touched && formData.name.value.trim() === ''
									? 'name-error'
									: undefined
							}
							autoComplete='name'
						/>
						{formData.name.touched && formData.name.value.trim() === '' && (
							<span
								className={styles.error}
								id='name-error'
								role='alert'
								aria-live='polite'
							>
								This field is required
							</span>
						)}
					</fieldset>
					<fieldset>
						<legend className='sr-only'>Your Email</legend>
						<label htmlFor='email'>
							Email<span aria-hidden='true'>*</span>
						</label>
						<input
							onChange={handleChange}
							onBlur={() =>
								setFormData((prev) => ({
									...prev,
									email: { ...prev.email, touched: true },
								}))
							}
							value={formData.email.value}
							type='email'
							id='email'
							name='email'
							maxLength={100}
							required
							aria-required='true'
							aria-invalid={
								formData.email.touched && formData.email.value.trim() === ''
									? 'true'
									: 'false'
							}
							aria-describedby={
								formData.email.touched && formData.email.value.trim() === ''
									? 'email-error'
									: undefined
							}
							autoComplete='email'
						/>
						{formData.email.touched && formData.email.value.trim() === '' && (
							<span
								className={styles.error}
								id='email-error'
								role='alert'
								aria-live='polite'
							>
								This field is required
							</span>
						)}
					</fieldset>
				</div>
			</section>

			<section aria-labelledby='details-heading'>
				{parent === 'homeContact' || parent === 'development' ? (
					<h3 id='details-heading'>Additional Details</h3>
				) : (
					<h2 id='details-heading'>Additional Details</h2>
				)}
				<fieldset>
					<legend className='sr-only'>Project Description</legend>
					<label htmlFor='message'>
						Message
						<span aria-hidden='true'>*</span>
					</label>
					<textarea
						onChange={handleChange}
						onBlur={() =>
							setFormData((prev) => ({
								...prev,
								message: { ...prev.message, touched: true },
							}))
						}
						value={formData.message.value}
						id='message'
						name='message'
						rows={parent === 'homeContact' ? 4 : 8}
						required
						maxLength={500}
						aria-required='true'
						aria-invalid={
							formData.message.touched && formData.message.value.trim() === ''
								? 'true'
								: 'false'
						}
						aria-describedby={
							formData.message.touched && formData.message.value.trim() === ''
								? 'message-error'
								: undefined
						}
					></textarea>
					<div className={styles['textarea-spans']}>
						{formData.message.touched &&
							formData.message.value.trim() === '' && (
								<span
									className={styles.error}
									id='message-error'
									role='alert'
									aria-live='polite'
								>
									This field is required
								</span>
							)}
						<span className={styles.charCount}>
							{formData.message.value.length}/500
						</span>
					</div>
				</fieldset>
			</section>

			<section aria-labelledby='antibot-heading'>
				{parent === 'homeContact' || parent === 'development' ? (
					<h3 id='antibot-heading'>Are You Human?</h3>
				) : (
					<h2 id='antibot-heading'>Are You Human?</h2>
				)}
				<AntiBot
					formData={formData}
					formIncrement={formIncrement}
					setFormData={setFormData}
					setIsAntiBotValid={setIsAntiBotValid}
				/>
			</section>
			<button
				type='submit'
				className={styles.submit}
				disabled={!formValid || formSubmitted}
				aria-disabled={!formValid || formSubmitted}
			>
				{formSubmitted ? 'Submitting...' : 'Submit'}
			</button>
		</form>
	);
};

export default GeneralInquiry;
