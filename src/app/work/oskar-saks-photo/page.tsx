import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import Section from '@/components/Section/Section';
import Cta from '@/components/Cta/Cta';
import BeforeAfter from '@/components/BeforeAfter/BeforeAfter';
import { oskarSaks } from '@/lib/content/oskarSaks';
import styles from './caseStudy.module.scss';

const title = 'Case Study: Oskar Saks Photo';
const description = `${oskarSaks.summary} See the before and after.`;

export const metadata: Metadata = {
	title,
	description,
	alternates: { canonical: `/work/${oskarSaks.slug}` },
	openGraph: {
		title: `${title} | Retcon Consulting`,
		description,
		url: `/work/${oskarSaks.slug}`,
		images: [
			{
				url: '/work/oskar-saks-photo/home-after.webp',
				width: 1920,
				height: 1008,
				alt: 'The redesigned Oskar Saks Photo home page',
			},
		],
	},
};

const delay = (ms: number) => ({ '--d': ms }) as React.CSSProperties;

export default function OskarSaksCaseStudy() {
	const { client, url, summary, meta, challenge, approach, pages, admin, outcome } = oskarSaks;

	return (
		<>
			<section className={styles.hero} aria-labelledby='cs-heading'>
				<div className='container'>
					<Link href='/#work' className={`mono ${styles.back} rise`}>
						<ArrowLeft size={14} aria-hidden='true' /> Selected work
					</Link>
					<p className={`mono ${styles.kicker} rise`} style={delay(60)}>
						Case study
					</p>
					<h1 id='cs-heading' className='rise' style={delay(120)}>
						<a
							href={url}
							target='_blank'
							rel='noopener noreferrer'
							className={styles.nameLink}
							aria-label={`${client} (opens in a new tab)`}
						>
							{client}
						</a>
					</h1>
					<p className={`${styles.lede} rise`} style={delay(240)}>
						{summary}
					</p>

					<dl className={`${styles.meta} rise`} style={delay(340)}>
						{meta.map(({ label, value }) => (
							<div key={label}>
								<dt className='mono'>{label}</dt>
								<dd>
									{label === 'Client' ? (
										<a
											href={url}
											target='_blank'
											rel='noopener noreferrer'
											className={styles.metaLink}
											aria-label={`${value} (opens in a new tab)`}
										>
											{value}
										</a>
									) : (
										value
									)}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</section>

			<Section
				id='story'
				eyebrow='The story'
				title='A great portfolio deserved a better frame.'
				tone='subtle'
			>
				<div className={styles.story}>
					<div className='reveal'>
						<h3>The challenge</h3>
						{challenge.map((p) => (
							<p key={p}>{p}</p>
						))}
					</div>
					<div className='reveal'>
						<h3>The approach</h3>
						{approach.map((p) => (
							<p key={p}>{p}</p>
						))}
					</div>
				</div>
			</Section>

			{pages.map((page, i) => (
				<Section
					key={page.id}
					id={page.id}
					eyebrow={`0${i + 1} · ${page.label}`}
					title={page.title}
					tone={i % 2 === 0 ? 'base' : 'white'}
				>
					<div className={`${styles.compare} reveal`}>
						<BeforeAfter
							before={page.before}
							after={page.after}
							beforeAlt={page.beforeAlt}
							afterAlt={page.afterAlt}
							label={`${page.label} page`}
							eager={i === 0}
							snow={page.id === 'home'}
						/>
					</div>
					<ul className={styles.changes}>
						{page.changes.map((change) => (
							<li key={change} className='reveal'>
								<Check size={16} strokeWidth={2.25} aria-hidden='true' />
								<span>{change}</span>
							</li>
						))}
					</ul>
				</Section>
			))}

			<Section
				id='admin'
				eyebrow={admin.eyebrow}
				title={admin.title}
				intro={admin.intro}
				tone='subtle'
			>
				<ul className={styles.admin}>
					{admin.items.map(({ id, title, text, src, alt, width, height }) => (
						<li key={id} className={`${styles.adminItem} reveal`}>
							<figure className={styles.shot}>
								<div className={styles.shotChrome} aria-hidden='true'>
									<span />
									<span />
									<span />
								</div>
								<Image
									src={src}
									alt={alt}
									width={width}
									height={height}
									sizes='(max-width: 1000px) 100vw, 640px'
								/>
							</figure>
							<div className={styles.adminText}>
								<h3>{title}</h3>
								<p>{text}</p>
							</div>
						</li>
					))}
				</ul>
			</Section>

			<Section id='outcome' eyebrow='The result' title='One brand, from first look to booking.' tone='subtle'>
				<div className={`${styles.outcome} reveal`}>
					{outcome.map((p) => (
						<p key={p}>{p}</p>
					))}
				</div>
			</Section>

			<Cta
				title='Ready for your own before and after?'
				text='Tell us about your site and what you want it to do. We will reply within one business day.'
			/>
		</>
	);
}
