'use client';

// Library imports
import React, { useState, useEffect } from 'react';

// Hooks imports
import { useMediaQuery } from '@mui/material';

// Styles imports
import styles from './customTiles.module.scss';

// MUI imports
import { Leaderboard } from '@mui/icons-material';

// Components imports
import Tile from './developmentTile/Tile';

// Context imports

// Data imports
import { ReasonTiles } from '@/lib/data/why-custom';

const CustomTiles = () => {
	interface DrawerOpen {
		[index: number]: boolean;
	}

	const [loading, setLoading] = useState(true);
	const [showMore, setShowMore] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const visibleReasons = ReasonTiles.slice(0, 6);
	const hiddenReasons = ReasonTiles.slice(6);
	const [drawerOpen, setDrawerOpen] = useState<DrawerOpen>(
		ReasonTiles.reduce((acc, _, index) => {
			acc[index] = false;
			return acc;
		}, {} as DrawerOpen)
	);

	const isMobileWidth = useMediaQuery(
		'(max-width: 500px) and (orientation: portrait)'
	);
	const isMobileHeight = useMediaQuery(
		'(max-height: 500px) and (orientation: landscape)'
	);

	useEffect(() => {
		if (
			typeof isMobileWidth === 'boolean' &&
			typeof isMobileHeight === 'boolean'
		) {
			setLoading(false);
		}
	}, [isMobileWidth, isMobileHeight]);

	const isMobile = isMobileWidth || isMobileHeight;

	const handleClick = (index: number) => {
		setDrawerOpen((prev) => {
			const newState = Object.fromEntries(
				Object.entries(prev).map(([key, value]) => [
					key,
					Number(key) === index ? !value : false,
				])
			);
			return newState;
		});
	};

	if (loading) return null;

	return isMobile ? (
		<ul className={styles['drawer-wrapper']}>
			{ReasonTiles.map((reason, index) => (
				<li className={styles.drawer} key={'drawer' + index}>
					<Tile
						{...reason}
						drawerOpen={drawerOpen[index]}
						handleClick={handleClick}
						index={index}
						setDrawerOpen={setDrawerOpen}
					/>
				</li>
			))}
		</ul>
	) : (
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
