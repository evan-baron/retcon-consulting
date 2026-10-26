'use client';

import { useState } from 'react';
import Image from 'next/image';
import BrowserChrome from '../BrowserChrome/BrowserChrome';
import Snowfall from './Snowfall';
import styles from './beforeAfter.module.scss';

type Props = {
	before: string;
	after: string;
	beforeAlt: string;
	afterAlt: string;
	label: string;
	eager?: boolean;
	snow?: boolean;
};

/** Drag (or arrow-key) comparison: "before" on the left, "after" on the right. */
export default function BeforeAfter({
	before,
	after,
	beforeAlt,
	afterAlt,
	label,
	eager = false,
	snow = false,
}: Props) {
	const [pos, setPos] = useState(50);

	return (
		<div
			className={styles.frame}
			style={{ '--pos': `${pos}%` } as React.CSSProperties}
		>
			<BrowserChrome />

			<div className={styles.stage}>
				<Image
					src={after}
					alt={afterAlt}
					width={1920}
					height={1008}
					sizes='(max-width: 1160px) 100vw, 1080px'
					loading={eager ? 'eager' : 'lazy'}
					className={styles.img}
				/>
				<div className={styles.top}>
					<Image
						src={before}
						alt={beforeAlt}
						width={1920}
						height={1008}
						sizes='(max-width: 1160px) 100vw, 1080px'
						className={styles.img}
					/>
				</div>

				{snow && (
					<div className={styles.snowLayer} aria-hidden='true'>
						<Snowfall />
					</div>
				)}

				<span className={`mono ${styles.tag} ${styles.tagBefore}`} aria-hidden='true'>
					Before
				</span>
				<span className={`mono ${styles.tag} ${styles.tagAfter}`} aria-hidden='true'>
					After
				</span>

				<span className={styles.divider} aria-hidden='true'>
					<span className={styles.handle}>
						<svg viewBox='0 0 24 24' width='18' height='18' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
							<path d='m9 7-5 5 5 5' />
							<path d='m15 7 5 5-5 5' />
						</svg>
					</span>
				</span>

				<input
					type='range'
					min={0}
					max={100}
					step={1}
					value={pos}
					onChange={(e) => setPos(Number(e.target.value))}
					className={styles.range}
					aria-label={`${label}: drag to compare before and after`}
					aria-valuetext={`${pos}% before, ${100 - pos}% after`}
				/>
			</div>
		</div>
	);
}
