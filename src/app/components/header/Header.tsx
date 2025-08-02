'use client';

// Library imports
import React, { useEffect, useState, useRef } from 'react';

// Styles imports
import styles from './header.module.scss';

function Header() {
	// // Logic to handle header visibility on scroll: this will hide the header when scrolling down and show it when scrolling up
	// const [offset, setOffset] = useState(0);
	// const lastScrollY = useRef(0);
	// const headerHeight = 64; // 64px is the height of the header (4rem)

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const currentY = window.scrollY;
	// 		const delta = currentY - lastScrollY.current;

	// 		// Only adjust when scrolling down
	// 		if (delta > 0) {
	// 			setOffset((prev) => Math.min(prev + delta, headerHeight));
	// 		} else {
	// 			setOffset((prev) => Math.max(prev + delta, 0));
	// 		}

	// 		lastScrollY.current = currentY;
	// 	};

	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => window.removeEventListener('scroll', handleScroll);
	// }, []);

	return (
		<header
			className={styles.header}
			// style={{ transform: `translateY(-${offset}px)` }}
		>
			<nav className={styles.nav}>
				<ul className={styles.ul}>
					<li>
						<a href='#top'>Retcon Consulting</a>
					</li>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#services'>Services</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
					<li>
						<a href='#contact'>Book Now</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
