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

// Type imports
import { FieldName, FormField, FormData } from '../../../lib/types/formTypes';

const GeneralInquiry = () => {
	const [formComplete, setFormComplete] = useState(false);
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
			setFormData((prev) => ({
				...prev,
				[name]: {
					...prev[name as FieldName],
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
		try {
			const response = await axiosInstance.post('/api/contact', {
				inquiryType: 'general',
				name: formData.name.value,
				email: formData.email.value,
				message: formData.message.value,
				antibot: formData.antibot.value,
				antibotIndex: formData.antibotIndex,
			});
			if (response.status === 201) {
				setFormComplete(true);
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
			console.error('There was an error submitting the message.', error);
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<fieldset>
				<label htmlFor='name'>
					Name<span>*</span>
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
					required
				/>
				{formData.name.touched && formData.name.value.trim() === '' && (
					<span className={styles.error}>This field is required</span>
				)}
			</fieldset>
			<fieldset>
				<label htmlFor='email'>
					Email<span>*</span>
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
					required
				/>
				{formData.email.touched && formData.email.value.trim() === '' && (
					<span className={styles.error}>This field is required</span>
				)}
			</fieldset>
			<fieldset>
				<label htmlFor='message'>
					Message<span>*</span>
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
					rows={8}
					required
					maxLength={500}
				></textarea>
				<div className={styles['textarea-spans']}>
					{formData.message.touched && formData.message.value.trim() === '' && (
						<span className={styles.error}>This field is required</span>
					)}
					<span className={styles.charCount}>
						{formData.message.value.length}/500
					</span>
				</div>
			</fieldset>
			<AntiBot
				formData={formData}
				setFormData={setFormData}
				setIsAntiBotValid={setIsAntiBotValid}
			/>
			<button type='submit' className={styles.submit} disabled={!formValid}>
				Submit
			</button>
		</form>
	);
};

export default GeneralInquiry;
