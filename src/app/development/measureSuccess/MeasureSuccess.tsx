'use client';

// Library imports
import React, { useState, useEffect, useRef } from 'react';

// Hooks imports

// Styles imports
import styles from './measureSuccess.module.scss';

// Components imports

// Context imports

const MeasureSuccess = () => {
	const scores = ['Performance', 'Accessibility', 'Best Practices', 'SEO'];

	const wrapperRef = useRef<HTMLDivElement | null>(null);

	const [fireworksActive, setFireworksActive] = useState(false);

	useEffect(() => {
		const observer = new window.IntersectionObserver(
			([entry]) => {
				setFireworksActive(entry.isIntersecting);
			},
			{ threshold: 0.1 }
		);
		if (wrapperRef.current) observer.observe(wrapperRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<div className={styles['measureSuccess-wrapper']}>
			<div className={styles['lighthouse-wrapper']} ref={wrapperRef}>
				<div className={styles['scores']}>
					{scores.map((score) => (
						<div key={score} className={styles['score-box']}>
							<div className={styles.score}>100</div>
							<div className={styles.label}>{score}</div>
						</div>
					))}
				</div>
				<div
					className={`${styles.pyro} ${fireworksActive ? styles.active : ''}`}
				>
					<div className={styles.before}></div>
					<div className={styles.after}></div>
				</div>
			</div>
			<div className={styles.definitions}>
				<h4>
					When we measure success at launch, our process extends beyond simply
					“the site is live.”
				</h4>
				<div className={styles.definition}>
					<h5>Performance</h5>
					<p>
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
					</p>
				</div>
				<div className={styles.definition}>
					<h5>Accessibility</h5>
					<p>
						Accessibility is checked against WCAG 2.1 AA standards with Axe,
						Wave, and Lighthouse Accessibility audits. We target a Lighthouse
						Accessibility score of{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							90+
						</span>{' '}
						to ensure usability for all audiences.
					</p>
				</div>
				<div className={styles.definition}>
					<h5>Best Practices</h5>
					<p>
						Technical reliability is verified through SSL validation,
						browser/device testing with BrowserStack, and deployment logs to
						ensure error-free builds. Lighthouse Best Practices score should be{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							90+
						</span>
						, with HTTPS enforced site-wide.
					</p>
				</div>
				<div className={styles.definition}>
					<h5>SEO</h5>
					<p>
						We confirm correct use of structured data (schema.org), validate
						metadata and heading structure, and crawl the site with Screaming
						Frog to ensure full indexability and eliminate broken links. We aim
						for Lighthouse SEO scores of 90+ at launch.
					</p>
				</div>
				<div className={styles.definition}>
					<h5>Mobile Responsiveness</h5>
					<p>
						We test layouts across multiple screen sizes and devices using
						BrowserStack and Chrome DevTools. Success means a fully responsive
						experience, with no horizontal scrolling, properly scaled
						text/images, and interactive elements passing Google's
						Mobile-Friendly Test.
					</p>
				</div>
				<p className={styles.summary}>
					Success at launch means the website is fast (meeting Core Web Vitals
					thresholds), accessible (WCAG 2.1 AA compliance), optimized for search
					(90+ SEO score), and technically sound across devices—ready to support
					the client's business from day one.
				</p>
			</div>
		</div>
	);
};

export default MeasureSuccess;
