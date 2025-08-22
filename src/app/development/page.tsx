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

// Context imports

const Development = () => {
	return (
		<>
			<div className={styles['development-wrapper']}>
				<section className={styles.description}>
					<h2>Web Development</h2>
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
				<section className={styles.process}>
					<h3>Our Process</h3>
					<Timeline />
				</section>
				<section className={styles.custom}>
					<h3>Why Choose Custom?</h3>
					<CustomTiles />
				</section>
				<section className={styles.measure}>
					<h3>How We Measure Success</h3>
					<MeasureSuccess />
				</section>
				<section className={styles.commitment}>
					<h3>Our Commitment to Excellence</h3>
				</section>
				<section className={styles.commitment}>
					<h3>Ongoing Support</h3>
				</section>
				<section className={styles.commitment}>
					<h3>FAQs</h3>
				</section>
			</div>
			<Contact id={'contact'} />
		</>
	);
};

export default Development;
