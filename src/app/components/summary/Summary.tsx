// Library imports
import React from 'react';
import Image from 'next/image';

// Styles imports
import styles from './summary.module.scss';

// Component imports
import CTA from '../ctaButton/CTA';

function Summary() {
	return (
		<div className={styles['summary-wrapper']}>
			<section
				className={styles.summary}
				aria-label="Summary of why you're here"
			>
				<div className={styles.content}>
					<div className={styles['image-wrapper']}>
						<div className={styles.wrapper}>
							<div className={styles['image-background']}></div>
						</div>
						<div className={styles.image}>
							<Image
								src='/data-extraction-cuate.svg'
								alt='Illustration representing startup innovation, outreach improvement, and data-driven design and growth strategy'
								className={styles['data-image']}
								fill
								priority={true}
							/>
						</div>
					</div>
					<div className={styles['text-wrapper']}>
						<p className={styles['summary-highlight']}>
							Growth shouldn&#39;t feel like guesswork.
						</p>
						<p className={styles['summary-text']}>
							If you&#39;re stuck, circling the same challenges, or unsure
							what&#39;s next, it&#39;s time to break that cycle. We help
							startups, entrepreneurs, and innovators move forward with purpose
							through design, product strategy, and creative problem-solving.
						</p>
						<p className={styles['summary-text']}>
							It&#39;s time to rewrite your narrative.
						</p>
						<CTA content='Book Now' parent='summary' />
					</div>
				</div>
			</section>
		</div>
	);
}

export default Summary;
