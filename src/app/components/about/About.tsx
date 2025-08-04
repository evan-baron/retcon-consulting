// Library imports
import React from 'react';

// Styles imports
import styles from './about.module.scss';

function About({ id }: { id: string }) {
	return (
		<div className={styles['about-wrapper']} id={id}>
			<section
				className={styles.about}
				aria-label='About the team and our mission'
			>
				<h2 className={styles.h2}>About</h2>
			</section>
		</div>
	);
}

export default About;
