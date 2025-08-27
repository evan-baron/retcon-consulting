'use client';

// Library imports
import React, { useState, useEffect, useRef, useMemo, createRef } from 'react';

// Hooks imports

// Styles imports
import styles from './commitment.module.scss';

// Components imports

// Context imports

// Data imports
import { CommitmentPillars } from '../../../lib/data/commitment-pillars';

const Commitment = () => {
	interface CommitmentRef {
		index: number;
		visible: boolean;
	}

	const commitmentRefs = useMemo(
		// length is intro + closing + length of CommitmentPillars
		() =>
			Array.from({ length: 2 + CommitmentPillars.length }).map(() =>
				createRef<HTMLDivElement>()
			),
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
				We measure excellence by the way we work with our clients. From the very
				first conversation, <span>your goals become ours</span>. We listen
				closely, ask thoughtful questions, and transform your vision into a
				polished digital experience that's intuitive, purposeful, and reliably
				delivered.
			</p>

			<ul className={styles.pillars} role='list'>
				{CommitmentPillars.map((pillar, index) => (
					<li key={index}>
						<div
							className={`${styles.li} ${
								commitmentRefsVisible[index + 1]?.visible ? styles.visible : ''
							}`}
							ref={commitmentRefs[index + 1]}
						>
							<h3>{pillar.title}</h3>
							<p>{pillar.description}</p>
						</div>
					</li>
				))}
			</ul>

			<p
				className={`${styles.closing} ${
					commitmentRefsVisible[1 + CommitmentPillars.length].visible
						? styles.visible
						: ''
				}`}
				ref={commitmentRefs[1 + CommitmentPillars.length]}
			>
				Our commitment to excellence isn't a tagline, it's the standard we hold
				ourselves to in every decision, every deliverable, and every interaction
				with you.
			</p>
		</div>
	);
};

export default Commitment;
