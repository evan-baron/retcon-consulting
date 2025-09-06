'use client';

import React from 'react';
import styles from './cta.module.scss';

interface CTAProps {
	content: string;
	parent?: string; // Optional, used for styling or context
}

const CTA: React.FC<CTAProps> = ({ content, parent }) => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const el = document.getElementById('contact');
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<a
			href='#contact'
			role='button'
			tabIndex={0}
			aria-label='Book a session'
			className={`${styles.cta} ${parent && styles[parent]}`}
			onClick={handleClick}
		>
			{content}
		</a>
	);
};

export default CTA;
