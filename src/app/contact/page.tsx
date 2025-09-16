'use client';

// Library imports
import React, { useState } from 'react';

// Hooks imports

// Styles imports
import styles from './contact.module.scss';

// Icon imports
import { Phone, MailOutline } from '@mui/icons-material';

// Components imports

// Context imports
import { useAppContext } from '../context/AppContext';

const Contact = () => {
	const { isMobile } = useAppContext();

	const [formType, setFormType] = useState<'quote' | 'general'>('quote');

	return (
		<div className={styles['contact-wrapper']}>
			<div className={styles.slant}>
				<section className={styles.hero}>
					<div className={styles['hero-content']}>
						<h1>Let&apos;s Build Something Together.</h1>
						<div className={styles['contact-methods']}>
							<a
								href='tel:+17207277834'
								className={styles.contact}
								aria-label='Call (720) 727-7834'
							>
								<Phone className={styles.icon} />
								<span className={styles['contact-number']}>(720) 727-7834</span>
							</a>
							<div className={styles.contact}>
								<MailOutline className={styles.icon} />
								<a
									href='mailto:contact@retconconsulting.com'
									className={styles['contact-email']}
									aria-label='Email contact at contact@retconconsulting.com'
								>
									contact@retconconsulting.com
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>
			<section className={styles.form}>
				<div className={styles['form-types']}>
					<div
						className={`${styles.type} ${
							formType === 'quote' ? styles.active : ''
						}`}
						onClick={() => setFormType('quote')}
					>
						{isMobile ? 'Detailed' : 'Request a Quote'}
					</div>
					<div
						className={`${styles.type} ${
							formType === 'general' ? styles.active : ''
						}`}
						onClick={() => setFormType('general')}
					>
						{isMobile ? 'General' : 'General Inquiry'}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
