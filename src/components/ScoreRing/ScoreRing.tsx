import styles from './scoreRing.module.scss';

/** Decorative circular gauge, drawn in on load. */
export default function ScoreRing({
	value = 100,
	label,
	delay = 0,
}: {
	value?: number;
	label?: string;
	delay?: number;
}) {
	return (
		<div className={styles.wrap}>
			<svg viewBox='0 0 36 36' className={styles.ring} aria-hidden='true' focusable='false'>
				<circle cx='18' cy='18' r='15.5' className={styles.track} />
				<circle
					cx='18'
					cy='18'
					r='15.5'
					pathLength='100'
					className={styles.bar}
					strokeDasharray={`${value} 100`}
					style={{ animationDelay: `${delay}ms` }}
					transform='rotate(-90 18 18)'
				/>
			</svg>
			<span className={styles.value}>{value}</span>
			{label && <span className={styles.label}>{label}</span>}
		</div>
	);
}
