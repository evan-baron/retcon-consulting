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
					<p className={styles.intro}>
						Excellence, for us, starts with how we work with you. From the very
						first conversation, we treat your goals as our own—listening
						carefully, asking the right questions, and translating your vision
						into a digital experience that feels both seamless and intentional.
					</p>

					<ul className={styles.pillars} role='list'>
						<li>
							<h4>Clear Communication</h4>
							<p>Transparent updates, open collaboration, and no surprises.</p>
						</li>
						<li>
							<h4>Thoughtful Design &amp; Development</h4>
							<p>
								Solutions tailored to your business, not off-the-shelf
								templates.
							</p>
						</li>
						<li>
							<h4>Attention to Detail</h4>
							<p>
								Every interaction, line of code, and design element delivered
								with precision.
							</p>
						</li>
						<li>
							<h4>Reliability</h4>
							<p>
								We don't just launch and walk away. We deliver stable,
								dependable solutions from day one.
							</p>
						</li>
						<li>
							<h4>Partnership</h4>
							<p>
								Your success is our success—every project is the start of a
								long-term relationship.
							</p>
						</li>
					</ul>

					<p className={styles.closing}>
						Our commitment to excellence isn't a tagline, it's the standard we
						hold ourselves to in every decision, every deliverable, and every
						interaction with you.
					</p>
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
