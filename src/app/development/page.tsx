import type { Metadata } from 'next';
import { Check, Minus } from 'lucide-react';
import Section from '@/components/Section/Section';
import Cta from '@/components/Cta/Cta';
import Button from '@/components/Button/Button';
import ScoreRing from '@/components/ScoreRing/ScoreRing';
import {
	reasons,
	capabilities,
	process,
	measures,
	commitments,
	supportFeatures,
	supportTiers,
} from '@/lib/content/development';
import styles from './development.module.scss';

const description =
	'Retcon Consulting builds high-performance custom websites. Explore our process, how we measure success, and our ongoing support options.';

export const metadata: Metadata = {
	title: 'Custom Web Development',
	description,
	alternates: { canonical: '/development' },
	openGraph: {
		title: 'Custom Web Development | Retcon Consulting',
		description,
		url: '/development',
	},
};

const delay = (ms: number) => ({ '--d': ms }) as React.CSSProperties;

const targets = ['Performance', 'Accessibility', 'Best practices', 'SEO'];

export default function Development() {
	return (
		<>
			<section className={styles.hero} aria-labelledby='dev-heading'>
				<div className={`container ${styles.heroGrid}`}>
					<div>
						<p className={`mono ${styles.kicker} rise`}>Web development</p>
						<h1 id='dev-heading' className='rise' style={delay(100)}>
							Your website matters.
						</h1>
						<p className={`${styles.lede} rise`} style={delay(240)}>
							It&apos;s the first impression people have of your brand, the place
							they decide whether to trust you, and the hub where your marketing
							comes together. A clean, professional presence turns attention into
							confidence, and confidence into loyal customers.
						</p>
						<div className={`${styles.heroActions} rise`} style={delay(340)}>
							<Button href='/contact' arrow>
								Start your project
							</Button>
							<Button href='#process' variant='secondary'>
								See our process
							</Button>
						</div>
					</div>

					<figure className={`${styles.scoreCard} rise`} style={delay(300)}>
						<div className={styles.scoreHead}>
							<span className={styles.liveDot} aria-hidden='true' />
							<span className='mono'>Our target on every launch</span>
						</div>
						<div className={styles.rings} aria-hidden='true'>
							{targets.map((t, i) => (
								<ScoreRing key={t} value={100} label={t} delay={600 + i * 150} />
							))}
						</div>
						<figcaption>
							Measured with Lighthouse: performance, accessibility, best
							practices, and SEO.
						</figcaption>
					</figure>
				</div>
			</section>

			<Section
				id='custom'
				eyebrow='Why custom'
				title='Better performance, stronger SEO, no limits.'
				intro='Templates get you started. Custom development gets you where you are going.'
				tone='subtle'
			>
				<ul className={styles.grid}>
					{reasons.map(({ title, description, icon: Icon }) => (
						<li key={title} className={`${styles.cell} reveal`}>
							<span className={styles.icon}>
								<Icon size={20} strokeWidth={1.75} aria-hidden='true' />
							</span>
							<h3>{title}</h3>
							<p>{description}</p>
						</li>
					))}
				</ul>
			</Section>

			<Section
				id='capabilities'
				eyebrow='Beyond websites'
				title='Full-stack products, not just pages.'
				intro='When your site needs accounts, data, email, or automation, we build that too, end to end.'
			>
				<ul className={styles.grid}>
					{capabilities.map(({ title, description, icon: Icon }) => (
						<li key={title} className={`${styles.cell} reveal`}>
							<span className={styles.icon}>
								<Icon size={20} strokeWidth={1.75} aria-hidden='true' />
							</span>
							<h3>{title}</h3>
							<p>{description}</p>
						</li>
					))}
				</ul>
			</Section>

			<Section
				id='process'
				eyebrow='Process'
				title='A collaborative approach.'
				intro='We work closely with you so every detail reflects your vision and goals.'
				tone='white'
			>
				<ol className={styles.steps}>
					{process.map(({ title, description, icon: Icon }, i) => (
						<li key={title} className={`${styles.step} reveal`}>
							<div className={styles.stepTop}>
								<span className={styles.stepIcon}>
									<Icon size={20} strokeWidth={1.75} aria-hidden='true' />
								</span>
								<span className={`mono ${styles.number}`} aria-hidden='true'>
									{String(i + 1).padStart(2, '0')}
								</span>
							</div>
							<h3>{title}</h3>
							<p>{description}</p>
						</li>
					))}
				</ol>
			</Section>

			<Section id='measure' eyebrow='Results' title='How we measure success.' tone='subtle'>
				<ul className={styles.grid}>
					{measures.map(({ title, description, icon: Icon }) => (
						<li key={title} className={`${styles.cell} reveal`}>
							<span className={styles.icon}>
								<Icon size={20} strokeWidth={1.75} aria-hidden='true' />
							</span>
							<h3>{title}</h3>
							<p>{description}</p>
						</li>
					))}
				</ul>
			</Section>

			<Section id='commitment' eyebrow='Commitment' title='What you can expect.'>
				<ul className={styles.commitments}>
					{commitments.map(({ title, description }, i) => (
						<li key={title} className={`${styles.commitment} reveal`}>
							<span className={`mono ${styles.cNum}`}>0{i + 1}</span>
							<div>
								<h3>{title}</h3>
								<p>{description}</p>
							</div>
						</li>
					))}
				</ul>
			</Section>

			<Section
				id='support'
				eyebrow='Ongoing support'
				title='Launch is just the beginning.'
				intro='Choose the level of partnership that fits, from complete independence to proactive care and continuous feature work.'
				tone='white'
			>
				<div className={`${styles.tableWrap} reveal`}>
					<table className={styles.table}>
						<caption className='sr-only'>Support plans and what they include</caption>
						<thead>
							<tr>
								<th scope='col'>
									<span className='sr-only'>Feature</span>
								</th>
								{supportTiers.map((tier) => (
									<th key={tier.name} scope='col'>
										{tier.name}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{supportFeatures.map((feature, row) => (
								<tr key={feature}>
									<th scope='row'>{feature}</th>
									{supportTiers.map((tier) => (
										<td key={tier.name}>
											{tier.includes[row] ? (
												<>
													<span className={styles.yes}>
														<Check size={14} strokeWidth={3} aria-hidden='true' />
													</span>
													<span className='sr-only'>Included</span>
												</>
											) : (
												<>
													<Minus size={18} aria-hidden='true' className={styles.no} />
													<span className='sr-only'>Not included</span>
												</>
											)}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</Section>

			<Cta
				title="Let's build your website."
				text='Tell us about your project and which support level fits. We will reply within one business day.'
			/>
		</>
	);
}
