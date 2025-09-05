'use client';

// Library imports
import React, { useState, useEffect } from 'react';

// Hooks imports

// Styles imports
import styles from './scrollDown.module.scss';

// MUI imports
import {} from '@mui/icons-material';

// Components imports

// Context imports

const ScrollDown = ({ isMobile }: { isMobile: boolean }) => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0);
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		// Check on mount in case user is not at top
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	if (isMobile) return null;

	return (
		<div className={styles['scrolldown-wrapper']}>
			<button
				role='button'
				type='button'
				className={`${styles['scrolldown-button']} ${
					scrolled ? styles.hide : ''
				}`}
				onClick={() =>
					window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
				}
			>
				&darr; Continue &darr;
			</button>
		</div>
	);
};

export default ScrollDown;
