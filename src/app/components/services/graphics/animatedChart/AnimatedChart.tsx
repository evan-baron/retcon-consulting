'use client';

// Library imports
import React, { useState, useEffect } from 'react';

// Styles imports
import styles from './animatedChart.module.scss';

// MUI imports
import {} from '@mui/icons-material';

const AnimatedChart = ({ strokeWidth }: { strokeWidth: number }) => {
	const initialPoints: { x: number; y: number }[] = [
		{ x: 0.05, y: 0.9 },
		{ x: 0.23, y: 0.5 },
		{ x: 0.41, y: 0.7 },
		{ x: 0.59, y: 0.3 },
		{ x: 0.77, y: 0.5 },
		{ x: 0.95, y: 0.2 },
	];
	const [points, setPoints] = useState(initialPoints);

	useEffect(() => {
		const start = Date.now();
		const duration = 500 + Math.random() * 500;
		const animate = () => {
			const t = (Date.now() - start) / duration;
			setPoints([
				{ x: 0.05, y: 0.9 },
				{ x: 0.23, y: 0.5 + Math.sin(t + 1) * 0.09 },
				{ x: 0.41, y: 0.7 + Math.sin(t + 2) * 0.08 },
				{ x: 0.59, y: 0.3 + Math.sin(t + 3) * 0.07 },
				{ x: 0.77, y: 0.5 + Math.sin(t + 4) * 0.08 },
				{ x: 0.95, y: 0.2 + Math.sin(t + 5) * 0.07 },
			]);
			requestAnimationFrame(animate);
		};
		animate();
		return () => {};
	}, []);

	const width = 400;
	const height = 250;
	const linePoints = points
		.map((pt) => `${pt.x * width},${pt.y * height}`)
		.join(' ');

	return (
		<div className={styles['chart-container']}>
			<svg
				viewBox={`0 0 ${width} ${height}`}
				width='100%'
				height='100%'
				preserveAspectRatio='none'
				className={styles['animated-chart']}
			>
				<polyline points={linePoints} strokeWidth={strokeWidth} />
			</svg>
		</div>
	);
};

export default AnimatedChart;
