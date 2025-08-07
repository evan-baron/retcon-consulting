'use client';

// Library imports
import React, { useState } from 'react';

// Styles imports
import styles from './hamburger.module.scss';

function Hamburger({
	setHamburgerActive,
	hamburgerActive,
}: {
	setHamburgerActive: (hamburgerActive: boolean) => void;
	hamburgerActive: boolean;
}) {
	const handleClick = () => {
		const newActiveState = !hamburgerActive;
		setHamburgerActive(newActiveState);
	};

	return (
		<div className={styles['hamburger-wrapper']}>
			<div className={styles.hamburger}>
				<div
					className={`${styles.icon} ${hamburgerActive ? styles.active : ''}`}
					onClick={handleClick}
				>
					<span className={styles.line}></span>
				</div>

				<div
					className={`${styles['hamburger-content']} ${
						hamburgerActive ? styles.active : ''
					}`}
					onClick={handleClick}
				>
					<ul className={styles.menu}>
						<li>
							<a href='#top' onClick={handleClick}>
								Home
							</a>
						</li>
						<li>
							<a href='#services' onClick={handleClick}>
								Services
							</a>
						</li>
						<li>
							<a href='#contact' onClick={handleClick}>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Hamburger;
