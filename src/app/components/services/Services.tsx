'use client';

// Library imports
import React, { useState } from 'react';
import Image from 'next/image';

// Styles imports
import styles from './services.module.scss';

function Services({ id }: { id: string }) {
	const [flipped, setFlipped] = useState({
		consulting: false,
		development: false,
		design: false,
	});

	return (
		<div className={styles['services-wrapper']} id={id}>
			<section
				className={styles.services}
				aria-label='The services we offer to help you grow your business'
			>
				<h2 className={styles.h2}>Services</h2>
				<div className={styles['services-tiles']}>
					{/* Tile for Consulting services */}
					<div
						className={styles.tile}
						onClick={() =>
							setFlipped({ ...flipped, consulting: !flipped.consulting })
						}
					>
						<div
							className={`${styles['tile-content']} ${
								flipped.consulting ? styles.flipped : ''
							}`}
						>
							<div className={styles['tile-front']}>
								<div className={styles['image-wrapper']}>
									<div className={styles.wrapper}>
										<div className={styles['image-background']}></div>
									</div>
									<Image
										src='/consulting-rafiki.svg'
										alt='Consulting services'
										width={400}
										height={400}
									/>
								</div>
								<h3>Consulting</h3>
								<p>Expert advice to guide your business strategy.</p>
							</div>

							<div className={styles['tile-back']}>
								<div className={styles['back-content']}>
									<h3 className={styles.h3}>Consulting</h3>
									<ul className={styles.ul}>
										<li className={styles.li}>
											Define product{' '}
											<span className={styles.emphasis}>positioning</span> and
											GTM <span className={styles.emphasis}>messaging</span>
										</li>
										<li className={styles.li}>
											Develop technical{' '}
											<span className={styles.emphasis}>
												sales enablement materials
											</span>{' '}
											and new client{' '}
											<span className={styles.emphasis}>
												onboarding workflows
											</span>
										</li>
										<li className={styles.li}>
											Align product features to buyer pain points to identify{' '}
											<span className={styles.emphasis}>
												product-market fit
											</span>
										</li>
										<li className={styles.li}>
											Create{' '}
											<span className={styles.emphasis}>launch strategies</span>{' '}
											for new products or features
										</li>
										<li className={styles.li}>
											Coach sales and product teams on{' '}
											<span className={styles.emphasis}>discovery</span> and{' '}
											<span className={styles.emphasis}>communication</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* Tile for Development services */}
					<div
						className={styles.tile}
						onClick={() =>
							setFlipped({ ...flipped, development: !flipped.development })
						}
					>
						<div
							className={`${styles['tile-content']} ${
								flipped.development ? styles.flipped : ''
							}`}
						>
							<div className={styles['tile-front']}>
								<div className={styles['image-wrapper']}>
									<Image
										src='/coding-bro.svg'
										alt='Development services'
										width={400}
										height={400}
									/>
								</div>
								<h3>Development</h3>
								<p>Custom software solutions tailored to your needs.</p>
							</div>
							<div className={styles['tile-back']}>
								<div className={styles['back-content']}>
									<h3 className={styles.h3}>Development</h3>
									<ul className={styles.ul}>
										<li className={styles.li}>
											Beautifully designed{' '}
											<span className={styles.emphasis}>custom websites</span>{' '}
											with{' '}
											<span className={styles.emphasis}>
												interactive content
											</span>
										</li>
										<li className={styles.li}>
											Full-stack architecture built for{' '}
											<span className={styles.emphasis}>speed</span>,{' '}
											<span className={styles.emphasis}>scalability</span>, and{' '}
											<span className={styles.emphasis}>easy maintenance</span>
										</li>
										<li className={styles.li}>
											End-to-end solutions from{' '}
											<span className={styles.emphasis}>concept</span> to{' '}
											<span className={styles.emphasis}>reality</span> with
											modern tech stacks like{' '}
											<span className={styles.emphasis}>React</span>,{' '}
											<span className={styles.emphasis}>Next.js</span>, and{' '}
											<span className={styles.emphasis}>Node</span>
										</li>
										<li className={styles.li}>
											Performance-optimized code with a focus on{' '}
											<span className={styles.emphasis}>accessibility</span> and{' '}
											<span className={styles.emphasis}>
												SEO best practices
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* Tile for Design services */}
					<div
						className={styles.tile}
						onClick={() => setFlipped({ ...flipped, design: !flipped.design })}
					>
						<div
							className={`${styles['tile-content']} ${
								flipped.design ? styles.flipped : ''
							}`}
						>
							<div className={styles['tile-front']}>
								<div className={styles['image-wrapper']}>
									<Image
										src='/design-tools-rafiki.svg'
										alt='Design services'
										width={400}
										height={400}
									/>
								</div>
								<h3>Design</h3>
								<p>Creative designs that enhance user experience.</p>
							</div>
							<div className={styles['tile-back']}>
								<div className={styles['back-content']}>
									<h3 className={styles.h3}>Design</h3>
									<ul className={styles.ul}>
										<li className={styles.li}>
											Modern,{' '}
											<span className={styles.emphasis}>
												conversion-focused
											</span>{' '}
											UI design tailored to your brand
										</li>
										<li className={styles.li}>
											Custom{' '}
											<span className={styles.emphasis}>color systems</span>,{' '}
											<span className={styles.emphasis}>typography</span>, and{' '}
											<span className={styles.emphasis}>visual elements</span>{' '}
											for cohesive branding
										</li>
										<li className={styles.li}>
											User-first UX that{' '}
											<span className={styles.emphasis}>
												simplifies the user journey
											</span>{' '}
											and{' '}
											<span className={styles.emphasis}>boosts engagement</span>
										</li>
										<li className={styles.li}>
											Responsive layouts{' '}
											<span className={styles.emphasis}>
												optimized for every screen and device
											</span>
										</li>
										<li className={styles.li}>
											Custom visuals and interactions that{' '}
											<span className={styles.emphasis}>
												bring your page to life
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Services;
