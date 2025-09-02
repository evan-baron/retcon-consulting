'use client';

// Library imports
import React, { useState, useEffect, useRef, useMemo, createRef } from 'react';

// Hooks imports

// Styles imports
import styles from './measureSuccess.module.scss';

// Components imports

// Context imports
import { useAppContext } from '@/app/context/AppContext';

// Data imports
import { MeasureDefinitions } from '@/lib/data/measure-success';

const MeasureSuccess = () => {
	const { isMobile } = useAppContext();
	const scores = ['Performance', 'Accessibility', 'Best Practices', 'SEO'];

	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const fireworksRef = useRef<HTMLDivElement | null>(null);

	interface DefinitionRefs {
		index: number;
		visible: boolean;
	}

	// Intro paragraph ref
	const introRef = useRef<HTMLParagraphElement>(null);

	// Definitions refs
	const definitionsRefs = useMemo(
		() => Array.from({ length: 6 }).map(() => createRef<HTMLDListElement>()),
		[]
	);

	// Summary paragraph ref
	const summaryRef = useRef<HTMLParagraphElement>(null);

	// Combine all definition refs for easier observation
	const allRefs = useMemo(
		() => [introRef, ...definitionsRefs, summaryRef],
		[introRef, definitionsRefs, summaryRef]
	);

	const [definitionsRefsVisible, setDefinitionsRefsVisible] = useState<
		DefinitionRefs[]
	>(
		allRefs.map((_, index) => ({
			index,
			visible: false,
		}))
	);

	const [fireworksActive, setFireworksActive] = useState(false);
	const [showFireworks, setShowFireworks] = useState(true);
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		const checkVisibility = (
			entry: IntersectionObserverEntry,
			index: number
		) => {
			const rect = entry.boundingClientRect;
			const inViewport =
				rect.top < window.innerHeight &&
				rect.bottom > 0 &&
				rect.left < window.innerWidth &&
				rect.right > 0;
			if (inViewport) {
				setDefinitionsRefsVisible((prev) =>
					prev.map((item) =>
						item.index === index ? { ...item, visible: true } : item
					)
				);
			}
		};

		const observer = new window.IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.target === fireworksRef.current) {
					setFireworksActive(entry.isIntersecting);
				}

				// Only trigger animation logic for wrapperRef
				if (entry.target === wrapperRef.current) {
					// When entering viewport from below, animate
					if (entry.intersectionRatio > 0 && !hasAnimated) {
						setHasAnimated(true);
					}
					// When leaving viewport at the bottom, reset
					if (
						!entry.isIntersecting &&
						entry.boundingClientRect.top > window.innerHeight
					) {
						setHasAnimated(false);
					}
				}

				// Definitions visibility logic
				const index = allRefs.findIndex((ref) => ref.current === entry.target);

				if (entry.target === allRefs[index]?.current) {
					if (
						entry.intersectionRatio > 0 &&
						definitionsRefsVisible[index].visible === false
					) {
						setDefinitionsRefsVisible((prev) =>
							prev.map((item) =>
								item.index === index ? { ...item, visible: true } : item
							)
						);
					} else if (
						!entry.isIntersecting &&
						entry.boundingClientRect.top > window.innerHeight
					) {
						setDefinitionsRefsVisible((prev) =>
							prev.map((item) =>
								item.index === index ? { ...item, visible: false } : item
							)
						);
					}
				}

				// Double check if item is on screen
				checkVisibility(entry, index);
			});
		});

		if (fireworksRef.current) observer.observe(fireworksRef.current);

		if (wrapperRef.current) observer.observe(wrapperRef.current);

		allRefs.forEach((ref) => {
			if (ref.current) observer.observe(ref.current);
		});

		return () => observer.disconnect();
	}, [allRefs, definitionsRefs, definitionsRefsVisible, hasAnimated]);

	const handleChange = () => {
		setShowFireworks((prev) => !prev);
	};

	return (
		<div className={styles['measureSuccess-wrapper']} ref={wrapperRef}>
			<div
				className={`${styles['lighthouse-wrapper']} ${
					hasAnimated ? styles.animate : ''
				}`}
				ref={fireworksRef}
			>
				<ul className={styles['scores']} aria-label='Lighthouse Scores'>
					{scores.map((score) => (
						<li key={score} className={styles['score-box']}>
							<div className={styles.score}>100</div>
							<div className={styles.label}>{score}</div>
						</li>
					))}
				</ul>
				{fireworksActive && showFireworks ? (
					<div
						className={styles.pyro}
						data-credit='CSS Fireworks. Originally by Eddie Lin https://codepen.io/paulirish/pen/yEVMbP'
					>
						<div className={styles.before}></div>
						<div className={styles.after}></div>
					</div>
				) : null}
				<div className={styles['fireworks-toggle']}>
					<input
						id='fireworks-toggle'
						type='checkbox'
						checked={!showFireworks}
						onChange={(e) => {
							e.stopPropagation();
							handleChange();
						}}
						aria-labelledby='fireworks-label'
					/>
					<label
						aria-label='Toggle Fireworks'
						htmlFor='fireworks-label'
						onClick={(e) => {
							e.stopPropagation();
							handleChange();
						}}
					>
						Toggle Fireworks
					</label>
				</div>
			</div>
			<div className={styles.definitions}>
				<p
					className={`${styles.intro} ${
						definitionsRefsVisible[0].visible ? styles.visible : ''
					}`}
					ref={introRef}
				>
					When we measure success at launch, our process extends beyond simply
					“the site is live.”
				</p>
				{!isMobile ? (
					<div className={styles['definitions-grid']}>
						{MeasureDefinitions.map((def, index) => (
							<dl
								className={`${styles.definition} ${
									definitionsRefsVisible[index + 1].visible
										? styles.visible
										: ''
								}`}
								ref={definitionsRefs[index]}
								key={def.title}
							>
								<div className={styles['icon-wrapper']}>{def.icon}</div>
								<dt>{def.title}</dt>
								<dd>{def.description}</dd>
							</dl>
						))}
					</div>
				) : (
					<div className={styles['definitions-list']}>
						{MeasureDefinitions.map((def, index) => (
							<dl
								className={`${styles.definition} ${
									definitionsRefsVisible[index + 1].visible
										? styles.visible
										: ''
								}`}
								ref={definitionsRefs[index]}
								key={def.title}
							>
								<dt>{def.title}</dt>
								<dd>{def.description}</dd>
							</dl>
						))}
					</div>
				)}
				{/* <dl
					className={`${styles.definition} ${
						definitionsRefsVisible[1].visible ? styles.visible : ''
					}`}
					ref={definitionsRefs[0]}
				>
					<dt>Performance</dt>
					<dd>
						We benchmark performance with Lighthouse and verify Core Web Vitals
						across both desktop and mobile. Largest Contentful Paint (LCP) under{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							2.5s
						</span>
						, First Input Delay (FID) under{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							100ms
						</span>
						, and Cumulative Layout Shift (CLS) under{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							0.1
						</span>
						. We run audits in PageSpeed Insights and WebPageTest to capture
						performance under different network conditions.
					</dd>
				</dl>
				<dl
					className={`${styles.definition} ${
						definitionsRefsVisible[2].visible ? styles.visible : ''
					}`}
					ref={definitionsRefs[1]}
				>
					<dt>Accessibility</dt>
					<dd>
						Accessibility is checked against WCAG 2.1 AA standards with Axe,
						Wave, and Lighthouse Accessibility audits. We target a Lighthouse
						Accessibility score of{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							90+
						</span>{' '}
						to ensure usability for all audiences.
					</dd>
				</dl>
				<dl
					className={`${styles.definition} ${
						definitionsRefsVisible[3].visible ? styles.visible : ''
					}`}
					ref={definitionsRefs[2]}
				>
					<dt>Best Practices</dt>
					<dd>
						Technical reliability is verified through SSL validation,
						browser/device testing with BrowserStack, and deployment logs to
						ensure error-free builds. Lighthouse Best Practices score should be{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							90+
						</span>
						, with HTTPS enforced site-wide.
					</dd>
				</dl>
				<dl
					className={`${styles.definition} ${
						definitionsRefsVisible[4].visible ? styles.visible : ''
					}`}
					ref={definitionsRefs[3]}
				>
					<dt>SEO</dt>
					<dd>
						We confirm correct use of structured data (schema.org), validate
						metadata and heading structure, and crawl the site with Screaming
						Frog to ensure full indexability and eliminate broken links. We aim
						for Lighthouse SEO scores of 90+ at launch.
					</dd>
				</dl>
				<dl
					className={`${styles.definition} ${
						definitionsRefsVisible[5].visible ? styles.visible : ''
					}`}
					ref={definitionsRefs[4]}
				>
					<dt>Mobile Responsiveness</dt>
					<dd>
						We test layouts across multiple screen sizes and devices using
						BrowserStack and Chrome DevTools. Success means a fully responsive
						experience, with no horizontal scrolling, properly scaled
						text/images, and interactive elements passing Google&apos;s
						Mobile-Friendly Test.
					</dd>
				</dl> */}
				<p
					className={`${styles.summary} ${'descriptor'} ${
						definitionsRefsVisible[7].visible ? styles.visible : ''
					}`}
					ref={summaryRef}
				>
					Success at launch means your website is{' '}
					<span style={{ fontWeight: 'bold' }}>
						fast, accessible, optimized for search
					</span>
					, and <span style={{ fontWeight: 'bold' }}>responsive</span> across
					all devices from day one.
				</p>
			</div>
		</div>
	);
};

export default MeasureSuccess;
