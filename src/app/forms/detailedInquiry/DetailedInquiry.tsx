'use client';

// Library imports
import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// Axios instance import
import axiosInstance from '@/lib/utils/axios';

// Hooks imports

// Styles imports
import styles from '../forms.module.scss';

// Icon imports
import { CalendarMonth } from '@mui/icons-material';

// Components imports
import AntiBot from '../antiBot/AntiBot';

// Context imports

// Type imports
import {
	FieldName,
	FormField,
	DetailedFormData,
} from '../../../lib/types/formTypes';

// Context imports

const DetailedInquiry = () => {
	const [formComplete, setFormComplete] = useState(false);
	const [formIncrement, setFormIncrement] = useState(0);
	const [isAntiBotValid, setIsAntiBotValid] = useState(false);
	const [formData, setFormData] = useState<DetailedFormData>({
		name: {
			value: '',
			touched: false,
		},
		title: {
			value: '',
		},
		company: {
			value: '',
		},
		email: {
			value: '',
			touched: false,
		},
		phone: {
			value: '',
			touched: false,
		},
		website: {
			value: '',
		},
		services: [],
		budget: {
			value: '',
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
	const [timeline, setTimeline] = useState<Date[]>([]);
	const [otherService, setOtherService] = useState('');

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		const checked =
			e.target instanceof HTMLInputElement ? e.target.checked : undefined;

		// Special handling for services (checkbox group)
		if (name === 'services') {
			setFormData((prev) => {
				const services = prev.services || [];
				if (checked) {
					// Add the service if checked and not already present
					if (!services.includes(value)) {
						return { ...prev, services: [...services, value] };
					}
				} else {
					// Remove the service if unchecked
					return {
						...prev,
						services: services.filter((service) => service !== value),
					};
				}
				return prev;
			});
			return; // Prevent the generic update below!
		}

		// Generic update for other fields
		setFormData((prev) => ({
			...prev,
			[name]: {
				...prev[name as FieldName],
				value,
			},
		}));
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
				inquiryType: 'detailed',
				name: formData.name.value,
				title: formData.title?.value,
				company: formData.company?.value,
				email: formData.email.value,
				phone: formData.phone?.value,
				website: formData.website?.value,
				services: formData.services?.join(', '),
				timeline: timeline[0] ? timeline[0].toISOString().slice(0, 10) : '',
				budget: formData.budget?.value,
				message: formData.message.value,
				antibot: formData.antibot.value,
				antibotIndex: formData.antibotIndex,
			});
			if (response.status === 201) {
				setFormComplete(true);
				setFormIncrement((prev) => prev + 1);
				setFormData({
					name: {
						value: '',
						touched: false,
					},
					title: {
						value: '',
					},
					company: {
						value: '',
					},
					email: {
						value: '',
						touched: false,
					},
					phone: {
						value: '',
						touched: false,
					},
					website: {
						value: '',
					},
					services: [],
					budget: {
						value: '',
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
			<section>
				<h2>Contact Information</h2>
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
				<div className={styles.grouped}>
					<fieldset>
						<label htmlFor='title'>Title</label>
						<input
							onChange={handleChange}
							value={formData.title?.value}
							type='text'
							id='title'
							name='title'
						/>
					</fieldset>
					<fieldset>
						<label htmlFor='company'>Company</label>
						<input
							onChange={handleChange}
							value={formData.company?.value}
							type='text'
							id='company'
							name='company'
						/>
					</fieldset>
				</div>
				<div className={styles.grouped}>
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
						<label htmlFor='phone'>Phone</label>
						<input
							onChange={handleChange}
							value={formData.phone?.value}
							type='phone'
							id='phone'
							name='phone'
						/>
					</fieldset>
				</div>
				<fieldset>
					<label htmlFor='phone'>Website</label>
					<input
						onChange={handleChange}
						value={formData.website?.value}
						type='url'
						id='website'
						name='website'
						placeholder='https://'
					/>
				</fieldset>
			</section>
			<section>
				<h2>Services Needed</h2>
				<fieldset className={styles.checkboxes}>
					<legend>Digital</legend>
					<div className={styles.options}>
						<div className={styles.option}>
							<input
								onChange={handleChange}
								type='checkbox'
								id='custom-development'
								name='services'
								value='custom-development'
								checked={formData.services.includes('custom-development')}
							/>
							<label htmlFor='custom-development'>Custom Web Development</label>
						</div>
						<div className={styles.option}>
							<input
								onChange={handleChange}
								type='checkbox'
								id='web-design'
								name='services'
								value='web-design'
								checked={formData.services.includes('web-design')}
							/>
							<label htmlFor='web-design'>Web Design / Redesign</label>
						</div>
						<div className={styles.option}>
							<input
								onChange={handleChange}
								type='checkbox'
								id='accessibility-audit'
								name='services'
								value='accessibility-audit'
								checked={formData.services.includes('accessibility-audit')}
							/>
							<label htmlFor='accessibility-audit'>Accessibility Audit</label>
						</div>
					</div>
				</fieldset>
				<fieldset className={styles.checkboxes}>
					<legend>Strategy</legend>
					<div className={styles.options}>
						<div className={styles.option}>
							<input
								onChange={handleChange}
								type='checkbox'
								id='gtm-strategy'
								name='services'
								value='gtm-strategy'
								checked={formData.services.includes('gtm-strategy')}
							/>
							<label htmlFor='gtm-strategy'>Go-to-Market Strategy</label>
						</div>
						<div className={styles.option}>
							<input
								onChange={handleChange}
								type='checkbox'
								id='content-strategy'
								name='services'
								value='content-strategy'
								checked={formData.services.includes('content-strategy')}
							/>
							<label htmlFor='content-strategy'>
								Branding / Content Strategy
							</label>
						</div>
						<div className={styles.option}>
							<input
								onChange={handleChange}
								type='checkbox'
								id='pmf-strategy'
								name='services'
								value='pmf-strategy'
								checked={formData.services.includes('pmf-strategy')}
							/>
							<label htmlFor='pmf-strategy'>Product-Market Fit Strategy</label>
						</div>
					</div>
				</fieldset>
				<fieldset className={styles.checkboxes}>
					<label htmlFor='other-services'>Other</label>
					<input
						type='text'
						id='other-services'
						name='other-services'
						value={otherService}
						onChange={(e) => setOtherService(e.target.value)}
						onBlur={() => {
							setFormData((prev) => {
								// Remove any previous "other" value
								const filtered = prev.services.filter(
									(service) => !service.startsWith('Other:')
								);

								// Only add if not empty
								return otherService.trim()
									? {
											...prev,
											services: [...filtered, `Other: ${otherService.trim()}`],
									  }
									: { ...prev, services: filtered };
							});
						}}
						placeholder='(Please specify)'
						maxLength={50}
					/>
				</fieldset>
			</section>
			<section>
				<h2>Timeline</h2>
				<fieldset>
					<label htmlFor='timeline' style={{ fontWeight: 400 }}>
						When do you need this project completed by?
					</label>
					<Flatpickr
						id='timeline'
						value={timeline}
						onChange={setTimeline}
						options={{
							altInput: true,
							altFormat: 'F j, Y',
							dateFormat: 'Y-m-d',
							minDate: 'today',
							maxDate: new Date(Date.now() + 2 * 365 * 24 * 60 * 60 * 1000), // 1 year from now
						}}
						placeholder={`Select date`}
					/>
				</fieldset>
			</section>
			<section>
				<h2>Budget</h2>
				<fieldset className={styles.checkboxes}>
					<legend>Allocated Budget</legend>
					<div className={styles.options}>
						<div className={styles.option}>
							<input
								onChange={handleChange}
								type='radio'
								id='lowest-budget'
								name='budget'
								value='under-10k'
								checked={formData.budget.value === 'under-10k'}
							/>
							<label htmlFor='lowest-budget'>Under $10K</label>
						</div>
						<div className={styles.option}>
							<input
								onChange={handleChange}
								type='radio'
								id='low-budget'
								name='budget'
								value='10k-25k'
								checked={formData.budget.value === '10k-25k'}
							/>
							<label htmlFor='low-budget'>$10K - $25K</label>
						</div>
						<div className={styles.option}>
							<input
								onChange={handleChange}
								type='radio'
								id='mid-budget'
								name='budget'
								value='25k-50k'
								checked={formData.budget.value === '25k-50k'}
							/>
							<label htmlFor='mid-budget'>$25K - $50K</label>
						</div>
						<div className={styles.option}>
							<input
								onChange={handleChange}
								type='radio'
								id='highest-budget'
								name='budget'
								value='50k+'
								checked={formData.budget.value === '50k+'}
							/>
							<label htmlFor='highest-budget'>$50K+</label>
						</div>
					</div>
				</fieldset>
			</section>
			<section>
				<h2>Additional Details</h2>
				<fieldset>
					<label htmlFor='message'>
						Please provide a brief description
						<span>*</span>
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
						{formData.message.touched &&
							formData.message.value.trim() === '' && (
								<span className={styles.error}>This field is required</span>
							)}
						<span className={styles.charCount}>
							{formData.message.value.length}/500
						</span>
					</div>
				</fieldset>
			</section>
			<section className={styles.antibot}>
				<h2>Are You Human?</h2>
				<AntiBot
					formData={formData}
					formIncrement={formIncrement}
					setFormData={setFormData}
					setIsAntiBotValid={setIsAntiBotValid}
				/>
			</section>
			<button type='submit' className={styles.submit} disabled={!formValid}>
				Submit
			</button>
		</form>
	);
};

export default DetailedInquiry;
