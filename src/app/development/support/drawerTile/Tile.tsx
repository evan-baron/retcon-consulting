'use client';

// Library imports
import React, { useState, useEffect, useRef } from 'react';

// Hooks imports

// Styles imports
import styles from './tile.module.scss';

// MUI Icons
import { Check, Close } from '@mui/icons-material';

interface DrawerOpen {
	[index: number]: boolean;
}

type TileProps = {
	tier: string;
	color: string;
	drawerOpen: boolean;
	handleClick: (index: number) => void;
	index: number;
	setDrawerOpen: React.Dispatch<React.SetStateAction<DrawerOpen>>;
	features: string[];
	tierFeatures: boolean[];
};

function Tile({
	tier,
	color,
	drawerOpen,
	handleClick,
	index,
	setDrawerOpen,
	features,
	tierFeatures,
}: TileProps) {
	const [tileVisible, setTileVisible] = useState(false);

	const tileRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!tileRef.current) return;

		const checkVisibility = (entry: IntersectionObserverEntry) => {
			const rect = entry.boundingClientRect;
			const inViewport =
				rect.top < window.innerHeight &&
				rect.bottom > 0 &&
				rect.left < window.innerWidth &&
				rect.right > 0;
			if (inViewport) {
				setTileVisible(true);
			}
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.intersectionRatio > 0) {
					tileRef.current && setTileVisible(true);
				}

				if (entry.boundingClientRect.top > window.innerHeight) {
					tileRef.current && setTileVisible(false);

					// Close tile when below the viewport (scrolled down)
					if (
						typeof setDrawerOpen === 'function' &&
						entry.boundingClientRect.top > window.innerHeight
					) {
						setDrawerOpen((prev) => ({
							...prev,
							[index!]: false,
						}));
					}
				}

				// Confirm visibility in case observer missed it
				checkVisibility(entry);
			});
		});

		observer.observe(tileRef.current);

		return () => {
			observer.disconnect();
		};
	}, [index, setDrawerOpen]);

	// accessibility ids
	const headerId = `tier-header-${index}`;
	const panelId = `tier-panel-${index}`;

	return (
		<div
			className={`${styles['tile-drawer']} ${
				tileVisible ? styles.visible : ''
			}`}
			ref={tileRef}
			aria-label={`Details for ${tier} support tier`}
			aria-live='polite'
		>
			<button
				type='button'
				id={headerId}
				className={`${styles.lid} ${drawerOpen ? styles.open : styles.closed} ${
					index > 0 ? styles.highlight : ''
				}`}
				onClick={() =>
					typeof handleClick === 'function' &&
					typeof index === 'number' &&
					handleClick(index)
				}
				aria-expanded={drawerOpen}
				aria-controls={panelId}
			>
				<h3
					style={
						{
							color,
							fontWeight: index > 1 ? 'bold' : 'none',
							'--tier-color': color,
						} as React.CSSProperties
					}
				>
					{tier}
				</h3>
				<div className={styles.dropdown} aria-hidden='true'>
					<div className={styles.line} style={{ backgroundColor: color }}></div>
				</div>
			</button>
			<div
				id={panelId}
				role='region'
				aria-labelledby={headerId}
				aria-hidden={!drawerOpen}
				className={`${styles.content} ${
					drawerOpen ? styles.open : styles.closed
				}`}
			>
				<ul className={styles['tiers-table']}>
					{features.map((feature, idx) => (
						<li key={idx} className={styles.row}>
							<span
								className={styles.feature}
								style={{
									color: tierFeatures[idx] ? 'var(--gray1)' : 'inherit',
									fontWeight: tierFeatures[idx] ? 'bold' : 'none',
								}}
							>
								{idx === 0 ? (
									<>
										{feature}
										<span className={styles.asterisk} aria-hidden='true'>
											*
										</span>
									</>
								) : (
									feature
								)}
							</span>
							<span className={styles.included} aria-hidden='false'>
								{tierFeatures[idx] ? (
									<>
										<Check
											className={`${styles.icon} ${styles.check}`}
											aria-hidden='true'
										/>
										<span
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
											Included
										</span>
									</>
								) : (
									<>
										<Close
											className={`${styles.icon} ${styles.close}`}
											aria-hidden='true'
										/>
										<span
											style={{
												position: 'absolute',
												left: '-10000px',
												width: '1px',
												height: '1px',
												overflow: 'hidden',
											}}
											aria-live='polite'
										>
											Not included
										</span>
									</>
								)}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Tile;
