'use client';

// Library imports
import React, { useState, useRef } from 'react';

// Hooks imports

// Styles imports
import styles from './contact.module.scss';

// Icon imports
import { Phone, MailOutline } from '@mui/icons-material';

// Components imports
import GeneralInquiry from '../forms/generalInquiry/GeneralInquiry';
import DetailedInquiry from '../forms/detailedInquiry/DetailedInquiry';
import FAB from '../components/FAB/FAB';
import LoadingSpinner from '@/app/components/loadingSpinner/LoadingSpinner';

// Context imports
import { useAppContext } from '../context/AppContext';

const Contact = () => {
	const { isMobileWidth, isTabletWidth, loading } = useAppContext();

	const [formType, setFormType] = useState<'detailed' | 'general'>('general');

	const tabRefs = [
		useRef<HTMLButtonElement>(null),
		useRef<HTMLButtonElement>(null),
	];

	const handleTabKeyDown = (
		e: React.KeyboardEvent<HTMLButtonElement>,
		idx: number
	) => {
		if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
			e.preventDefault();
			let nextIdx = idx;
			if (idx === 0 && e.key === 'ArrowRight') {
				nextIdx = (idx + 1) % 2;
			} else if (idx === 1 && e.key === 'ArrowLeft') {
				nextIdx = (idx - 1 + 2) % 2;
			}
			tabRefs[nextIdx].current?.focus();
		}
	};

	return (
		<>
			<div className={styles['contact-wrapper']}>
				<div className={styles.slant}>
					<section
						className={styles.hero}
						aria-labelledby='contact-hero-heading'
					>
						<div className={styles['hero-content']}>
							<h1 id='contact-hero-heading'>
								Let&apos;s Build Something Together.
							</h1>
							<div className={styles['contact-methods']}>
								<a
									href='tel:+17207277834'
									className={styles.contact}
									aria-label='Call Retcon Consulting at (720) 727-7834'
								>
									<Phone
										className={styles.icon}
										aria-hidden='true'
										focusable='false'
									/>
									<span className={styles['contact-number']}>
										(720) 727-7834
									</span>
								</a>
								<div className={styles.contact}>
									<a
										href='mailto:contact@retconconsulting.com'
										className={styles.contact}
										aria-label='Email Retcon Consulting at contact@retconconsulting.com'
									>
										<MailOutline
											className={styles.icon}
											aria-hidden='true'
											focusable='false'
										/>
										contact@retconconsulting.com
									</a>
								</div>
							</div>
						</div>
					</section>
				</div>
				<section
					className={styles['form-section']}
					aria-labelledby='form-section-heading'
				>
					<h2 id='form-section-heading' className='sr-only'>
						Contact Forms
					</h2>
					<div
						className={styles['form-types']}
						role='tablist'
						aria-label='Choose form type'
					>
						<button
							ref={tabRefs[0]}
							type='button'
							className={`${styles.type} ${
								formType === 'general' ? styles.active : ''
							}`}
							role='tab'
							aria-selected={formType === 'general'}
							aria-controls='general-form-panel'
							id='general-form-tab'
							tabIndex={formType === 'general' ? 0 : -1}
							onClick={() => setFormType('general')}
							onKeyDown={(e) => handleTabKeyDown(e, 0)}
						>
							{isMobileWidth || isTabletWidth ? 'General' : 'General Inquiry'}
						</button>
						<button
							ref={tabRefs[1]}
							type='button'
							className={`${styles.type} ${
								formType === 'detailed' ? styles.active : ''
							}`}
							role='tab'
							aria-selected={formType === 'detailed'}
							aria-controls='detailed-form-panel'
							id='detailed-form-tab'
							tabIndex={formType === 'detailed' ? 0 : -1}
							onClick={() => setFormType('detailed')}
							onKeyDown={(e) => handleTabKeyDown(e, 1)}
						>
							{isMobileWidth || isTabletWidth ? 'Detailed' : 'Request a Quote'}
						</button>
					</div>
					<div className={styles['form-container']}>
						<div className={styles.intro}>
							{formType === 'general' ? (
								<>
									<span aria-hidden='true'>➢</span>
									<p className={styles['intro-text']} id='general-form-intro'>
										Let&apos;s just have a quick chat!
									</p>
								</>
							) : (
								<>
									<span aria-hidden='true'>➢</span>
									<p className={styles['intro-text']} id='detailed-form-intro'>
										Share your project details and requirements and we can jump
										into the weeds!
									</p>
								</>
							)}
						</div>
						<div
							className={styles['form-content']}
							role='tabpanel'
							id={
								formType === 'general'
									? 'general-form-panel'
									: 'detailed-form-panel'
							}
							aria-labelledby={
								formType === 'general'
									? 'general-form-tab'
									: 'detailed-form-tab'
							}
							tabIndex={0}
						>
							{formType === 'general' ? (
								<GeneralInquiry />
							) : (
								<DetailedInquiry />
							)}
						</div>
					</div>
				</section>
			</div>
			<FAB type='ttt' />
			{loading && <LoadingSpinner loadingText={'Submitting'} />}
		</>
	);
};

export default Contact;
