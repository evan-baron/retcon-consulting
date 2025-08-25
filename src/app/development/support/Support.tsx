'use client';

// Library imports
import React, { useState, useEffect, useRef, useMemo, createRef } from 'react';

// Hooks imports

// Styles imports
import styles from './support.module.scss';

// Components imports

// Context imports

const Support = () => {
	interface SupportRef {
		index: number;
		visible: boolean;
	}

	const supportRefs = useMemo(
		() => Array.from({ length: 7 }).map(() => createRef<HTMLDivElement>()),
		[]
	);

	const [supportRefsVisible, setSupportRefsVisible] = useState<SupportRef[]>(
		supportRefs.map((_, index) => ({
			index,
			visible: false,
		}))
	);

	useEffect(() => {
		const observer = new window.IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				// Definitions visibility logic
				const index = supportRefs.findIndex(
					(ref) => ref.current === entry.target
				);

				if (entry.target === supportRefs[index]?.current) {
					if (
						entry.intersectionRatio > 0 &&
						supportRefsVisible[index].visible === false
					) {
						setSupportRefsVisible((prev) =>
							prev.map((item) =>
								item.index === index ? { ...item, visible: true } : item
							)
						);
					} else if (
						!entry.isIntersecting &&
						entry.boundingClientRect.top > window.innerHeight
					) {
						setSupportRefsVisible((prev) =>
							prev.map((item) =>
								item.index === index ? { ...item, visible: false } : item
							)
						);
					}
				}
			});
		});

		supportRefs.forEach((ref) => {
			if (ref.current) observer.observe(ref.current);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<div className={styles['support-wrapper']}>
			<p
				className={`${styles.intro} ${
					supportRefsVisible[0].visible ? styles.visible : ''
				}`}
				ref={supportRefs[0]}
			>
				Launching your website is just the beginning. We stay by your side to
				ensure your site continues to perform, stay secure, and grow alongside
				your business. Our team is dedicated to proactive care, quick
				assistance, and continuous improvement.
			</p>

			<ul className={styles.pillars} role='list'>
				<li>
					<div
						className={`${styles.li} ${
							supportRefsVisible[1].visible ? styles.visible : ''
						}`}
						ref={supportRefs[1]}
					>
						<h4>Proactive Maintenance</h4>
						<p>
							Regular updates, security checks, and performance monitoring to
							keep your site running smoothly.
						</p>
					</div>
				</li>
				<li>
					<div
						className={`${styles.li} ${
							supportRefsVisible[2].visible ? styles.visible : ''
						}`}
						ref={supportRefs[2]}
					>
						<h4>Technical Assistance</h4>
						<p>
							Reliable help whenever you need it, from small tweaks to complex
							fixes.
						</p>
					</div>
				</li>
				<li>
					<div
						className={`${styles.li} ${
							supportRefsVisible[3].visible ? styles.visible : ''
						}`}
						ref={supportRefs[3]}
					>
						<h4>Feature Enhancements</h4>
						<p>
							New functionality added as your business evolves—whether that’s
							e-commerce, member portals, or interactive tools.
						</p>
					</div>
				</li>
				<li>
					<div
						className={`${styles.li} ${
							supportRefsVisible[4].visible ? styles.visible : ''
						}`}
						ref={supportRefs[4]}
					>
						<h4>Ongoing Optimization</h4>
						<p>
							Regular evaluations of performance, SEO, and accessibility to keep
							your site ahead of the curve.
						</p>
					</div>
				</li>
				<li>
					<div
						className={`${styles.li} ${
							supportRefsVisible[5].visible ? styles.visible : ''
						}`}
						ref={supportRefs[5]}
					>
						<h4>Mobile Responsiveness</h4>
						<p>
							Testing across devices and browsers to guarantee a seamless
							experience everywhere your customers are.
						</p>
					</div>
				</li>
			</ul>

			<p
				className={`${styles.closing} ${
					supportRefsVisible[6].visible ? styles.visible : ''
				}`}
				ref={supportRefs[6]}
			>
				With ongoing support, you can focus on growing your business while we
				ensure your website remains a reliable, high-performing digital asset.
			</p>
		</div>
	);
};

export default Support;
