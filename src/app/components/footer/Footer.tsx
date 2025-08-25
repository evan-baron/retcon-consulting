'use client';

// Libary imports
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Styles imports
import styles from './footer.module.scss';

// Context
import { useAppContext } from '@/app/context/AppContext';

// MUI icons
import { LinkedIn, Instagram, Facebook, Twitter } from '@mui/icons-material';

function Footer() {
	const { windowWidth } = useAppContext();
	const pathname = usePathname();

	return (
		<div className={styles['footer-wrapper']}>
			{(!windowWidth || windowWidth <= 500) && (
				<Link href='/' className={styles['to-top']}>
					&uarr; To the top &uarr;
				</Link>
			)}
			<div className={styles.footer}>
				<div className={styles['footer-content']}>
					<div className={styles.copyright}>
						<span>&copy; {new Date().getFullYear()} Retcon Consulting.</span>{' '}
						<span>All rights reserved.</span>
					</div>
					{windowWidth &&
						windowWidth > 500 &&
						(pathname === '/' ? (
							<Link href='/' className={styles['to-top']}>
								&uarr; To the top &uarr;
							</Link>
						) : (
							<button
								className={styles['to-top']}
								type='button'
								onClick={() => window.scrollTo({ top: 0 })}
							>
								&uarr; To the top &uarr;
							</button>
						))}
					<div className={styles['social-icons']}>
						<Link
							href='https://www.linkedin.com/company/retcon-consulting'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Visit our LinkedIn page'
						>
							<LinkedIn className={styles.icon} />
						</Link>
						{/* <Twitter className={styles.icon} /> */}
						<Link
							href='https://www.facebook.com/retconconsulting'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Visit our Facebook page'
						>
							<Facebook className={styles.icon} />
						</Link>
						<Link
							href='https://www.instagram.com/retconconsulting'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Visit our Instagram page'
						>
							<Instagram className={styles.icon} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
