'use client';

// Library imports
import React, { useState, useEffect, useRef, useMemo } from 'react';

// Hooks imports

// Styles imports
import styles from './timeline.module.scss';

// Components imports

// Context imports

// Data imports
import { DevelopmentStats } from '@/lib/data/development-stats';

interface RowRefs {
	index: number;
	visible: boolean;
}

const Timeline = () => {
	const timelineRef = useRef<HTMLDivElement | null>(null);
	const rowRefs = useMemo(
		() => DevelopmentStats.map(() => React.createRef<HTMLDivElement>()),
		[]
	);

	const [rowRefsVisible, setRowRefsVisible] = useState<RowRefs[]>(
		rowRefs.map((_, index) => ({
			index,
			visible: false,
		}))
	);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.intersectionRatio > 0.5) {
						const index = rowRefs.findIndex(
							(ref) => ref.current === entry.target
						);
						setRowRefsVisible((prev) =>
							prev.map((item) =>
								item.index === index
									? { ...item, visible: entry.isIntersecting }
									: item
							)
						);
					}
				});
			},
			{ threshold: [0, 0.5, 1] }
		);

		rowRefs.forEach((ref) => {
			if (ref.current) {
				observer.observe(ref.current);
			}
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	// Resets the animations for the text boxes
	useEffect(() => {
		const handleScroll = () => {
			if (!timelineRef.current) return;

			const rect = timelineRef.current.getBoundingClientRect();

			if (rect.top > window.innerHeight) {
				// Timeline is below the viewport, reset visibility
				setRowRefsVisible(
					rowRefsVisible.map((item) => ({ ...item, visible: false }))
				);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [rowRefsVisible]);

	return (
		<div className={styles.timeline} ref={timelineRef}>
			{DevelopmentStats.map((stat, index) => {
				return (
					<React.Fragment key={index}>
						<div className={styles.row} ref={rowRefs[index]}>
							<div className={styles.ball}>
								<div
									className={`${styles['icon-wrapper']} ${
										rowRefsVisible[index].visible ? styles.visible : ''
									}`}
									style={{
										color: `hsl(${180 - index * (180 / 5)}, 100%, 50%)`,
									}}
								>
									{stat.image}
								</div>
							</div>
							<div
								className={`${styles.text} ${
									index % 2 === 0 ? styles.left : styles.right
								} ${rowRefsVisible[index].visible ? styles.visible : ''}`}
							>
								<h3
									style={{
										color: `hsl(${180 - index * (180 / 5)}, 100%, 50%)`,
									}}
								>
									{stat.stat1}
								</h3>
								<p>{stat.stat2}</p>
							</div>
						</div>
						{index < DevelopmentStats.length - 1 && (
							<div className={styles.line} key={'line' + index} />
						)}
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default Timeline;
