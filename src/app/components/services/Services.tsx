'use client';

// Library imports
import React from 'react';

// Styles imports
import styles from './services.module.scss';

// Component imports
import CTA from '../ctaButton/CTA';
import RGBLogo from '../RGBLogo/RGBLogo';

// Data imports

function Services({ id }: { id: string }) {
	return (
		<section className={styles['services-wrapper']} id={id}>
			<h2 className={styles.h2}>Services</h2>

			<div
				className={styles.services}
				aria-label='The services we offer to help you grow your business'
			>
				{/* Development */}
				<div className={styles['content-wrapper']}>
					<div className={styles['content-container']}>
						<h3>Web Development</h3>
						<div className={styles.content}>
							<div className={styles.graphics}>
								<div className={styles.development}>
									<div className={styles.desktop}>
										<div className={styles.monitor}>
											<div className={styles.screen}>
												<RGBLogo />
											</div>
										</div>
										<div className={styles.base}>
											<div className={styles.stand}></div>
											<div className={styles.platform}></div>
										</div>
									</div>

									<div className={styles.tablet}>
										<div className={styles.screen}>
											<RGBLogo />
										</div>
									</div>

									<div className={styles.mobile}>
										<div className={styles.screen}>
											<RGBLogo />
										</div>
									</div>
								</div>
								<div className={styles.design}></div>
							</div>
							<div className={styles.text}></div>
						</div>
						<CTA content='Get Started' />
					</div>
				</div>

				{/* Consulting */}
				<div className={styles['content-wrapper']}>
					<div className={styles['content-container']}>
						<h3>Consulting</h3>
						<div className={styles.content}>
							<div className={styles.text}></div>
							<div className={styles.graphics}></div>
						</div>
						<CTA content='Get Started' />
					</div>
				</div>

				{/* <div className={styles['services-tiles']}>
					{tileData.map((tile) => (
						<Tile
							key={tile.title}
							title={tile.title}
							image={tile.image}
							imageBackground={tile.imageBackground}
							alt={tile.alt}
							summary={tile.summary}
							details={tile.details}
						/>
					))}
				</div> */}
			</div>
		</section>
	);
}

export default Services;
