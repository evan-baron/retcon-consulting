'use client';

// Library imports
import React, { useState, useEffect, useRef, useMemo } from 'react';

// Hooks imports

// Styles imports
import styles from './timeline.module.scss';

// Components imports
import AnimatedBall from './animatedBall/AnimatedBall';

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

				if (rect.bottom <= thresholdY) return 1;

				// If the text box is partially visible, calculate the progress
				const visibleHeight = Math.min(rect.height, thresholdY - rect.top);
				return Math.max(0, visibleHeight / rect.height);
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
	// const ballRefs = useMemo(
	// 	() => DevelopmentStats.map(() => React.createRef<HTMLDivElement>()),
	// 	[]
	// );
	// const lineRefs = useMemo(
	// 	() => DevelopmentStats.map(() => React.createRef<HTMLDivElement>()),
	// 	[]
	// );
	// const [ballProgressArray, setBallProgressArray] = useState<number[]>(
	// 	DevelopmentStats.map(() => 0)
	// );
	// const [lineProgressArray, setLineProgressArray] = useState<number[]>(
	// 	DevelopmentStats.map(() => 0)
	// );

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const windowHeight = window.innerHeight;
	// 		const thresholdY = windowHeight * 0.8; // 20% from bottom

	// 		const newProgress = ballRefs.map((ref, index) => {
	// 			const ball = ref.current;
	// 			if (!ball) return 0;

	// 			const rect = ball.getBoundingClientRect();
	// 			const ballHeight = rect.height;

	// 			// Ball is fully filled if above threshold
	// 			if (rect.top >= thresholdY) return 0;

	// 			// Ball is empty if below threshold
	// 			if (rect.bottom <= thresholdY) return 1;

	// 			// Otherwise, partially filled
	// 			const visible = Math.min(ballHeight, rect.bottom - thresholdY);
	// 			const percent = 1 - Math.max(0, Math.min(1, visible / ballHeight));
	// 			return percent;
	// 		});

	// 		setBallProgressArray(newProgress);
	// 	};

	// 	window.addEventListener('scroll', handleScroll);
	// 	handleScroll();
	// 	return () => window.removeEventListener('scroll', handleScroll);
	// }, [ballRefs]);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const windowHeight = window.innerHeight;
	// 		const thresholdY = windowHeight * 0.8; // 20% from bottom

	// 		const newProgress = lineRefs.map((ref, index) => {
	// 			const line = ref.current;
	// 			if (!line) return 0;

	// 			const rect = line.getBoundingClientRect();
	// 			const lineHeight = rect.height;

	// 			// line is fully filled if above threshold
	// 			if (rect.top >= thresholdY) return 0;

	// 			// line is empty if below threshold
	// 			if (rect.bottom <= thresholdY) return 1;

	// 			// Otherwise, partially filled
	// 			const visible = Math.min(lineHeight, rect.bottom - thresholdY);
	// 			const percent = 1 - Math.max(0, Math.min(1, visible / lineHeight));
	// 			return percent;
	// 		});

	// 		setLineProgressArray(newProgress);
	// 	};

	// 	window.addEventListener('scroll', handleScroll);
	// 	handleScroll();
	// 	return () => window.removeEventListener('scroll', handleScroll);
	// }, [lineRefs]);

	return (
		<div className={styles.timeline} ref={timelineRef}>
			{DevelopmentStats.map((stat, index) => {
				return (
					<React.Fragment key={index}>
						<div className={styles.row}>
							<div className={styles.ball}>
								<div className={styles['icon-wrapper']}>{stat.image}</div>
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
								// style={{
								// 	opacity: ballProgressArray[index],

								// 	...(index % 2 === 0
								// 		? {
								// 				transform: `translateX(${
								// 					-50 + ballProgressArray[index] * 50
								// 				}%)`,
								// 		  }
								// 		: {
								// 				transform: `translateX(${
								// 					50 - ballProgressArray[index] * 50
								// 				}%)`,
								// 		  }),
								// }}
							>
								<h3>{stat.stat1}</h3>
								<p>{stat.stat2}</p>
							</div>
						</div>
						{index < DevelopmentStats.length - 1 && (
							<div
								className={styles.line}
								key={'line' + index}
								// ref={lineRefs[index]}
								// style={{
								// 	['--fill-progress' as string]: lineProgressArray[index],
								// }}
							/>
						)}
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default Timeline;
