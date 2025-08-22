// Library imports
import React from 'react';

// Hooks imports

// Styles imports
import styles from './measureSuccess.module.scss';

// Components imports

// Context imports

const MeasureSuccess = () => {
	const scores = ['Performance', 'Accessibility', 'Best Practices', 'SEO'];

	return (
		<div className={styles['measureSuccess-wrapper']}>
			<div className={styles['lighthouse-wrapper']}>
				<div className={styles['scores']}>
					{scores.map((score) => (
						<div key={score} className={styles['score-box']}>
							<div className={styles.score}>100</div>
							<div className={styles.label}>{score}</div>
						</div>
					))}
				</div>
				<div className={styles.pyro}>
					<div className={styles.before}></div>
					<div className={styles.after}></div>
				</div>
			</div>
		</div>
	);
};

export default MeasureSuccess;
