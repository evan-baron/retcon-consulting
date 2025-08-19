'use client';

// Library imports
import React, { useRef } from 'react';

// Hooks imports

// Styles imports
import styles from './development.module.scss';

// Components imports
import Timeline from '../components/timeline/Timeline';
import Contact from '../components/contact/Contact';

// Context imports

const Development = () => {
	const parentRef = useRef<HTMLDivElement>(null);

	return (
		// <div className={styles.overlay}>
		<>
			<div className={styles['development-wrapper']} ref={parentRef}>
				<section className={styles.description}>
					<h2>Web Development</h2>
					<p className={styles['development-description']}>
						<span>Why your website matters</span>: It's the first impression
						people have of your business, the place they decide whether to trust
						you, and the hub where all your marketing efforts come together. A
						clean, professional online presence turns attention into confidence,
						and confidence into lasting relationships.
					</p>
					<p className={styles['development-description']}>
						At Retcon Consulting, we take a structured approach to help guide
						you through the complexities of web development.
					</p>
				</section>
				<section className={`${styles.process} ${styles['masked-section']}`}>
					<h2>Our Process</h2>
					<Timeline parentRef={parentRef} />
				</section>
			</div>
			<Contact id={'contact'} />
		</>
		// </div>
	);
};

export default Development;
