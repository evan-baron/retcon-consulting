'use client';

// Libraries imports
import React, { useId } from 'react';

// Styles
import styles from './animatedBall.module.scss';

const radius = 72;
const stroke = 4;
const size = radius * 2 + stroke;

interface AnimatedBallProps {
	progress: number; // 0 to 1
	icon: React.ReactNode;
}

const AnimatedBall = React.forwardRef<HTMLDivElement, AnimatedBallProps>(
	(props, ref) => {
		const { progress, icon } = props;
		const rawId = useId();
		const maskId = `vertical-fill-${rawId.replace(/:/g, '-')}`;

		return (
			<div className={styles.ball} ref={ref}>
				<svg className={styles.svg} width={size} height={size}>
					{/* Mask that reveals the border from the top down */}
					<mask id={maskId}>
						<rect
							x='0'
							y='0'
							width={size}
							height={size * progress}
							fill='white'
						/>
					</mask>
					{/* Background circle (optional) */}
					<circle
						cx={radius + stroke / 2}
						cy={radius + stroke / 2}
						r={radius}
						stroke='#444'
						strokeWidth={stroke}
						fill='none'
					/>
					{/* Animated border, masked */}
					<circle
						cx={radius + stroke / 2}
						cy={radius + stroke / 2}
						r={radius}
						stroke='white'
						strokeWidth={stroke}
						fill='none'
						mask={`url(#${maskId})`}
						style={{
							transition: 'mask 0.5s',
						}}
					/>
				</svg>
				<div className={styles['icon-wrapper']} style={{ opacity: progress }}>
					{icon}
				</div>
			</div>
		);
	}
);

export default AnimatedBall;
