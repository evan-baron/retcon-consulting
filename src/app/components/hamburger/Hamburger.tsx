'use client';

// Library imports
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Styles imports
import styles from './hamburger.module.scss';

function Hamburger({
	setHamburgerActive,
	hamburgerActive,
	isMobile,
	iconRef,
}: {
	setHamburgerActive: (hamburgerActive: boolean) => void;
	hamburgerActive: boolean;
	isMobile: boolean;
	iconRef: React.RefObject<HTMLDivElement | null>;
}) {
	const hamburgerRef = useRef<HTMLDivElement>(null);
	const [isMouseInside, setIsMouseInside] = useState(false);

	useEffect(() => {
		if (!hamburgerRef.current) return;

		const handleClickOutside = (event: MouseEvent | FocusEvent) => {
			if (iconRef.current && iconRef.current.contains(event.target as Node)) {
				return;
			}

			if (
				hamburgerRef.current &&
				!hamburgerRef.current.contains(event.target as Node)
			) {
				setHamburgerActive(false);
			}
		};

		const handleScroll = (event: Event) => {
			if (isMouseInside) {
				event.preventDefault(); // Prevent page scroll if desired
				return;
			}
			setHamburgerActive(false);
		};

		const handleMouseEnter = () => setIsMouseInside(true);
		const handleMouseLeave = () => setIsMouseInside(false);

		const menuEl = hamburgerRef.current;
		menuEl.addEventListener('mouseenter', handleMouseEnter);
		menuEl.addEventListener('mouseleave', handleMouseLeave);

		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('focusin', handleClickOutside);
		document.addEventListener('scroll', handleScroll, { passive: false });

		return () => {
			menuEl.removeEventListener('mouseenter', handleMouseEnter);
			menuEl.removeEventListener('mouseleave', handleMouseLeave);
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('focusin', handleClickOutside);
			document.removeEventListener('scroll', handleScroll);
		};
	}, [iconRef, isMouseInside, setHamburgerActive]);

	const handleClick = () => {
		const newActiveState = !hamburgerActive;
		setHamburgerActive(newActiveState);
	};

	return (
		<div className={styles['hamburger-wrapper']} ref={hamburgerRef}>
			<div className={styles.hamburger}>
				<div
					className={`${styles['hamburger-content']} ${
						hamburgerActive ? styles.active : ''
					} ${isMobile ? styles.mobile : ''}`}
					onClick={handleClick}
				>
					<ul className={styles.menu}>
						<li>
							<Link href='/' onClick={handleClick}>
								Home
							</Link>
						</li>
						<li>
							<Link href='#services' onClick={handleClick}>
								Services
							</Link>
						</li>
						<li>
							<Link href='#contact' onClick={handleClick}>
								Contact
							</Link>
						</li>
						<li>
							<Link href='#get-started' onClick={handleClick}>
								Get Started
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Hamburger;
