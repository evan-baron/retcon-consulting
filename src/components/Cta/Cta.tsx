import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { site } from '@/lib/site';
import styles from './cta.module.scss';

export default function Cta({
	title = "Let's build something together.",
	text = 'Tell us about your project and we will get back to you within one business day.',
}: {
	title?: ReactNode;
	text?: string;
}) {
	return (
		<section className={styles.wrap} aria-labelledby='cta-heading'>
			<div className='container'>
				<div className={styles.card}>
					<div className={styles.copy}>
						<p className={`mono ${styles.eyebrow}`}>
							<i aria-hidden='true' />
							Start a project
						</p>
						<h2 id='cta-heading'>{title}</h2>
						<p className={styles.text}>{text}</p>
					</div>
					<div className={styles.actions}>
						<Link href='/contact' className={styles.primary}>
							Start a conversation <ArrowRight size={18} aria-hidden='true' />
						</Link>
						<a href={`mailto:${site.email}`} className={styles.mail}>
							{site.email}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
