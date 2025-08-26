'use client';

// Library imports
import React, { useState, useEffect, useRef, useMemo } from 'react';

// Hooks imports
import { useMediaQuery } from '@mui/material';

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
	const isMobile = useMediaQuery('(max-width: 500px)');

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
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// Change the 0 to 0.5 if you want to delay it a bit
					if (entry.intersectionRatio > 0) {
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
		<div
			className={styles.timeline}
			ref={timelineRef}
			aria-label='Project Timeline'
			role='list'
		>
			{!isMobile ? (
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
											aria-hidden={
												rowRefsVisible[index].visible ? 'false' : 'true'
											}
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
											data-step={index + 1}
											id={`timeline-step-${index}`}
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
