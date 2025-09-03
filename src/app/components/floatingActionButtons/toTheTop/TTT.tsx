'use client';

// Library imports
import React, { useState, useEffect, useRef } from 'react';

// Hooks imports

// Styles imports
import styles from './ttt.module.scss';

// MUI imports
import { KeyboardArrowUp } from '@mui/icons-material';

// Components imports

// Context imports

const TTT = ({ isMobile }: { isMobile: boolean }) => {
	const buttonRef = useRef<HTMLButtonElement>(null);

	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		if (!buttonRef.current) return;

		const handleMouseEnter = () => setIsHovered(true);
		const handleMouseLeave = () => setIsHovered(false);

		const buttonEl = buttonRef.current;
		buttonEl.addEventListener('mouseenter', handleMouseEnter);
		buttonEl.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			if (buttonRef.current) {
				buttonRef.current.removeEventListener('mouseenter', handleMouseEnter);
				buttonRef.current.removeEventListener('mouseleave', handleMouseLeave);
			}
		};
	}, [buttonRef.current]);

	return (
		<div
			className={`${styles['ttt-wrapper']} ${isMobile ? styles.mobile : ''}`}
		>
			{!isMobile && (
				<legend className={isHovered ? styles.visible : ''}>
					Scroll to Top
				</legend>
			)}
			<button
				ref={buttonRef}
				className={`${styles['ttt-button']} ${isMobile ? styles.mobile : ''}`}
				type='button'
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				aria-label='Scroll to top'
			>
				<KeyboardArrowUp className={styles.icon} />
			</button>
		</div>
	);
};

export default TTT;
