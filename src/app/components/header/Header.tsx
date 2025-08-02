// Library imports
import React from 'react';

// Styles imports
import styles from './header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.ul}>
					<li>
						<a href='#top'>RetCon Consulting</a>
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
