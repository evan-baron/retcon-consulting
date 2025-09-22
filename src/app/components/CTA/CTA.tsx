'use client';

// Library imports
import React from 'react';
import Link from 'next/link';

// Styles imports
import styles from './cta.module.scss';

// Context imports
import { useAppContext } from '@/app/context/AppContext';

interface CTAProps {
	content: string;
	parent?: string; // Optional, used for styling or context
}

function CTA({ content, parent }: CTAProps) {
	const { formType, setFormType } = useAppContext();

	return (
		<Link
			href='/contact'
			aria-label={
				content !== 'Book a free consultation'
					? 'Book a free consultation'
					: undefined
			}
			className={`${styles.cta} ${parent && styles[parent]}`}
			onClick={() => formType !== 'general' && setFormType('general')}
		>
			{content}
		</Link>
	);
}

export default CTA;
