'use client';

// Library imports
import React, { useState } from 'react';

// Hooks imports

// Styles imports
import styles from './customTiles.module.scss';

// Components imports
import Tile from './developmentTile/Tile';

// Context imports

// Data imports
import { ReasonTiles } from '@/lib/data/why-custom';

const CustomTiles = () => {
	const [showMore, setShowMore] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const visibleReasons = ReasonTiles.slice(0, 6);
	const hiddenReasons = ReasonTiles.slice(6);

	return (
		<>
			<ul className={styles.tiles}>
				{visibleReasons.map((reason, index) => (
					<li key={index} className={styles.tile}>
						<Tile {...reason} />
					</li>
				))}
			</ul>
			{showMore && (
				<div
					className={styles.drawer}
					aria-hidden={!showMore}
					id='custom-tiles-drawer'
				>
					<ul
						className={`${showMore && styles.open} ${
							isAnimating && styles.animate
						}`}
						aria-label='More reasons to choose custom'
					>
						{hiddenReasons.map((reason, index) => (
							<li key={index + 6}>
								<Tile {...reason} />
							</li>
						))}
					</ul>
				</div>
			)}
			<button
				className={`${styles.more} ${showMore && styles.up}`}
				type='button'
				aria-expanded={showMore}
				aria-controls='custom-tiles-drawer'
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
