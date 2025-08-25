'use client';

// Library imports
import React, { useState, useEffect, useRef, useMemo, createRef } from 'react';

// Hooks imports

// Styles imports
import styles from './commitment.module.scss';

// Components imports

// Context imports

const Commitment = () => {
	interface CommitmentRef {
		index: number;
		visible: boolean;
	}

	const commitmentRefs = useMemo(
		() => Array.from({ length: 7 }).map(() => createRef<HTMLDivElement>()),
		[]
	);

	const [commitmentRefsVisible, setCommitmentRefsVisible] = useState<
		CommitmentRef[]
	>(
		commitmentRefs.map((_, index) => ({
			index,
			visible: false,
		}))
	);

	useEffect(() => {
		const observer = new window.IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				// Definitions visibility logic
				const index = commitmentRefs.findIndex(
					(ref) => ref.current === entry.target
				);

				if (entry.target === commitmentRefs[index]?.current) {
					if (
						entry.intersectionRatio > 0 &&
						commitmentRefsVisible[index].visible === false
					) {
						setCommitmentRefsVisible((prev) =>
							prev.map((item) =>
								item.index === index ? { ...item, visible: true } : item
							)
						);
					} else if (
						!entry.isIntersecting &&
						entry.boundingClientRect.top > window.innerHeight
					) {
						setCommitmentRefsVisible((prev) =>
							prev.map((item) =>
								item.index === index ? { ...item, visible: false } : item
							)
						);
					}
				}
			});
		});

		commitmentRefs.forEach((ref) => {
			if (ref.current) observer.observe(ref.current);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<div className={styles['commitment-wrapper']}>
			<p
				className={`${styles.intro} ${
					commitmentRefsVisible[0].visible ? styles.visible : ''
				}`}
				ref={commitmentRefs[0]}
			>
				Excellence, for us, starts with how we work with you. From the very
				first conversation, we treat your goals as our own—listening carefully,
				asking the right questions, and translating your vision into a digital
				experience that feels both seamless and intentional.
			</p>

			<ul className={styles.pillars} role='list'>
				<li>
					<div
						className={`${styles.li} ${
							commitmentRefsVisible[1].visible ? styles.visible : ''
						}`}
						ref={commitmentRefs[1]}
					>
						<h4>Clear Communication</h4>
						<p>Transparent updates, open collaboration, and no surprises.</p>
					</div>
				</li>
				<li>
					<div
						className={`${styles.li} ${
							commitmentRefsVisible[2].visible ? styles.visible : ''
						}`}
						ref={commitmentRefs[2]}
					>
						<h4>Thoughtful Design &amp; Development</h4>
						<p>
							Solutions tailored to your business, not off-the-shelf templates.
						</p>
					</div>
				</li>
				<li>
					<div
						className={`${styles.li} ${
							commitmentRefsVisible[3].visible ? styles.visible : ''
						}`}
						ref={commitmentRefs[3]}
					>
						<h4>Attention to Detail</h4>
						<p>
							Every interaction, line of code, and design element delivered with
							precision.
						</p>
					</div>
				</li>
				<li>
					<div
						className={`${styles.li} ${
							commitmentRefsVisible[4].visible ? styles.visible : ''
						}`}
						ref={commitmentRefs[4]}
					>
						<h4>Reliability</h4>
						<p>
							We don't just launch and walk away. We deliver stable, dependable
							solutions from day one.
						</p>
					</div>
				</li>
				<li>
					<div
						className={`${styles.li} ${
							commitmentRefsVisible[5].visible ? styles.visible : ''
						}`}
						ref={commitmentRefs[5]}
					>
						<h4>Partnership</h4>
						<p>
							Your success is our success—every project is the start of a
							long-term relationship.
						</p>
					</div>
				</li>
			</ul>

			<p
				className={`${styles.closing} ${
					commitmentRefsVisible[6].visible ? styles.visible : ''
				}`}
				ref={commitmentRefs[6]}
			>
				Our commitment to excellence isn't a tagline, it's the standard we hold
				ourselves to in every decision, every deliverable, and every interaction
				with you.
			</p>
		</div>
	);
};

export default Commitment;
