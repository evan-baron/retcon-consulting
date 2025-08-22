'use client';

// Library imports
import React, { useState, useEffect, useRef, useMemo } from 'react';

// Hooks imports

// Styles imports
import styles from './customTiles.module.scss';

// Components imports
import Tile from './developmentTile/Tile';

// Context imports

// Data imports
import { ReasonTiles } from '@/lib/data/why-custom';

interface ReasonRefs {
	index: number;
	visible: boolean;
}

const CustomTiles = () => {
	const [showMore, setShowMore] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const visibleReasons = ReasonTiles.slice(0, 6);
	const hiddenReasons = ReasonTiles.slice(6);

	const tilesRef = useRef<HTMLDivElement | null>(null);
	const reasonRefs = useMemo(
		() => visibleReasons.map(() => React.createRef<HTMLDivElement>()),
		[]
	);

	const [reasonRefsVisible, setReasonRefsVisible] = useState<ReasonRefs[]>(
		reasonRefs.map((_, index) => ({
			index,
			visible: false,
		}))
	);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.intersectionRatio > 0) {
					const index = reasonRefs.findIndex(
						(ref) => ref.current === entry.target
					);
					setReasonRefsVisible((prev) =>
						prev.map((item) =>
							item.index === index
								? { ...item, visible: entry.isIntersecting }
								: item
						)
					);
				}
			});
		});

		reasonRefs.forEach((ref) => {
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
			if (!tilesRef.current) return;

			const rect = tilesRef.current.getBoundingClientRect();

			if (rect.top > window.innerHeight) {
				// Timeline is below the viewport, reset visibility
				setReasonRefsVisible(
					reasonRefsVisible.map((item) => ({ ...item, visible: false }))
				);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [reasonRefsVisible]);

	return (
		<>
			<div className={styles.tiles} ref={tilesRef}>
				{visibleReasons.map((reason, index) => (
					<div
						key={index}
						ref={reasonRefs[index]}
						className={`${styles.tile} ${
							reasonRefsVisible[index]?.visible ? styles.visible : ''
						}`}
					>
						<Tile {...reason} />
					</div>
				))}
			</div>
			{showMore && (
				<div
					className={`${styles.drawer} ${showMore && styles.open} ${
						isAnimating && styles.animate
					}`}
					aria-hidden={!showMore}
				>
					{hiddenReasons.map((reason, index) => (
						<Tile key={index + 6} {...reason} />
					))}
				</div>
			)}
			<button
				className={`${styles.more} ${showMore && styles.up}`}
				type='button'
				onClick={() => {
					if (!showMore) {
						setShowMore(true);
					} else {
						setIsAnimating(true);
						setTimeout(() => {
							setShowMore(false);
							setIsAnimating(false);
						}, 350);
					}
				}}
			>
				{showMore ? 'Show Less' : 'View More Reasons'}
			</button>
		</>
	);
};

export default CustomTiles;
