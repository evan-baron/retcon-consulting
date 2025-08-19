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

interface TimelineProps {
	parentRef: React.RefObject<HTMLDivElement | null>;
}

const Timeline = ({ parentRef }: TimelineProps) => {
	const timelineRef = useRef<HTMLDivElement | null>(null);
	const textRefs = useMemo(
		() => DevelopmentStats.map(() => React.createRef<HTMLDivElement>()),
		[]
	);
	const [textProgressArray, setTextProgressArray] = useState<number[]>([]);

	useEffect(() => {
		const handleScroll = () => {
			if (!parentRef.current) return;
			const parentRect = parentRef.current.getBoundingClientRect();
			const thresholdY = parentRect.height * 0.8;

			const textProgress = textRefs.map((ref, index) => {
				const textBox = ref.current;
				if (!textBox) return 0;

				const rect = textBox.getBoundingClientRect();

				if (rect.top >= thresholdY) return 0;

				// if (rect.bottom <= thresholdY) return 1;

				// If the text box is partially visible, calculate the progress
				const visibleHeight = Math.min(
					rect.height * 1.5, // The 1.5 just makes the rectangle taller, extending the animation effects longer
					thresholdY - rect.top
				);
				return Math.max(0, visibleHeight / (rect.height * 1.5));
			});

			setTextProgressArray(textProgress);
		};

		const parent = parentRef.current;
		if (parent) {
			parent.addEventListener('scroll', handleScroll);
			handleScroll();
		}
		return () => {
			if (parent) parent.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.timeline} ref={timelineRef}>
			{DevelopmentStats.map((stat, index) => {
				return (
					<React.Fragment key={index}>
						<div className={styles.row}>
							<div className={styles.ball}>
								<div
									className={styles['icon-wrapper']}
									style={{
										opacity: textProgressArray[index],

										color: `hsl(${180 - index * (180 / 5)}, 100%, 50%)`,
									}}
								>
									{stat.image}
								</div>
							</div>
							<div
								ref={textRefs[index]}
								className={`${styles.text} ${
									index % 2 === 0 ? styles.left : styles.right
								}`}
								style={{
									opacity: textProgressArray[index],

									...(index % 2 === 0
										? {
												transform: `translateX(${
													-50 + textProgressArray[index] * 50
												}%)`,
										  }
										: {
												transform: `translateX(${
													50 - textProgressArray[index] * 50
												}%)`,
										  }),
								}}
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
