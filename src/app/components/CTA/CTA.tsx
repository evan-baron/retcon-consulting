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
	return (
		<Link
			href='/contact'
			role='button'
			tabIndex={0}
			aria-label='Book a consultation'
			className={`${styles.cta} ${parent && styles[parent]}`}
		>
			{content}
		</Link>
	);
}

export default CTA;
