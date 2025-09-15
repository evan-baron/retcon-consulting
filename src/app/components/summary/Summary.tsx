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
						<div className={styles['text-block']}>
							<h2>Growth shouldn&#39;t feel like guesswork.</h2>
							<p className={styles['summary-text']}>
								If you&#39;re stuck, circling the same challenges, or unsure
								what&#39;s next, it&#39;s time to break that cycle.
							</p>
							<p className={styles['summary-text']}>
								We help startups, entrepreneurs, and innovators{' '}
								<span style={{ fontWeight: 'bold' }}>
									move forward with purpose
								</span>{' '}
								through design, product strategy, and creative problem-solving.
							</p>
							<p className={styles['summary-text']}>
								It&#39;s time to{' '}
								<span style={{ fontWeight: 'bold' }}>
									rewrite your narrative
								</span>
								.
							</p>
							<div className={styles.cta}>
								<CTA content='Get Started' parent='summary' />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Summary;
