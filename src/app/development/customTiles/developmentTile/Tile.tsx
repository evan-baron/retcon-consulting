'use client';

// Library imports
import React, { useState, useEffect, useRef, ReactNode } from 'react';

// Hooks imports
import { useMediaQuery } from '@mui/material';

// Styles imports
import styles from './tile.module.scss';

// MUI Icons
import { Leaderboard } from '@mui/icons-material';

// Context
import { useAppContext } from '@/app/context/AppContext';

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
	index: number;
	setDrawerOpen?: React.Dispatch<React.SetStateAction<DrawerOpen>>;
	showMore?: boolean;
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
	showMore,
}: TileProps) {
	const { isMobile, isSmallTablet, isTabletWidth } = useAppContext();

	const edgeCaseSize = useMediaQuery(
		'(max-width: 860px) and (min-height: 1200px) and (orientation: portrait)'
	);

	const [loading, setLoading] = useState(true);
	const [tileVisible, setTileVisible] = useState(false);

	useEffect(() => {
		if (typeof isMobile === 'boolean') {
			setLoading(false);
		}
	}, [isMobile]);

	const [flipped, setFlipped] = useState(false);

	const tileRef = useRef<HTMLDivElement | null>(null);
	const contentRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!tileRef.current) return;

		const checkVisibility = () => {
			const rect = tileRef.current!.getBoundingClientRect();
			const inViewport =
				rect.top < window.innerHeight &&
				rect.bottom > 0 &&
				rect.left < window.innerWidth &&
				rect.right > 0;
			if (inViewport) {
				setTileVisible(true);
			}
		};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.intersectionRatio > 0) {
						setTileVisible(true);
					}

					if (entry.boundingClientRect.top > window.innerHeight) {
						setTileVisible(false);

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
					checkVisibility();
				});
			},
			{ threshold: [0, 0.25, 0.5, 0.75, 1] }
		);

		observer.observe(tileRef.current);

		return () => {
			observer.disconnect();
		};
	}, [loading, index, setDrawerOpen]);

	// focus panel when it opens on mobile for screen reader users
	useEffect(() => {
		if (
			(isMobile && drawerOpen && contentRef.current) ||
			(isSmallTablet && drawerOpen && contentRef.current) ||
			(isTabletWidth && drawerOpen && contentRef.current)
		) {
			contentRef.current.focus();
		}
	}, [isMobile, isSmallTablet, isTabletWidth, drawerOpen]);

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

	return isMobile || isSmallTablet || isTabletWidth || edgeCaseSize ? (
		<div
			className={`${styles['tile-drawer']} ${
				tileVisible ? styles.visible : ''
			}`}
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
				type='button'
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
		</div>
	) : (
		<div
			className={`${styles.tile} ${tileVisible ? styles.visible : ''}`}
			ref={tileRef}
			onClick={() => {
				const selection = window.getSelection();
				if (
					selection &&
					selection.type === 'Range' &&
					selection.toString().length > 0 &&
					tileRef.current &&
					selection.anchorNode &&
					tileRef.current.contains(selection.anchorNode)
				) {
					// Selection is inside stats, don't flip
					return;
				}
				setFlipped((prev) => !prev);
			}}
			aria-label={`Details for ${title}`}
			aria-live='polite'
			role='button'
			onKeyDown={handleArticleKey}
			aria-hidden={index > 5 && !showMore ? 'true' : undefined}
			tabIndex={index > 5 && !showMore ? -1 : 0}
		>
			<div
				className={`${styles['tile-content']} ${flipped ? styles.flipped : ''}`}
			>
				<div className={styles['tile-front']}>
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
							const selection = window.getSelection();
							if (
								selection &&
								selection.type === 'Range' &&
								selection.toString().length > 0 &&
								tileRef.current &&
								selection.anchorNode &&
								tileRef.current.contains(selection.anchorNode)
							) {
								// Selection is inside stats, don't flip
								return;
							}
							setFlipped((prev) => !prev);
						}}
						className={styles.more}
						// ensure it's not focusable when the front is hidden
						tabIndex={flipped || (index > 5 && !showMore) ? -1 : 0}
						aria-hidden={flipped || (index > 5 && !showMore)}
					>
						Read More
					</button>
				</div>

				<div className={styles['tile-back']}>
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
								const selection = window.getSelection();
								if (
									selection &&
									selection.type === 'Range' &&
									selection.toString().length > 0 &&
									tileRef.current &&
									selection.anchorNode &&
									tileRef.current.contains(selection.anchorNode)
								) {
									// Selection is inside stats, don't flip
									return;
								}
								setFlipped((prev) => !prev);
							}}
							className={styles.back}
							// only tabbable when back is visible
							tabIndex={!flipped || (index > 5 && !showMore) ? -1 : 0}
							aria-hidden={!flipped || (index > 5 && !showMore)}
						>
							Back
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Tile;
