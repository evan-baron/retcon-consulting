import type { Metadata } from 'next';
import { Mail, Clock, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm/ContactForm';
import { site } from '@/lib/site';
import styles from './contact.module.scss';

const description =
	'Get in touch with Retcon Consulting about web development, design, or product strategy. Tell us about your project and we will reply within one business day.';

export const metadata: Metadata = {
	title: 'Contact',
	description,
	alternates: { canonical: '/contact' },
	openGraph: {
		title: 'Contact | Retcon Consulting',
		description,
		url: '/contact',
	},
};

export default function Contact() {
	return (
		<section className={styles.page} aria-labelledby='contact-heading'>
			<div className={`container ${styles.layout}`}>
				<div className={styles.intro}>
					<p className={`mono ${styles.kicker} rise`}>Contact</p>
					<h1 id='contact-heading' className='rise' style={{ '--d': 100 } as React.CSSProperties}>
						Let&apos;s build something together.
					</h1>
					<p className={`${styles.lede} rise`} style={{ '--d': 220 } as React.CSSProperties}>
						Tell us a bit about your project. We&apos;ll follow up to talk
						through goals, timeline, and the best way to help.
					</p>
					<ul className={`${styles.details} rise`} style={{ '--d': 320 } as React.CSSProperties}>
						<li>
							<Mail size={18} strokeWidth={1.75} aria-hidden='true' />
							<a href={`mailto:${site.email}`}>{site.email}</a>
						</li>
						<li>
							<Clock size={18} strokeWidth={1.75} aria-hidden='true' />
							<span>Replies within one business day</span>
						</li>
						<li>
							<MapPin size={18} strokeWidth={1.75} aria-hidden='true' />
							<span>Denver, CO · Working with clients worldwide</span>
						</li>
					</ul>
				</div>

				<div className='rise' style={{ '--d': 260 } as React.CSSProperties}>
					<ContactForm />
				</div>
			</div>
		</section>
	);
}
