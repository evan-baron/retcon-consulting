'use client';

// Library imports
import React from 'react';
import Link from 'next/link';

// Hooks imports

// Styles imports
import styles from './homeContact.module.scss';

// Icon imports
import {} from '@mui/icons-material';

// Components imports
import GeneralInquiry from '@/app/forms/generalInquiry/GeneralInquiry';

// Context imports
import { useAppContext } from '@/app/context/AppContext';

const HomeContact = ({ parent }: { parent?: string }) => {
	const { setFormType } = useAppContext();

	return (
		<section className={styles.section} aria-labelledby='get-started-heading'>
			<h2
				className={
					parent === 'development' ? styles['development-heading'] : ''
				}
				id='get-started-heading'
			>
				Ready to Get Started?
			</h2>
			<div className={styles.text}>
				<p className={styles['development-description']}>
					Fill out the form below to get the ball rolling &mdash; or if
					you&apos;re in a hurry and would like to skip right to a quote,{' '}
					<Link
						className={styles.link}
						href='/contact'
						aria-label='Go to our detailed contact form to request a quote'
						onClick={() => setFormType('detailed')}
					>
						follow this link
					</Link>{' '}
					to fill out our detailed contact form.
				</p>
			</div>
			<div className={styles['form-container']}>
				<GeneralInquiry parent='homeContact' />
			</div>
		</section>
	);
};

export default HomeContact;
