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
