import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, MapPin, Briefcase, UserRound } from 'lucide-react';
import Button from '@/components/Button/Button';
import Section from '@/components/Section/Section';
import Cta from '@/components/Cta/Cta';
import HeroVisual from '@/components/HeroVisual/HeroVisual';
import StackStrip from '@/components/StackStrip/StackStrip';
import {
	ConsultingArt,
	DevelopmentArt,
	DesignArt,
} from '@/components/Illustrations/Illustrations';
import { services, about } from '@/lib/content/home';
import styles from './page.module.scss';

const art = {
	consulting: <ConsultingArt />,
	development: <DevelopmentArt />,
	design: <DesignArt />,
};

const facts = [
	{ icon: Briefcase, label: 'Experience', value: '10+ years in technical sales and digital transformation' },
	{ icon: UserRound, label: 'Approach', value: 'Founder-led: you work directly with Evan' },
	{ icon: MapPin, label: 'Based in', value: 'Denver, CO, working with clients worldwide' },
];

const delay = (ms: number) => ({ '--d': ms }) as React.CSSProperties;

export default function Home() {
	return (
		<>
			{/* ---------- Hero ---------- */}
			<section className={styles.hero} aria-labelledby='hero-heading'>
				<div className={`container ${styles.heroGrid}`}>
					<div className={styles.heroCopy}>
						<p className={`mono ${styles.kicker} rise`} style={delay(0)}>
							Web development · Design · Strategy
						</p>
						<h1
							id='hero-heading'
							aria-label='Your growth story, rewritten.'
							className='rise'
							style={delay(100)}
						>
							<span aria-hidden='true'>
								Your growth story,
								<br />
								<del className={styles.del}>stuck</del>{' '}
								<ins className={styles.ins}>rewritten.</ins>
							</span>
						</h1>
						<p className={`${styles.lede} rise`} style={delay(220)}>
							Growth shouldn&apos;t feel like guesswork. We help startups,
							founders, and growing businesses move forward with purpose
							through custom web development, design, and product strategy.
						</p>
						<div className={`${styles.actions} rise`} style={delay(320)}>
							<Button href='/contact' arrow>
								Get started
							</Button>
							<Button href='/development' variant='secondary'>
								See how we build
							</Button>
						</div>

						<dl className={`${styles.definition} rise`} style={delay(440)}>
							<dt>
								<span className={styles.word}>retcon</span>
								<span className='mono'>ret·con · noun</span>
							</dt>
							<dd>
								the act, practice, or result of changing an existing narrative
								by introducing new information.
							</dd>
						</dl>
					</div>

					<div className={`${styles.visual} rise`} style={delay(300)}>
						<HeroVisual />
					</div>
				</div>

				<nav className={`container ${styles.strip} rise`} style={delay(560)} aria-label='Services'>
					<ul>
						{services.map(({ title }, i) => (
							<li key={title}>
								<Link href={title === 'Web Development' ? '/development' : '#services'}>
									<span className='mono'>0{i + 1}</span>
									{title}
									<ArrowRight size={16} aria-hidden='true' />
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</section>

			<StackStrip />

			{/* ---------- Services ---------- */}
			<Section
				id='services'
				eyebrow='Services'
				title='Everything you need to move forward.'
				intro='From the strategy behind your product to the website that represents it.'
				tone='subtle'
			>
				<ul className={styles.services}>
					{services.map(({ title, summary, id, points, href }, i) => (
						<li key={title} className={`${styles.card} reveal`}>
							<div className={styles.art}>
								{art[id]}
								<span className={`mono ${styles.num}`}>0{i + 1}</span>
							</div>
							<div className={styles.cardBody}>
								<h3>{title}</h3>
								<p className={styles.summary}>{summary}</p>
								<ul className={styles.points}>
									{points.map((point) => (
										<li key={point}>
											<Check size={16} strokeWidth={2.25} aria-hidden='true' />
											<span>{point}</span>
										</li>
									))}
								</ul>
								{href && (
									<Link href={href} className={styles.more}>
										Learn more <ArrowRight size={16} aria-hidden='true' />
									</Link>
								)}
							</div>
						</li>
					))}
				</ul>
			</Section>

			{/* ---------- Statement ---------- */}
			<section className={styles.statement} aria-label='Why Retcon'>
				<div className={styles.stDots} aria-hidden='true' />
				<div className='container'>
					<p className={`mono ${styles.stEyebrow}`}>
						<i aria-hidden='true' />
						Sound familiar?
					</p>
					<p className={`${styles.stText} reveal`}>
						If you&apos;re stuck, circling the same challenges, or unsure
						what&apos;s next,{' '}
						<strong>it&apos;s time to break the cycle.</strong>
					</p>
					<div className={styles.stRow}>
						<p>
							We help startups, entrepreneurs, and innovators move forward with
							purpose through design, product strategy, and creative
							problem-solving.
						</p>
						<Button href='/contact' variant='secondary' arrow>
							Rewrite your narrative
						</Button>
					</div>
				</div>
			</section>

			{/* ---------- About ---------- */}
			<Section id='about' eyebrow='About' title={`Meet ${about.name}.`} tone='subtle'>
				<div className={styles.about}>
					<div className={`${styles.portraitWrap} reveal`}>
						<span className={styles.pBlock} aria-hidden='true' />
						<Image
							src='/bw-portrait-cropped.webp'
							alt={`${about.name}, founder of Retcon Consulting`}
							width={340}
							height={625}
							className={styles.portrait}
						/>
					</div>
					<div className={`${styles.bio} reveal`}>
						{about.bio.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
						<ul className={styles.chips} aria-label='Industries'>
							{['SaaS', 'Martech', 'eCommerce', 'Product strategy', 'UX design', 'Full-stack development'].map(
								(c) => (
									<li key={c}>{c}</li>
								),
							)}
						</ul>
					</div>
				</div>

				<ul className={styles.facts}>
					{facts.map(({ icon: Icon, label, value }) => (
						<li key={label} className='reveal'>
							<span>
								<Icon size={20} strokeWidth={1.75} aria-hidden='true' />
							</span>
							<div>
								<p className='mono'>{label}</p>
								<p>{value}</p>
							</div>
						</li>
					))}
				</ul>
			</Section>

			<Cta
				title="It's time to rewrite your narrative."
				text='Tell us where you are stuck and where you want to go. We will help you map the way.'
			/>
		</>
	);
}
