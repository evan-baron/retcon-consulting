'use client';

// Library imports
import React, { useState } from 'react';

// Styles imports
import styles from './hamburger.module.scss';

function Hamburger() {
	const [active, setActive] = useState(false);

	return (
		<div className={styles['hamburger-wrapper']}>
			<div className={styles.hamburger}>
				<div
					className={`${styles.icon} ${active ? styles.active : ''}`}
					onClick={() => {
						setActive(!active);
					}}
				>
					<span className={styles.line}></span>
				</div>

				<div
					className={`${styles['hamburger-content']} ${
						active ? styles.active : ''
					}`}
				>
					<ul className={styles.menu}>
						<li>
							<a href='#top' onClick={() => setActive(false)}>
								Home
							</a>
						</li>
						<li>
							<a href='#services' onClick={() => setActive(false)}>
								Services
							</a>
						</li>
						<li>
							<a href='#contact' onClick={() => setActive(false)}>
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
