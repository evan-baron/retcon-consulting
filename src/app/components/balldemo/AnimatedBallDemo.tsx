import React, { useState } from 'react';

const radius = 80;
const stroke = 8;
const size = radius * 2 + stroke;

interface AnimatedBallProps {
	progress: number; // 0 to 1
}

const AnimatedBall: React.FC<AnimatedBallProps> = ({ progress }) => {
	return (
		<svg width={size} height={size}>
			{/* Mask that reveals the border from the top down */}
			<mask id='vertical-fill'>
				<rect x='0' y='0' width={size} height={size * progress} fill='white' />
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
				cx={radius}
				cy={radius}
				r={radius}
				stroke='white'
				strokeWidth={stroke}
				fill='none'
				mask='url(#vertical-fill)'
				style={{
					transition: 'mask 0.5s',
				}}
			/>
		</svg>
	);
};

const AnimatedBallDemo = () => {
	const [progress, setProgress] = useState(0);

	return (
		<div style={{ textAlign: 'center' }}>
			<AnimatedBall progress={progress} />
			<div style={{ marginTop: '2rem' }}>
				<button onClick={() => setProgress(Math.max(0, progress - 0.1))}>
					-
				</button>
				<span style={{ margin: '0 1rem' }}>{Math.round(progress * 100)}%</span>
				<button onClick={() => setProgress(Math.min(1, progress + 0.1))}>
					+
				</button>
			</div>
		</div>
	);
};

export default AnimatedBallDemo;
