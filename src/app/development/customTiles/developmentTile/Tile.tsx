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
	const contentRef = useRef<HTMLDivElement | null>(null);

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

	// focus panel when it opens on mobile for screen reader users
	useEffect(() => {
		if (isMobile && drawerOpen && contentRef.current) {
			contentRef.current.focus();
		}
	}, [isMobile, drawerOpen]);

	if (loading) return null;

	// accessibility ids
	const headerId = `tile-header-${index ?? 'noindex'}`;
	const panelId = `tile-panel-${index ?? 'noindex'}`;

	// keyboard handler for desktop article (toggle via Enter/Space)
	const handleArticleKey = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			setFlipped((prev) => !prev);
		}
	};

	// handle escape to close mobile panel
	const handlePanelKey = (e: React.KeyboardEvent) => {
		if (e.key === 'Escape') {
			e.stopPropagation();
			if (typeof handleClick === 'function' && typeof index === 'number') {
				handleClick(index);
			}
		}
	};

	return isMobile ? (
		<article
			className={styles['tile-drawer']}
			ref={tileRef}
			aria-label={`Details for ${title}`}
			aria-live='polite'
		>
			<button
				className={`${styles.lid} ${drawerOpen ? styles.open : styles.closed}`}
				id={headerId}
				onClick={() =>
					typeof handleClick === 'function' &&
					typeof index === 'number' &&
					handleClick(index)
				}
				aria-expanded={drawerOpen}
				aria-controls={panelId}
			>
				<div
					className={`${styles['icon-box']} ${
						drawerOpen ? styles.open : styles.closed
					}`}
					aria-hidden='true'
				>
					{icon}
				</div>
				<h3>{title}</h3>
				<div className={styles.dropdown} aria-hidden='true'>
					<div className={styles.line}></div>
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
				ref={contentRef}
				tabIndex={-1}
				onKeyDown={handlePanelKey}
			>
				<div className={styles.stats}>
					<p className={styles.stat1}>{stat1}</p>
					{stat2 && (
						<div className={styles.stat2}>
							<Leaderboard className={styles.icon} aria-hidden='true' />
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
			role='button'
			tabIndex={0}
			onKeyDown={handleArticleKey}
		>
			<div
				className={`${styles['tile-content']} ${flipped ? styles.flipped : ''}`}
			>
				<div className={styles['tile-front']} aria-hidden={flipped}>
					<div className={styles['icon-box']} aria-hidden='true'>
						{icon}
					</div>
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
						// ensure it's not focusable when the front is hidden
						tabIndex={flipped ? -1 : 0}
						aria-hidden={flipped}
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
									<Leaderboard className={styles.icon} aria-hidden='true' />
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
							// only tabbable when back is visible
							tabIndex={flipped ? 0 : -1}
							aria-hidden={!flipped}
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
