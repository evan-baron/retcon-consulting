import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import Section from '../Section/Section';
import Cta from '../Cta/Cta';
import BeforeAfter from '../BeforeAfter/BeforeAfter';
import BrowserChrome from '../BrowserChrome/BrowserChrome';
import styles from './caseStudy.module.scss';

type Page = {
	id: string;
	label: string;
	title: string;
	/** Omit for a page that did not exist before: "after" is then shown on its own */
	before?: string;
	after: string;
	beforeAlt?: string;
	afterAlt: string;
	changes: readonly string[];
	/** Extra "after" detail shots shown beneath the main one */
	extras?: readonly { src: string; alt: string; caption: string }[];
};

type AdminItem = {
	id: string;
	title: string;
	text: string;
	src: string;
	alt: string;
	width: number;
	height: number;
};

export type CaseStudyContent = {
	client: string;
	/** Live site; omit when there is no public link to point at */
	url?: string;
	summary: string;
	meta: readonly { label: string; value: string }[];
	story: { title: string; challenge: readonly string[]; approach: readonly string[] };
	pages: readonly Page[];
	admin?: {
		eyebrow: string;
		title: string;
		intro: string;
		items: readonly AdminItem[];
	};
	outcome: { title: string; paragraphs: readonly string[] };
};

const delay = (ms: number) => ({ '--d': ms }) as React.CSSProperties;

/** Shared layout for every /work/* case study. */
export default function CaseStudy({
	content,
	snowOn,
}: {
	content: CaseStudyContent;
	/** Id of the page whose "After" shot gets the snowfall overlay */
	snowOn?: string;
}) {
	const { client, url, summary, meta, story, pages, admin, outcome } = content;

	const external = (label: string) =>
		({
			href: url,
			target: '_blank',
			rel: 'noopener noreferrer',
			'aria-label': `${label} (opens in a new tab)`,
		}) as const;

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
						{url ? (
							<a {...external(client)} className={styles.nameLink}>
								{client}
							</a>
						) : (
							client
						)}
					</h1>
					<p className={`${styles.lede} rise`} style={delay(240)}>
						{summary}
					</p>

					<dl className={`${styles.meta} rise`} style={delay(340)}>
						{meta.map(({ label, value }) => (
							<div key={label}>
								<dt className='mono'>{label}</dt>
								<dd>
									{url && label === 'Client' ? (
										<a {...external(value)} className={styles.metaLink}>
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

			<Section id='story' eyebrow='The story' title={story.title} tone='subtle'>
				<div className={styles.story}>
					<div className='reveal'>
						<h3>The challenge</h3>
						{story.challenge.map((p) => (
							<p key={p}>{p}</p>
						))}
					</div>
					<div className='reveal'>
						<h3>The approach</h3>
						{story.approach.map((p) => (
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
						{page.before && page.beforeAlt ? (
							<BeforeAfter
								before={page.before}
								after={page.after}
								beforeAlt={page.beforeAlt}
								afterAlt={page.afterAlt}
								label={`${page.label} page`}
								eager={i === 0}
								snow={page.id === snowOn}
							/>
						) : (
							<figure className={styles.shot}>
								<BrowserChrome />
								<Image
									src={page.after}
									alt={page.afterAlt}
									width={1920}
									height={1008}
									sizes='(max-width: 1160px) 100vw, 1080px'
								/>
							</figure>
						)}
					</div>
					{page.extras?.map(({ src, alt, caption }) => (
						<figure key={src} className={`${styles.extra} reveal`}>
							<div className={styles.shot}>
								<BrowserChrome />
								<Image
									src={src}
									alt={alt}
									width={1920}
									height={1008}
									sizes='(max-width: 1160px) 100vw, 1080px'
								/>
							</div>
							<figcaption className='mono'>{caption}</figcaption>
						</figure>
					))}
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

			{admin && (
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
									<BrowserChrome />
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
			)}

			<Section id='outcome' eyebrow='The result' title={outcome.title} tone='subtle'>
				<div className={`${styles.outcome} reveal`}>
					{outcome.paragraphs.map((p) => (
						<p key={p}>{p}</p>
					))}
					{url && (
						<a href={url} target='_blank' rel='noopener noreferrer' className={styles.liveLink}>
							Visit the live site <ArrowUpRight size={18} aria-hidden='true' />
							<span className='sr-only'>(opens in a new tab)</span>
						</a>
					)}
				</div>
			</Section>

			<Cta
				title='Ready for your own before and after?'
				text='Tell us about your site and what you want it to do. We will reply within one business day.'
			/>
		</>
	);
}
