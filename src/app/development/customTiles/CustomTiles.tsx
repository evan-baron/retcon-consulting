'use client';

// Library imports
import React, { useState, useEffect, useRef } from 'react';

// Hooks imports
import { useMediaQuery } from '@mui/material';

// Styles imports
import styles from './customTiles.module.scss';

// MUI imports

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

	// refs for accessibility focus management
	const moreButtonRef = useRef<HTMLButtonElement | null>(null);
	const moreDrawerRef = useRef<HTMLUListElement | null>(null);

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

	// When showMore opens, move focus into the expanded content; when it closes, return focus to the button.
	// useEffect(() => {
	// 	if (showMore) {
	// 		// after render and (possible) animation, move focus to the first interactive element inside the drawer
	// 		const t = setTimeout(() => {
	// 			const container = moreDrawerRef.current;
	// 			if (!container) return;
	// 			const firstFocusable = container.querySelector<HTMLElement>(
	// 				'button, a, [tabindex]:not([tabindex="-1"])'
	// 			);
	// 			firstFocusable?.focus();
	// 		}, 250); // slightly after open to accommodate animation
	// 		return () => clearTimeout(t);
	// 	} else {
	// 		// when closed, ensure focus returns to the toggle button
	// 		moreButtonRef.current?.focus();
	// 	}
	// }, [showMore]);

	if (loading) return null;

	return isMobile ? (
		<ul
			className={styles['drawer-wrapper']}
			role='list'
			aria-labelledby='why-custom-heading'
		>
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
			<h3
				id='why-custom-heading'
				// minimal visually-hidden text for screen readers
				style={{
					position: 'absolute',
					left: '-10000px',
					width: '1px',
					height: '1px',
					overflow: 'hidden',
				}}
				aria-live='polite'
			>
				Why Choose Custom? — Reasons
			</h3>

			<ul
				className={`${styles.tiles} ${showMore ? styles.open : ''}`}
				role='list'
				aria-labelledby='why-custom-heading'
			>
				{ReasonTiles.map((reason, index) => (
					<li
						key={index}
						className={`${styles.tile} ${index > 5 ? styles.hidden : ''}`}
					>
						<Tile {...reason} showMore={showMore} index={index} />
					</li>
				))}
			</ul>

			{/* {showMore && (
				<div
					className={styles.drawer}
					aria-hidden={!showMore}
					id='custom-tiles-drawer'
				>
					<ul
						ref={moreDrawerRef}
						className={`${showMore && styles.open} ${
							isAnimating && styles.animate
						}`}
						aria-label='More reasons to choose custom'
						role='list'
					>
						{hiddenReasons.map((reason, index) => (
							<li key={index + 6}>
								<Tile {...reason} />
							</li>
						))}
					</ul>
				</div>
			)} */}
			<button
				ref={moreButtonRef}
				className={`${styles.more} ${showMore && styles.up}`}
				type='button'
				aria-expanded={showMore}
				aria-controls='custom-tiles-drawer'
				onClick={() => setShowMore((prev) => !prev)}
			>
				{showMore ? 'Show Less' : 'View More Reasons'}
			</button>
		</>
	);
};

export default CustomTiles;
