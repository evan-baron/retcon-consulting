// Library imports
import React from 'react';
import Image from 'next/image';

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
				<div className={styles['content-wrapper']}>
					<div className={styles.content}>
						<div className={styles.profile}>
							<div className={styles['image-wrapper']}>
								<div className={styles.mask1}></div>
								<Image
									src='/bw-portrait-cropped.webp'
									alt='Evan Baron, founder of Retcon Consulting'
									width={340}
									height={625}
									className={styles['portrait']}
								/>
							</div>
							<div className={styles.mask2}></div>
						</div>
						<div className={styles.bio}>
							<p className={styles['bio-text']}>
								Evan Baron is the founder of Retcon Consulting,{' '}
								<span style={{ fontWeight: 'bold' }}>
									a digital strategy and development firm helping startups,
									founders, and growing businesses navigate the digital
									landscape.
								</span>{' '}
								With 10+ years in technical sales and digital transformation,
								Evan brings a rare blend of commercial acumen and product-savvy
								execution. He&#39;s led cross-functional initiatives across
								SaaS, mar-tech, and eCommerce, bridging the gap between
								engineering, design, and sales to deliver scalable,
								results-driven solutions. His work spans product strategy, UX
								design, and full-stack development.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
