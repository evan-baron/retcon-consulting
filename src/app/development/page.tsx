// Library imports
import React from 'react';

// Hooks imports

// Styles imports
import styles from './development.module.scss';

// Components imports
import Timeline from './timeline/Timeline';
import Contact from '../components/contact/Contact';
import CustomTiles from './customTiles/CustomTiles';
import MeasureSuccess from './measureSuccess/MeasureSuccess';
import Commitment from './commitment/Commitment';
import Support from './support/Support';

// Context imports

const Development = () => {
	return (
		<>
			<div className={styles['development-wrapper']}>
				<section className={styles.description}>
					<h1 id='web-development-heading'>Web Development</h1>
					<p className={styles['development-description']}>
						<span>Your website matters</span>: It's the first impression people
						have of your business, the place they decide whether to trust you,
						and the hub where all your marketing efforts come together. A clean,
						professional online presence turns attention into confidence, and
						confidence into lasting relationships.
					</p>
					<p className={styles['development-description']}>
						At Retcon Consulting, we take a structured approach to help guide
						you through the complexities of custom web development.
					</p>
				</section>
				<section
					className={`${styles.process} ${styles.section}`}
					aria-labelledby='process-heading'
				>
					<h2 id='process-heading'>Our Process</h2>
					<p className={styles['development-description']}>
						We take a comprehensive, <span>collaborative</span> approach to
						ensure your project's success, working closely with you so every
						detail reflects your vision and goals.
					</p>
					<Timeline />
				</section>
				<section
					className={`${styles.custom} ${styles.section}`}
					aria-labelledby='custom-heading'
				>
					<h2 id='custom-heading'>Why Choose Custom?</h2>
					<CustomTiles />
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
				{/* <section className={styles.section}>
					<h2>FAQs</h2>
				</section> */}
			</div>
			<Contact id={'contact'} page={'development'} />
		</>
	);
};

export default Development;
