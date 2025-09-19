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

// Components imports
import AntiBot from '../antiBot/AntiBot';

// Context imports

// Type imports
import { FieldName, DetailedFormData } from '../../../lib/types/formTypes';

// Context imports
import { useAppContext } from '../../context/AppContext';

const DetailedInquiry = () => {
	const { setLoading, setLoadingMessage } = useAppContext();
	const [formIncrement, setFormIncrement] = useState(0);
	const [formSubmitted, setFormSubmitted] = useState(false);
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
		setFormSubmitted(true);
		try {
			setLoading(true);
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
				setLoadingMessage({
					message: "We've received your project request!",
					type: 'confirm',
				});
				setFormSubmitted(false);
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
			setLoadingMessage({
				message: 'There was an error with your submission.',
				type: 'error',
			});
			setFormSubmitted(false);
			console.error('There was an error submitting the message.', error);
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit} noValidate>
			<section aria-labelledby='contact-info-heading'>
				<h2 id='contact-info-heading'>Contact Information</h2>
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

				<div className={styles.grouped}>
					<fieldset>
						<legend className='sr-only'>Your Title</legend>
						<label htmlFor='title'>Title</label>
						<input
							onChange={handleChange}
							value={formData.title?.value}
							type='text'
							id='title'
							name='title'
							maxLength={100}
							autoComplete='organization-title'
						/>
					</fieldset>

					<fieldset>
						<legend className='sr-only'>Your Company</legend>
						<label htmlFor='company'>Company</label>
						<input
							onChange={handleChange}
							value={formData.company?.value}
							type='text'
							id='company'
							name='company'
							maxLength={100}
							autoComplete='organization'
						/>
					</fieldset>
				</div>

				<div className={styles.grouped}>
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
					<fieldset>
						<legend className='sr-only'>Your Phone</legend>
						<label htmlFor='phone'>Phone</label>
						<input
							onChange={handleChange}
							value={formData.phone?.value}
							type='phone'
							id='phone'
							name='phone'
							maxLength={20}
							autoComplete='tel'
						/>
					</fieldset>
				</div>
				<fieldset>
					<legend className='sr-only'>Your Website</legend>
					<label htmlFor='phone'>Website</label>
					<input
						onChange={handleChange}
						value={formData.website?.value}
						type='url'
						id='website'
						name='website'
						maxLength={100}
						placeholder='https://'
						autoComplete='url'
					/>
				</fieldset>
			</section>

			<section aria-labelledby='services-heading'>
				<h2 id='services-heading'>Services Needed</h2>
				<fieldset
					className={styles.checkboxes}
					aria-labelledby='digital-services-legend'
				>
					<legend id='digital-services-legend'>Digital</legend>
					<div
						className={styles.options}
						role='group'
						aria-labelledby='digital-services-legend'
					>
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
				<fieldset
					className={styles.checkboxes}
					aria-labelledby='strategy-services-legend'
				>
					<legend id='strategy-services-legend'>Strategy</legend>
					<div
						className={styles.options}
						role='group'
						aria-labelledby='strategy-services-legend'
					>
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
					<legend className='sr-only'>Other Services</legend>
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
						aria-label='Other service (please specify)'
					/>
				</fieldset>
			</section>

			<section aria-labelledby='timeline-heading'>
				<h2 id='timeline-heading'>Timeline</h2>
				<fieldset>
					<legend className='sr-only'>Project Timeline</legend>
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

			<section aria-labelledby='budget-heading'>
				<h2 id='budget-heading'>Budget</h2>
				<fieldset className={styles.checkboxes} aria-labelledby='budget-legend'>
					<legend id='budget-legend'>Allocated Budget</legend>
					<div
						className={styles.options}
						role='radiogroup'
						aria-labelledby='budget-legend'
					>
						<div className={styles.option}>
							<input
								onChange={handleChange}
								type='radio'
								id='lowest-budget'
								name='budget'
								value='under-10k'
								checked={formData.budget.value === 'under-10k'}
								aria-checked={formData.budget.value === 'under-10k'}
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
								aria-checked={formData.budget.value === '10k-25k'}
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
								aria-checked={formData.budget.value === '25k-50k'}
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
								aria-checked={formData.budget.value === '50k+'}
							/>
							<label htmlFor='highest-budget'>$50K+</label>
						</div>
					</div>
				</fieldset>
			</section>

			<section aria-labelledby='details-heading'>
				<h2 id='details-heading'>Additional Details</h2>
				<fieldset>
					<legend className='sr-only'>Project Description</legend>
					<label htmlFor='message'>
						Please provide a brief description
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
						rows={8}
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

			<section className={styles.antibot} aria-labelledby='antibot-heading'>
				<h2 id='antibot-heading'>Are You Human?</h2>
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

export default DetailedInquiry;
