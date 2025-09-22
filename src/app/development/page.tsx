// Library imports
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title:
		'Web Development | Retcon Consulting - Custom Websites, UX/UI Design & Digital Strategy',
	description:
		'Discover how Retcon Consulting builds high-performance, custom websites that drive business growth. Explore our process, commitment to excellence, and ongoing support for your digital success.',
	openGraph: {
		title:
			'Web Development | Retcon Consulting - Custom Websites, UX/UI Design & Digital Strategy',
		description:
			'Discover how Retcon Consulting builds high-performance, custom websites that drive business growth. Explore our process, commitment to excellence, and ongoing support for your digital success.',
		url: 'https://www.retconconsulting.com/development',
		siteName: 'Retcon Consulting',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title:
			'Web Development | Retcon Consulting - Custom Websites, UX/UI Design & Digital Strategy',
		description:
			"Retcon Consulting empowers startups, entrepreneurs, and innovators to achieve business growth through expert web development, UX/UI design, and digital product strategy. We deliver custom websites, creative solutions, and ongoing support to help you stand out, build trust, and drive results in today's digital landscape.",
		images: ['/og-image.jpg'],
	},
	alternates: {
		canonical: 'https://www.retconconsulting.com/development',
	},
};

// Hooks imports

// Styles imports
import styles from './development.module.scss';

// Components imports
import Timeline from './timeline/Timeline';
import CustomTiles from './customTiles/CustomTiles';
import MeasureSuccess from './measureSuccess/MeasureSuccess';
import Commitment from './commitment/Commitment';
import Support from './support/Support';
import FAB from '../components/FAB/FAB';
import HomeContact from '../components/homeContact/HomeContact';
// import CTA from '../components/CTA/CTA';
// import Contact from '../components/contact/Contact';

// Context imports

const Development = () => {
	return (
		<>
			<div className={styles['development-wrapper']}>
				<section className={styles.description}>
					<h1 id='web-development-heading' className={styles['hero-h1']}>
						Your Website Matters.
					</h1>
					<p className={styles['development-description']}>
						It&apos;s the first impression people have of your brand, the place
						they decide whether to trust you or not, and the hub where all your
						marketing efforts come together. A clean, professional online
						presence turns attention into confidence, and confidence into
						lifelong customers.
					</p>
					<p className={styles['development-description']}>
						At Retcon Consulting,{' '}
						<span className={styles['hero-span']}>
							your success is our success
						</span>
						. Let&apos;s build together.
					</p>
				</section>
				<section
					className={`${styles.custom} ${styles.section}`}
					aria-labelledby='custom-heading'
				>
					<h2 id='custom-heading'>Why Choose Custom?</h2>
					<p className={styles['development-description']}>
						Custom websites deliver{' '}
						<span style={{ fontWeight: 'bold' }}>
							better performance, stronger SEO
						</span>
						, and <span style={{ fontWeight: 'bold' }}>limitless features</span>
						, helping you stand out in today&apos;s competitive digital
						landscape.
					</p>
					<CustomTiles />
				</section>
				<section
					className={`${styles.process} ${styles.section}`}
					aria-labelledby='process-heading'
				>
					<h2 id='process-heading'>Our Process</h2>
					<p className={styles['development-description']}>
						We take a comprehensive, <span>collaborative</span> approach to
						ensure your project&apos;s success, working closely with you so
						every detail reflects your vision and goals.
					</p>
					<Timeline />
				</section>
				<section
					className={styles.section}
					aria-labelledby='measure-success-heading'
				>
					<h2 id='measure-success-heading'>How We Measure Success</h2>
					<MeasureSuccess />
				</section>
				<section
					className={styles.section}
					aria-labelledby='commitment-heading'
				>
					<h2 id='commitment-heading'>Our Commitment to Excellence</h2>
					<Commitment />
				</section>
				<section className={styles.section} aria-labelledby='support-heading'>
					<h2 id='support-heading'>Ongoing Support</h2>
					<Support />
				</section>
				<HomeContact parent='development' />
			</div>
			{/* <Contact id={'contact'} page={'development'} /> */}
			<FAB type='ttt' />
		</>
	);
};

export default Development;
