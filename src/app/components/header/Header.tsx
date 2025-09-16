'use client';

// Library imports
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Styles imports
import styles from './header.module.scss';

// Component imports
import CTA from '../CTA/CTA';
import Hamburger from '../hamburger/Hamburger';

// Context
import { useAppContext } from '@/app/context/AppContext';

function Header() {
	const { isMobile, isTablet } = useAppContext();

	// Hamburger menu state
	const [hamburgerActive, setHamburgerActive] = useState(false);

	const hamburgerIconRef = useRef<HTMLDivElement>(null);

	// Logic to handle header visibility on scroll: this will hide the header when scrolling down and show it when scrolling up
	const [offset, setOffset] = useState(0);
	const lastScrollY = useRef(0);
	const headerHeight = 64; // 64px is the height of the header (4rem)

	useEffect(() => {
		const handleScroll = () => {
			if (hamburgerActive) return; // Don't adjust offset if hamburger is active
			const currentY = window.scrollY;
			const delta = currentY - lastScrollY.current;

			// Only adjust when scrolling down
			if (delta > 0) {
				setOffset((prev) => Math.min(prev + delta, headerHeight));
			} else {
				setOffset((prev) => Math.max(prev + delta, 0));
			}

			lastScrollY.current = currentY;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [hamburgerActive]);

	// Delay rendering the header until isMobile is defined
	if (typeof isMobile !== 'boolean') {
		return null;
	}

	return (
		<>
			<header
				className={styles.header}
				style={{ transform: `translateY(-${offset}px)` }}
			>
				<nav
					className={`${styles.nav} ${
						isMobile || isTablet ? styles.mobile : ''
					}`}
				>
					<ul className={styles.ul}>
						<li className={styles['logo-wrapper']}>
							<Link href='/' className={styles.logo}>
								<Image
									src='/logo.svg'
									alt='Logo Image'
									width={40}
									height={40}
								/>
								Retcon Consulting
							</Link>
						</li>

						{!isMobile && (
							<li>
								<CTA content='Get Started' parent='header' />
							</li>
						)}
						<li>
							<div
								ref={hamburgerIconRef}
								role='button'
								tabIndex={0}
								aria-label={hamburgerActive ? 'Close menu' : 'Open menu'}
								className={`${styles.icon} ${
									hamburgerActive ? styles.active : ''
								}`}
								onClick={() => setHamburgerActive((prev) => !prev)}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										setHamburgerActive((prev) => !prev);
									}
								}}
							>
								<span className={styles.line}></span>
							</div>
						</li>
					</ul>
				</nav>
			</header>
			<Hamburger
				hamburgerActive={hamburgerActive}
				setHamburgerActive={setHamburgerActive}
				isMobile={isMobile}
				iconRef={hamburgerIconRef}
			/>
		</>
	);
}

export default Header;
