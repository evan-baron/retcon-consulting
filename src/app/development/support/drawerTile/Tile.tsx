'use client';

// Library imports
import React, { useState, useEffect, useRef, ReactNode } from 'react';

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
	const tileRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!tileRef.current) return;

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.intersectionRatio > 0) {
					tileRef.current?.classList.add(styles.visible);
				}

				if (entry.boundingClientRect.top > window.innerHeight) {
					tileRef.current?.classList.remove(styles.visible);

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
			});
		});

		observer.observe(tileRef.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<article
			className={styles['tile-drawer']}
			ref={tileRef}
			aria-label={`Details for ${tier} support tier`}
			aria-live='polite'
		>
			<div
				className={`${styles.lid} ${drawerOpen ? styles.open : styles.closed} ${
					index > 0 ? styles.highlight : ''
				}`}
				onClick={() =>
					typeof handleClick === 'function' &&
					typeof index === 'number' &&
					handleClick(index)
				}
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
				<div className={styles.dropdown}>
					<div className={styles.line} style={{ backgroundColor: color }}></div>
				</div>
			</div>
			<div
				className={`${styles.content} ${
					drawerOpen ? styles.open : styles.closed
				}`}
			>
				<ul className={styles['tiers-table']}>
					{features.map((feature, i) => (
						<li key={i} className={styles.row}>
							<span
								className={styles.feature}
								style={{
									color: tierFeatures[i] ? 'var(--gray1)' : 'inherit',
									fontWeight: tierFeatures[i] ? 'bold' : 'none',
								}}
							>
								{i === 0 ? (
									<>
										{feature}
										<span className={styles.asterisk}>*</span>
									</>
								) : (
									feature
								)}
							</span>
							<span className={styles.included}>
								{tierFeatures[i] ? (
									<Check
										className={`${styles.icon} ${styles.check}`}
										aria-label='Included'
									/>
								) : (
									<Close
										className={`${styles.icon} ${styles.close}`}
										aria-label='Not included'
									/>
								)}
							</span>
						</li>
					))}
				</ul>
			</div>
		</article>
	);
}

export default Tile;
