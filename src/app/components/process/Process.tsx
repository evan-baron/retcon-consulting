import React from 'react';

// Styles imports
import styles from './process.module.scss';

function Process() {
	return (
		<div className={styles['process-wrapper']}>
			<section
				className={styles.process}
				aria-label='Our process for delivering results'
			>
				<h2 className={styles.h2}>Our Process</h2>
			</section>
		</div>
	);
}

export default Process;
