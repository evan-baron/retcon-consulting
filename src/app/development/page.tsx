'use client';

// Library imports
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Hooks imports

// Styles imports
import styles from './development.module.scss';

// Components imports

// Context imports

// Data imports
import { DevelopmentStats } from '@/lib/data/development-stats';

const Development = () => {
	const [scrollIndex, setScrollIndex] = useState(0);
	const [statWidth, setStatWidth] = useState(0);

	const statRef = useRef<HTMLDivElement>(null);
	const radius = 80;
	const circleCount = 5;
	const gapCount = circleCount - 1;
	const strokeWidth = 5;
	const useableWidth = statWidth - strokeWidth;

	// Diameter of each circle
	const A = 2 * radius;

	// Length of each gap between circles
	const B = (useableWidth - circleCount * A) / gapCount;

	useEffect(() => {
		if (!statRef.current) return;

		const updateStatWidth = () => {
			setStatWidth(statRef.current?.offsetWidth || 0);
		};

		updateStatWidth();
		window.addEventListener('resize', updateStatWidth);
		return () => window.removeEventListener('resize', updateStatWidth);
	}, []);

	return (
		<div className={styles['development-wrapper']}>
			<section className={styles.description}>
				<h2>Web Development</h2>
				<p className={styles['development-description']}>
					<span
						style={{
							fontWeight: 'bold',
							color: 'var(--gray1)',
							// textDecoration: 'underline',
							// textUnderlineOffset: '0.2rem',
						}}
					>
						Your website <span style={{ fontStyle: 'italic' }}>matters</span>
					</span>
					. It's the first impression people have of your business, the place
					they decide whether to trust you, and the hub where all your marketing
					efforts come together. A clean, professional online presence turns
					attention into confidence, and confidence into lasting relationships.
				</p>
			</section>
			<section className={styles.statistics} ref={statRef}>
				{/* {DevelopmentStats.map((stat, index) => (
					<div key={index} className={styles.statistic}>
						<div className={styles['stat-image-outer']}>
							<div className={styles['stat-image-inner']}>
								{typeof stat.image === 'string' ? (
									<Image
										className={styles['stat-image']}
										src={stat.image}
										alt={stat.alt}
										fill
									/>
								) : (
									stat.image
								)}
							</div>
						</div>
					</div>
				))} */}
				<svg
					className={styles.svg}
					width={statWidth}
					height='180'
					viewBox={`0 0 ${statWidth} 180`}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					{/* The circles: */}
					{[...Array(circleCount)].map((_, index) => {
						// Calculate the center x position for each circle:
						// - Start at 'radius' (so the first circle is fully visible) + strokeWidth / 2 so no overlap
						// with edge of the container div
						// - For each subsequent circle, add diameter (A) + gap (B) for each previous circle
						//   cx = radius + index * (A + B) + strokeWidth / 2
						const cx = radius + index * (A + B) + strokeWidth / 2;

						return (
							<circle
								key={index}
								cx={cx}
								cy='90'
								r={radius}
								stroke='white'
								strokeWidth={strokeWidth}
								fill='none'
							/>
						);
					})}

					{/* The lines between the circles: */}
					{[...Array(gapCount)].map((_, index) => {
						// Right edge of the circle to Left edge of the next circle:
						// diameter (A) + (strokeWidth / 2) + (index * (diameter (A) + gap (B)))
						// strokeWidth / 2 is the offset from stroke to keep things looking clean against the
						// edge of the parent div
						const x1 = A + strokeWidth / 2 + index * (A + B);

						// Edge of next circle (left): center + gap (B)
						const x2 = x1 + B;

						return (
							<line
								key={index}
								x1={x1}
								y1='90'
								x2={x2}
								y2='90'
								stroke='white'
								strokeWidth={strokeWidth}
							/>
						);
					})}
				</svg>
			</section>
		</div>
	);
};

export default Development;
