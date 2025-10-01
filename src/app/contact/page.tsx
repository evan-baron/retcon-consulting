// Library imports
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title:
		'Contact | Retcon Consulting - Professional Web Development, UX/UI Design & Digital Strategy',
	description:
		'Get in touch with Retcon Consulting for web development, UX/UI design, and digital strategy. Fill out our general inquiry or request a detailed quote.',
	openGraph: {
		title:
			'Contact | Retcon Consulting - Professional Web Development, UX/UI Design & Digital Strategy',
		description:
			'Get in touch with Retcon Consulting for web development, UX/UI design, and digital strategy.',
		url: 'https://www.retconconsulting.com/contact',
		siteName: 'Retcon Consulting',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title:
			'Contact | Retcon Consulting - Professional Web Development, UX/UI Design & Digital Strategy',

		description:
			"Retcon Consulting empowers startups, entrepreneurs, and innovators to achieve business growth through expert web development, UX/UI design, and digital product strategy. We deliver custom websites, creative solutions, and ongoing support to help you stand out, build trust, and drive results in today's digital landscape.",
		images: ['/og-image.jpg'],
	},
	alternates: {
		canonical: 'https://www.retconconsulting.com/contact',
	},
};

// Styles imports
import styles from './contact.module.scss';

// Icon imports
import { Phone, MailOutline } from '@mui/icons-material';

// Components imports
import FAB from '../components/FAB/FAB';
import ContactForm from './contactForm/ContactForm';

const Contact = () => {
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
								<Link
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
								</Link>
								<div className={styles.contact}>
									<Link
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
									</Link>
								</div>
							</div>
						</div>
					</section>
				</div>
				<ContactForm />
			</div>
			<FAB type='ttt' />
			{/* {loading && <LoadingSpinner loadingText={'Submitting'} />} */}
		</>
	);
};

export default Contact;
