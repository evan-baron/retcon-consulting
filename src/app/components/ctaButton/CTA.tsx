'use client';

import React from 'react';
import styles from './cta.module.scss';

// Context
import { useAppContext } from '@/app/context/AppContext';

interface CTAProps {
	content: string;
	parent?: string; // Optional, used for styling or context
	disabled?: boolean;
	className?: string;
}

const CTA: React.FC<CTAProps> = ({ content, parent, disabled, className }) => {
	const { isTouchDevice } = useAppContext();

	return (
		<a
			href='#contact'
			role='button'
			tabIndex={0}
			aria-label='Book a session'
			className={`${styles.cta} ${!disabled ? styles.done : ''} ${
				parent === 'hero' && styles.hero
			} ${parent === 'summary' && styles.summary} ${
				!isTouchDevice && styles['hover-enabled']
			} ${className || ''}`}
		>
			<span className={styles['cta-text']}>{content}</span>
		</a>
	);
};

export default CTA;
