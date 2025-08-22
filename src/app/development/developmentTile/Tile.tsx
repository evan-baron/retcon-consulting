'use client';

// Library imports
import React, { useState, ReactNode } from 'react';

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

	return (
		<div
			className={styles.tile}
			onClick={() => setFlipped((prev) => !prev)}
			aria-label={`Details for ${title}`}
		>
			<div
				className={`${styles['tile-content']} ${flipped ? styles.flipped : ''}`}
			>
				<div className={styles['tile-front']} aria-hidden={flipped}>
					<div className={styles['icon-box']}>{icon}</div>
					<div className={styles.h4}>
						<h4 className={styles.h4}>{title}</h4>
					</div>
					<p className={styles.p}>{summary}</p>
					<button
						type='button'
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
						<div className={styles.h4}>
							<h4 className={styles.h4}>{title}</h4>
						</div>{' '}
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
		</div>
	);
}

export default Tile;
