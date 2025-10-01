'use client';

// Libary imports
import React from 'react';
import Link from 'next/link';

// Styles imports
import styles from './footer.module.scss';

// MUI icons
import { LinkedIn, Facebook } from '@mui/icons-material';

function Footer() {
	return (
		<div className={styles['footer-wrapper']}>
			<div className={styles.footer}>
				<div className={styles['footer-content']}>
					<div className={styles.copyright}>
						<span>&copy; {new Date().getFullYear()} Retcon Consulting.</span>{' '}
						<span>All rights reserved.</span>
					</div>
					<div className={styles['social-icons']}>
						<Link
							href='https://www.linkedin.com/company/retcon-consulting'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Visit our LinkedIn page'
							className={styles.link}
						>
							<LinkedIn className={styles.icon} />
						</Link>
						<Link
							href='https://www.facebook.com/retconconsulting'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Visit our Facebook page'
							className={styles.link}
						>
							<Facebook className={styles.icon} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
