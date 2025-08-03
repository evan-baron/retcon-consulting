import React from 'react';
import styles from './cta.module.scss';

interface CTAProps {
	content: string;
	parent?: string; // Optional, used for styling or context
	disabled?: boolean;
	className?: string;
}

const CTA: React.FC<CTAProps> = ({ content, parent, disabled, className }) => (
	<a
		href='#contact'
		role='button'
		tabIndex={0}
		aria-label='Book a session'
		className={`${styles.cta} ${!disabled ? styles.done : ''} ${
			parent === 'hero' && styles.hero
		} ${className || ''}`}
	>
		<span className={styles['cta-text']}>{content}</span>
	</a>
);

export default CTA;
