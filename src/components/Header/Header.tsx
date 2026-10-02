'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from '../Logo';
import { site } from '@/lib/site';
import styles from './header.module.scss';

export default function Header() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
		document.addEventListener('keydown', onKey);
		return () => document.removeEventListener('keydown', onKey);
	}, []);

	return (
		<header className={styles.header}>
			<div className={`container ${styles.bar}`}>
				<Link
					href='/'
					className={styles.brand}
					aria-label={`${site.name} home`}
					onClick={() => setOpen(false)}
				>
					<Logo size={26} />
					<span>{site.name}</span>
				</Link>

				<nav
					id='primary-nav'
					className={`${styles.nav} ${open ? styles.open : ''}`}
					aria-label='Primary'
				>
					<ul>
						{site.nav.map((item) => (
							<li key={item.href}>
								<Link
									href={item.href}
									aria-current={pathname === item.href ? 'page' : undefined}
									onClick={() => setOpen(false)}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<Link href='/contact' className={styles.cta}>
					Get in touch
				</Link>

				<button
					type='button'
					className={styles.toggle}
					aria-expanded={open}
					aria-controls='primary-nav'
					aria-label={open ? 'Close menu' : 'Open menu'}
					onClick={() => setOpen((v) => !v)}
				>
					{open ? <X size={22} /> : <Menu size={22} />}
				</button>
			</div>
		</header>
	);
}
