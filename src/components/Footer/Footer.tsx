import Link from 'next/link';
import Logo from '../Logo';
import { site } from '@/lib/site';
import styles from './footer.module.scss';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={`container ${styles.inner}`}>
				<div className={styles.brand}>
					<Link href='/' className={styles.logo}>
						<Logo size={24} />
						<span>{site.name}</span>
					</Link>
					<p>{site.description}</p>
				</div>
				<nav aria-label='Footer'>
					<h2 className='mono'>Navigate</h2>
					<ul>
						{site.nav.map((item) => (
							<li key={item.href}>
								<Link href={item.href}>{item.label}</Link>
							</li>
						))}
					</ul>
				</nav>
				<div>
					<h2 className='mono'>Contact</h2>
					<ul>
						<li>
							<a href={`mailto:${site.email}`}>{site.email}</a>
						</li>
						<li>Denver, CO</li>
					</ul>
				</div>
			</div>

			<p className={styles.word} aria-hidden='true'>
				Retcon
			</p>

			<div className={styles.legalWrap}>
				<div className={`container ${styles.legal}`}>
					<p>
						&copy; {new Date().getFullYear()} {site.name}. All rights reserved.
					</p>
					<p className='mono'>Rewrite the narrative</p>
				</div>
			</div>
		</footer>
	);
}
