'use client';

// Library imports
import React, { useState, useEffect, useRef, ReactNode } from 'react';

// Styles imports
import styles from './tile.module.scss';

// MUI Icons
import { Leaderboard } from '@mui/icons-material';

type TileProps = {
	title: string;
	summary: string;
	stat1: string;
	stat2?: string;
	icon: ReactNode;
};

function Tile({ title, summary, stat1, stat2, icon }: TileProps) {
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
				}
			});
		});

		if (tileRef.current) observer.observe(tileRef.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
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
					<div className={styles.h3}>
						<h3 className={styles.h3}>{title}</h3>
					</div>
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
						<div className={styles.h3}>
							<h3>{title}</h3>
						</div>
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
