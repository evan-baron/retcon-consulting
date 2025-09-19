'use client';

// Library imports
import React from 'react';
import Link from 'next/link';

// Styles imports
import styles from './cta.module.scss';

interface CTAProps {
	content: string;
	parent?: string; // Optional, used for styling or context
}

function CTA({ content, parent }: CTAProps) {
	return parent === 'home' ? (
		<section className={styles.section} aria-labelledby='get-started-heading'>
			<h2 id='get-started-heading'>Ready to Get Started?</h2>
			<div className={styles.text}>
				<p className={styles['development-description']}>
					Follow the link below to fill out a quick contact form or request a
					detailed quote. Choose what best fits your needs and we&apos;ll be in
					touch!
				</p>
			</div>
			<Link
				href='/contact'
				aria-label={
					content !== 'Book a free consultation'
						? 'Book a free consultation'
						: undefined
				}
				className={`${styles.cta} ${styles['home-section-cta']}`}
			>
				{content}
			</Link>
		</section>
	) : (
		<Link
			href='/contact'
			aria-label={
				content !== 'Book a free consultation'
					? 'Book a free consultation'
					: undefined
			}
			className={`${styles.cta} ${parent && styles[parent]}`}
		>
			{content}
		</Link>
	);
}

export default CTA;
