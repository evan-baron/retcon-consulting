'use client';

// Library imports
import React, { useEffect, useState, useRef } from 'react';

// Styles imports
import styles from './header.module.scss';

// Component imports
import CTA from '../ctaButton/CTA';
import Hamburger from '../hamburger/Hamburger';

// Context
import { useAppContext } from '@/app/context/AppContext';

function Header() {
	const { windowWidth, screenWidth } = useAppContext();

	// Logic to handle header visibility on scroll: this will hide the header when scrolling down and show it when scrolling up
	const [offset, setOffset] = useState(0);
	const lastScrollY = useRef(0);
	const headerHeight = 64; // 64px is the height of the header (4rem)

	useEffect(() => {
		const handleScroll = () => {
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
	}, []);

	// Delay rendering the header until windowWidth is defined
	if (typeof windowWidth !== 'number') {
		return null;
	}

	return (
		<header
			className={styles.header}
			style={{ transform: `translateY(-${offset}px)` }}
		>
			<nav className={styles.nav}>
				<ul className={styles.ul}>
					<li className={styles.logo}>
						<a href='#top'>Retcon Consulting</a>
					</li>
					{/* <li>
						<a href='#about'>About</a>
					</li> */}
					{!windowWidth || windowWidth > 700 ? (
						<>
							<li>
								<a href='#services'>Services</a>
							</li>
							<li>
								<a href='#contact'>Contact</a>
							</li>
							<CTA content='Book Now' />
						</>
					) : (
						<Hamburger />
					)}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
