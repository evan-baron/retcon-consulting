'use client';

// Library imports
import React, { useState, useEffect, useRef, ReactNode } from 'react';

// Hooks imports
import { useMediaQuery } from '@mui/material';

// Styles imports
import styles from './tile.module.scss';

// MUI Icons
import { Leaderboard } from '@mui/icons-material';

interface DrawerOpen {
	[index: number]: boolean;
}

type TileProps = {
	title: string;
	summary: string;
	stat1: string;
	stat2?: string;
	icon: ReactNode;
	drawerOpen?: boolean;
	handleClick?: (index: number) => void;
	index?: number;
	setDrawerOpen?: React.Dispatch<React.SetStateAction<DrawerOpen>>;
};

function Tile({
	title,
	summary,
	stat1,
	stat2,
	icon,
	drawerOpen,
	handleClick,
	index,
	setDrawerOpen,
}: TileProps) {
	const [loading, setLoading] = useState(true);

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

	const [flipped, setFlipped] = useState(false);

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
	}, [loading]);

	if (loading) return null;

	return isMobile ? (
		<article
			className={styles['tile-drawer']}
			ref={tileRef}
			aria-label={`Details for ${title}`}
			aria-live='polite'
		>
			<div
				className={`${styles.lid} ${drawerOpen ? styles.open : styles.closed}`}
				onClick={() =>
					typeof handleClick === 'function' &&
					typeof index === 'number' &&
					handleClick(index)
				}
			>
				<div
					className={`${styles['icon-box']} ${
						drawerOpen ? styles.open : styles.closed
					}`}
				>
					{icon}
				</div>
				<h3>{title}</h3>
				<div className={styles.dropdown}>
					<div className={styles.line}></div>
				</div>
			</div>
			<div
				className={`${styles.content} ${
					drawerOpen ? styles.open : styles.closed
				}`}
			>
				<div className={styles.stats}>
					<p className={styles.stat1}>{stat1}</p>
					{stat2 && (
						<div className={styles.stat2}>
							<Leaderboard className={styles.icon} />
							<p
								className={styles.stat}
								dangerouslySetInnerHTML={{ __html: stat2 }}
							></p>
						</div>
					)}
				</div>
			</div>
		</article>
	) : (
		<article
			className={styles.tile}
			ref={tileRef}
			onClick={() => setFlipped((prev) => !prev)}
			aria-label={`Details for ${title}`}
			aria-live='polite'
		>
			<div
				className={`${styles['tile-content']} ${flipped ? styles.flipped : ''}`}
			>
				<div className={styles['tile-front']} aria-hidden={flipped}>
					<div className={styles['icon-box']}>{icon}</div>
					<h3 className={styles.h3}>{title}</h3>
					<p className={styles.p}>{summary}</p>
					<button
						type='button'
						aria-pressed={flipped}
						aria-label={`Read more about ${title}`}
						onClick={(e) => {
							e.stopPropagation();
							setFlipped((prev) => !prev);
						}}
						className={styles.more}
					>
						Read More
					</button>
				</div>

				<div className={styles['tile-back']} aria-hidden={!flipped}>
					<div className={styles['back-content']}>
						<h3 className={styles.h3}>{title}</h3>
						<div className={styles.stats}>
							<p className={styles.stat1}>{stat1}</p>
							{stat2 && (
								<div className={styles.stat2}>
									<Leaderboard className={styles.icon} />
									<p
										className={styles.stat}
										dangerouslySetInnerHTML={{ __html: stat2 }}
									></p>
								</div>
							)}
						</div>
						<button
							type='button'
							aria-pressed={!flipped}
							aria-label={`Back to summary for ${title}`}
							onClick={(e) => {
								e.stopPropagation();
								setFlipped((prev) => !prev);
							}}
							className={styles.back}
						>
							Back
						</button>
					</div>
				</div>
			</div>
		</article>
	);
}

export default Tile;
