'use client';

// Library imports
import React, { useState, useEffect } from 'react';

// Styles imports
import styles from './scrollDown.module.scss';

// MUI imports
import {} from '@mui/icons-material';

const ScrollDown = () => {
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
