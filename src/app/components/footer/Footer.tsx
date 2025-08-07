'use client';

// Libary imports
import React from 'react';

// Styles imports
import styles from './footer.module.scss';

// Context
import { useAppContext } from '@/app/context/AppContext';

// MUI icons
import { LinkedIn, Instagram, Facebook, Twitter } from '@mui/icons-material';

function Footer() {
	const { isTouchDevice, windowWidth } = useAppContext();

	return (
		<div className={styles['footer-wrapper']}>
			{(!windowWidth || windowWidth <= 500) && (
				<a
					href='#'
					className={`${styles['to-top']} ${
						isTouchDevice && styles['hover-enabled']
					}`}
				>
					&uarr; To the top &uarr;
				</a>
			)}
			<div className={styles.footer}>
				<div className={styles['footer-content']}>
					<span>
						&copy; {new Date().getFullYear()} Retcon Consulting. All rights
						reserved.
					</span>
					{windowWidth && windowWidth > 500 && (
						<a href='#' className={styles['to-top']}>
							&uarr; To the top &uarr;
						</a>
					)}
					<div className={styles['social-icons']}>
						<LinkedIn className={styles.icon} />
						<Twitter className={styles.icon} />
						<Facebook className={styles.icon} />
						<Instagram className={styles.icon} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
