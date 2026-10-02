import { Check } from 'lucide-react';
import ScoreRing from '../ScoreRing/ScoreRing';
import styles from './heroVisual.module.scss';

/** Decorative hero composition: a page being "retconned". Purely illustrative. */
export default function HeroVisual() {
	return (
		<div className={styles.stage} aria-hidden='true'>
			<div className={styles.dots} />
			<div className={styles.glow} />

			<div className={`${styles.card} ${styles.back}`}>
				<span className='mono'>Positioning</span>
				<i />
				<i />
				<i />
			</div>

			<div className={styles.window}>
				<div className={styles.chrome}>
					<span />
					<span />
					<span />
					<b>yourbrand.com</b>
				</div>
				<div className={styles.page}>
					<div className={styles.nav}>
						<em />
						<u />
						<u />
						<u />
						<s />
					</div>
					<p className={styles.old}>
						<del>We do a bit of everything</del>
					</p>
					<p className={styles.new}>Built to turn visitors into customers.</p>
					<div className={styles.lines}>
						<i />
						<i />
					</div>
					<div className={styles.btn} />
					<div className={styles.tiles}>
						<div />
						<div />
						<div />
					</div>
				</div>
			</div>

			<div className={`${styles.card} ${styles.score}`}>
				<ScoreRing value={100} label='Performance' />
			</div>

			<div className={`${styles.card} ${styles.comment}`}>
				<span className={styles.avatar}>
					<Check size={12} strokeWidth={3} />
				</span>
				Sharper positioning
			</div>
		</div>
	);
}
