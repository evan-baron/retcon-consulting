'use client';

// Library imports
import React, { useState, useEffect, useRef, useMemo } from 'react';

// Hooks imports
import { useMediaQuery } from '@mui/material';

// Styles imports
import styles from './timeline.module.scss';

// Components imports

// Context imports
import { useAppContext } from '@/app/context/AppContext';

// Data imports
import { DevelopmentStats } from '@/lib/data/development-stats';

interface RowRefs {
	index: number;
	visible: boolean;
}

const Timeline = () => {
	const { isMobile, isTablet } = useAppContext();
	const [loading, setLoading] = useState(true);

	// Respect reduces-motion preference for accessibility
	const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

	useEffect(() => {
		if (typeof isMobile === 'boolean') {
			setLoading(false);
		}
	}, [isMobile]);

	const timelineRef = useRef<HTMLDivElement | null>(null);

	const rowRefs = useMemo(
		() => DevelopmentStats.map(() => React.createRef<HTMLLIElement>()),
		[]
	);

	const [rowRefsVisible, setRowRefsVisible] = useState<RowRefs[]>(
		rowRefs.map((_, index) => ({
			index,
			visible: false,
		}))
	);

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
				setRowRefsVisible((prev) =>
					prev.map((item) =>
						item.index === index ? { ...item, visible: true } : item
					)
				);
			}
		};

		const observer = new window.IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// Definitions visibility logic
					const index = rowRefs.findIndex(
						(ref) => ref.current === entry.target
					);

					if (entry.target === rowRefs[index]?.current) {
						if (
							entry.intersectionRatio > 0 &&
							rowRefsVisible[index].visible === false
						) {
							setRowRefsVisible((prev) =>
								prev.map((item) =>
									item.index === index ? { ...item, visible: true } : item
								)
							);
						} else if (
							!entry.isIntersecting &&
							entry.boundingClientRect.top > window.innerHeight
						) {
							setRowRefsVisible((prev) =>
								prev.map((item) =>
									item.index === index ? { ...item, visible: false } : item
								)
							);
						}
					}

					// Double check if item is on screen
					checkVisibility(entry, index);
				});
			},
			{ threshold: [0, 0.25, 0.5, 0.75, 1] }
		);

		rowRefs.forEach((ref) => {
			if (ref.current) observer.observe(ref.current);
		});

		return () => observer.disconnect();
	}, [loading, rowRefs, rowRefsVisible]);

	// Allows for mobile check to run first
	if (loading) return null;

	return (
		<div
			className={styles.timeline}
			ref={timelineRef}
			aria-label='Project Timeline'
		>
			{!isMobile && !isTablet ? (
				<ol className={styles['timeline-list']} role='list'>
					{DevelopmentStats.map((stat, index) => {
						const visible = rowRefsVisible[index]?.visible ?? false;
						const stepId = `timeline-step-${index}`;

						return (
							<li
								key={index}
								className={styles['row-wrapper']}
								ref={rowRefs[index]}
								aria-current={
									rowRefsVisible[index].visible ? 'step' : undefined
								}
								style={
									{
										'--ball-hue': `${180 - index * (180 / 5)}`,
									} as React.CSSProperties & Record<string, string>
								}
							>
								<div
									className={styles.row}
									role='region'
									aria-labelledby={stepId}
									aria-live={visible ? 'polite' : undefined}
								>
									<div
										className={`${styles.ball} ${
											index % 2 === 0 ? styles.left : styles.right
										} ${rowRefsVisible[index].visible ? styles.visible : ''}`}
									>
										<div
											className={`${styles['icon-wrapper']} ${
												rowRefsVisible[index].visible ? styles.visible : ''
											}`}
											style={{
												color: `hsl(${180 - index * (180 / 5)}, 100%, 50%)`,
											}}
											aria-hidden='true'
										>
											{stat.image}
										</div>
									</div>
									<div
										className={`${styles.text} ${
											index % 2 === 0 ? styles.left : styles.right
										} ${
											rowRefsVisible[index].visible && !reduceMotion
												? styles.visible
												: ''
										}`}
									>
										<h3
											style={{
												color: `hsl(${180 - index * (180 / 5)}, 100%, 50%)`,
											}}
											data-step={index + 1}
											id={stepId}
										>
											{isMobile ? stat.stat1.split(' ')[0] : stat.stat1}
										</h3>
										<p>{stat.stat2}</p>
									</div>
								</div>
								{index < DevelopmentStats.length - 1 && (
									<div
										className={styles.line}
										key={'line' + index}
										aria-hidden='true'
									/>
								)}
							</li>
						);
					})}
				</ol>
			) : (
				<ol className={styles['timeline-list']}>
					{DevelopmentStats.map((stat, index) => {
						return (
							<li
								key={index}
								className={styles['row-wrapper']}
								ref={rowRefs[index]}
								aria-current={
									rowRefsVisible[index].visible ? 'step' : undefined
								}
								style={
									{
										'--ball-hue': `${180 - index * (180 / 5)}`,
									} as React.CSSProperties & Record<string, string>
								}
							>
								<div className={styles.row}>
									<div
										className={`${styles.ball}  ${
											rowRefsVisible[index].visible ? styles.visible : ''
										}`}
									>
										<div
											className={`${styles['icon-wrapper']} ${
												rowRefsVisible[index].visible ? styles.visible : ''
											}`}
											style={{
												color: `hsl(${180 - index * (180 / 5)}, 100%, 50%)`,
											}}
											aria-hidden={
												rowRefsVisible[index].visible ? 'false' : 'true'
											}
										>
											{stat.image}
										</div>
									</div>
									<h3
										className={
											rowRefsVisible[index].visible ? styles.visible : ''
										}
										style={{
											color: `hsl(${180 - index * (180 / 5)}, 100%, 50%)`,
										}}
										data-step={index + 1}
										id={`timeline-step-${index}`}
									>
										{isMobile ? stat.stat1.split(' ')[0] : stat.stat1}
									</h3>
									<p
										className={`${styles.text} ${
											index % 2 === 0 ? styles.left : styles.right
										} ${rowRefsVisible[index].visible ? styles.visible : ''}`}
									>
										{stat.stat2}
									</p>
									<div
										className={`${styles.line} ${
											rowRefsVisible[index].visible ? styles.visible : ''
										}`}
										key={'line' + index}
										aria-hidden='true'
									></div>
								</div>
							</li>
						);
					})}
				</ol>
			)}
		</div>
	);
};

export default Timeline;
