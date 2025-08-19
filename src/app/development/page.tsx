'use client';

// Library imports
import React, { useRef } from 'react';

// Hooks imports

// Styles imports
import styles from './development.module.scss';

// Components imports
import Timeline from '../components/timeline/Timeline';

// Context imports

const Development = () => {
	const parentRef = useRef<HTMLDivElement>(null);

	return (
		<div className={styles.overlay} ref={parentRef}>
			<div className={styles['development-wrapper']}>
				<section className={styles.description}>
					<h2>Web Development</h2>
					<p className={styles['development-description']}>
						<span
							style={{
								fontWeight: 'bold',
								color: 'var(--gray1)',
								fontStyle: 'italic',
								// textDecoration: 'underline',
								// textUnderlineOffset: '0.2rem',
							}}
						>
							Why your website matters
						</span>
						: It's the first impression people have of your business, the place
						they decide whether to trust you, and the hub where all your
						marketing efforts come together. A clean, professional online
						presence turns attention into confidence, and confidence into
						lasting relationships.
					</p>
					<p className={styles['development-description']}>
						At Retcon Consulting, we take a structured approach to help guide
						you through the complexities of web development.
					</p>
				</section>
				<section className={styles.process}>
					<h2>Our Process</h2>
					<Timeline parentRef={parentRef} />
				</section>
			</div>
		</div>
	);
};

export default Development;
