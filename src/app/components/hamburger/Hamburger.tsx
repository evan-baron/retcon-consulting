'use client';

// Library imports
import React, { useState } from 'react';

// Styles imports
import styles from './hamburger.module.scss';

function Hamburger({
	setHamburgerActive,
}: {
	setHamburgerActive: (hamburgerActive: boolean) => void;
}) {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		const newActiveState = !active;
		setActive(newActiveState);
		setHamburgerActive(newActiveState);
	};

	return (
		<div className={styles['hamburger-wrapper']}>
			<div className={styles.hamburger}>
				<div
					className={`${styles.icon} ${active ? styles.active : ''}`}
					onClick={() => {
						setActive(!active);
						setHamburgerActive(!active);
					}}
				>
					<span className={styles.line}></span>
				</div>

				<div
					className={`${styles['hamburger-content']} ${
						active ? styles.active : ''
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
