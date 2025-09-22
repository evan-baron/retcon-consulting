'use client';

// Library imports
import React, { useState, useRef } from 'react';

// Hooks imports

// Styles imports
import styles from '../contact.module.scss';

// Icon imports

// Components imports
import GeneralInquiry from '@/app/forms/generalInquiry/GeneralInquiry';
import DetailedInquiry from '@/app/forms/detailedInquiry/DetailedInquiry';
import LoadingSpinner from '@/app/components/loadingSpinner/LoadingSpinner';

// Context imports
import { useAppContext } from '@/app/context/AppContext';

const ContactForm = () => {
	const { isMobileWidth, isTabletWidth, loading, formType, setFormType } =
		useAppContext();

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
								Share your project details and requirements and we can jump into
								the weeds!
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
						formType === 'general' ? 'general-form-tab' : 'detailed-form-tab'
					}
					tabIndex={0}
				>
					{formType === 'general' ? <GeneralInquiry /> : <DetailedInquiry />}
				</div>
			</div>
			{loading && <LoadingSpinner loadingText={'Submitting'} />}
		</section>
	);
};

export default ContactForm;
