'use client';

// Library imports
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Hooks imports

// Styles imports
import styles from './webDev.module.scss';
import mobileStyles from './webDevMobile.module.scss';

// Icon imports
import { ContentCut } from '@mui/icons-material';
import { FaReact, FaSass } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { AiOutlineHtml5 } from 'react-icons/ai';

// Components imports
import RGBLogo from '../../RGBLogo/RGBLogo';
import WebDevGraphics from '../graphics/webDevGraphics/WebDevGraphics';

// Context imports
import { useAppContext } from '@/app/context/AppContext';

const WebDev = () => {
	const { isMobile, isTabletWidth } = useAppContext();

	return !isMobile && !isTabletWidth ? (
		<div className={styles['desktop-content']}>
			<div className={styles.graphics}>
				<WebDevGraphics />
			</div>
			<div className={styles.text}>
				<div className={styles['text-content']}>
					<h4>Web Development</h4>
					<p>
						We build responsive and modern websites tailored to your business
						needs. Leveraging trusted frameworks like{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							React
						</span>
						,{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							Next.js
						</span>
						, and other modern technologies, we ensure your online presence is{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							robust
						</span>
						,{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							scalable
						</span>
						, and{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							future-proof
						</span>
						.
					</p>
					<p>
						With expertise in{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							HTML5
						</span>{' '}
						and{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							CSS3
						</span>
						, we create{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							visually appealing
						</span>{' '}
						and{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							user-friendly
						</span>{' '}
						interfaces that engage your audience. Our development process
						emphasizes performance, accessibility, and SEO best practices to
						help your website stand out in the digital landscape.
					</p>

					<div className={styles.icons}>
						<FaReact className={`${styles.icon} ${styles.react}`} />

						<RiNextjsFill className={`${styles.icon} ${styles.next}`} />

						<FaSass className={`${styles.icon} ${styles.sass}`} title='Sass' />
						<AiOutlineHtml5 className={`${styles.icon} ${styles.html}`} />
					</div>
				</div>
				<div className={styles['text-content']}>
					<h4>Design</h4>
					<p>
						Our design process focuses on closely collaborating with our clients
						to understand their brand and goals, ensuring every detail is
						tailored to their unique needs. From wireframes and prototypes to
						final mockups, we prioritize{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							usability
						</span>
						,{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							accessibility
						</span>
						, and{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							modern aesthetics
						</span>{' '}
						to deliver a beautiful final product.
					</p>
					<ul className={styles.bullets}>
						<li className={styles.bullet}>
							<p aria-hidden='true' className={styles.arrow}>
								&rarr;
							</p>
							<p>Strong communication and collaboration from start to launch</p>
						</li>
						<li className={styles.bullet}>
							<p aria-hidden='true' className={styles.arrow}>
								&rarr;
							</p>
							<p>
								Modern design that&apos;s accessible, user-friendly, and
								engaging
							</p>
						</li>
						<li className={styles.bullet}>
							<p aria-hidden='true' className={styles.arrow}>
								&rarr;
							</p>
							<p>Brand-focused, goal-driven results</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	) : (
		<div className={mobileStyles['mobile-content']}>
			<div className={mobileStyles['mobile-webdev']}>
				<h3>Web Development</h3>

				<div className={mobileStyles['webdev-graphics']}>
					<div className={mobileStyles.gear1}>
						<Image
							src='/assets/services/xl-gear.png'
							alt='code graphic'
							fill
							className={styles.image}
						/>
						{/* <svg
							version='1.2'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 151 151'
							width='100%'
							height='100%'
							className={mobileStyles.image}
						>
							<path
								id='Path 0'
								fillRule='evenodd'
								className='s0'
								d='m82.42 0.5l0.68 3.5c0.37 1.92 0.95 5.64 1.9 13l5.25 1.06c2.89 0.58 8.74 2.83 20.75 8.94l5.25-3.81c2.89-2.1 5.92-4.18 6.75-4.61 1.07-0.57 2.85 0.59 10.92 8.92l-9.92 12.5 3.92 7.75c2.16 4.26 4.48 10 5.15 12.75 0.67 2.75 1.43 5.22 1.67 5.5 0.25 0.28 3.9 0.95 15.76 2.52v13.96l-7.65 1.01c-4.21 0.56-7.87 1.23-8.13 1.51-0.26 0.28-1.24 3.2-2.18 6.5-0.94 3.3-3.31 8.92-8.82 19l3.96 5.5c2.17 3.03 4.31 6.17 4.74 7 0.57 1.06-0.48 2.75-3.56 5.76-2.4 2.35-4.7 4.26-5.11 4.25-0.41 0-3.56-2.09-13.25-9.27l-8 4.07c-4.4 2.24-9.58 4.35-11.5 4.68-1.92 0.34-4.17 1.03-5 1.54-0.96 0.59-1.87 3.74-3.52 16.47h-13.98l-1-7.89q-1-7.89-2.5-8.64c-0.83-0.4-4.65-1.69-8.5-2.86-3.85-1.17-9.02-3.4-16-7.8l-13 9.68-4.5-4.21c-2.48-2.31-4.61-4.56-4.75-4.99-0.14-0.44 1.77-3.49 4.25-6.79 2.48-3.3 4.5-6.45 4.5-7 0-0.55-1.19-2.91-2.65-5.25-1.45-2.34-3.82-7.92-7.85-20.56l-6-0.65c-3.3-0.37-7.01-0.86-8.25-1.1-2.1-0.41-2.23-0.89-1.75-13.9l5-0.77c2.75-0.42 6.46-1 8.25-1.27 2.86-0.44 3.38-1.02 4.31-4.75 0.58-2.34 1.82-6.27 2.75-8.73 0.93-2.46 2.87-6.29 6.93-12.52l-10.24-13.62 4.41-4.44c2.42-2.44 4.9-4.44 5.5-4.44 0.6 0 3.68 2.03 12.59 9l8.25-3.97c4.54-2.18 10.5-4.44 18.25-6.06l0.81-6.23c0.45-3.43 1.07-7.27 1.39-8.53 0.53-2.14 1.01-2.28 13.72-1.71zm-27.92 35.22c-2.2 1.13-6.41 4.24-9.36 6.91-2.95 2.68-6.62 7.12-8.16 9.87-1.54 2.75-3.58 7.7-4.52 11-1.21 4.26-1.6 8.47-1.32 14.5 0.34 7.42 0.89 9.52 4.3 16.5 2.53 5.19 5.71 9.76 9.03 13 2.82 2.75 7.58 6.18 10.58 7.62 3 1.44 7.93 3.19 10.95 3.89 3.32 0.77 8.68 1.07 13.5 0.76 6.15-0.4 9.62-1.26 15-3.74 4.71-2.17 8.82-5.07 12.57-8.88 3.18-3.22 6.94-8.44 8.75-12.15 1.74-3.57 3.54-9.2 4-12.5 0.46-3.3 0.46-9.15 0-13-0.49-4.09-2.01-9.5-3.66-13-1.56-3.3-5.27-8.63-8.25-11.85-3.83-4.15-7.58-6.92-12.86-9.5-6.97-3.42-8.12-3.67-18-3.89-6.68-0.15-12.02 0.25-14.55 1.09-2.2 0.73-5.8 2.24-8 3.37z'
							/>
						</svg> */}
					</div>
					<div className={mobileStyles.gear2}>
						<Image
							src='/assets/services/xl-gear.png'
							alt='code graphic'
							fill
							className={styles.image}
						/>
						{/* <svg
							version='1.2'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 151 151'
							width='100%'
							height='100%'
							className={mobileStyles.image}
						>
							<path
								id='Path 0'
								fillRule='evenodd'
								className='s0'
								d='m82.42 0.5l0.68 3.5c0.37 1.92 0.95 5.64 1.9 13l5.25 1.06c2.89 0.58 8.74 2.83 20.75 8.94l5.25-3.81c2.89-2.1 5.92-4.18 6.75-4.61 1.07-0.57 2.85 0.59 10.92 8.92l-9.92 12.5 3.92 7.75c2.16 4.26 4.48 10 5.15 12.75 0.67 2.75 1.43 5.22 1.67 5.5 0.25 0.28 3.9 0.95 15.76 2.52v13.96l-7.65 1.01c-4.21 0.56-7.87 1.23-8.13 1.51-0.26 0.28-1.24 3.2-2.18 6.5-0.94 3.3-3.31 8.92-8.82 19l3.96 5.5c2.17 3.03 4.31 6.17 4.74 7 0.57 1.06-0.48 2.75-3.56 5.76-2.4 2.35-4.7 4.26-5.11 4.25-0.41 0-3.56-2.09-13.25-9.27l-8 4.07c-4.4 2.24-9.58 4.35-11.5 4.68-1.92 0.34-4.17 1.03-5 1.54-0.96 0.59-1.87 3.74-3.52 16.47h-13.98l-1-7.89q-1-7.89-2.5-8.64c-0.83-0.4-4.65-1.69-8.5-2.86-3.85-1.17-9.02-3.4-16-7.8l-13 9.68-4.5-4.21c-2.48-2.31-4.61-4.56-4.75-4.99-0.14-0.44 1.77-3.49 4.25-6.79 2.48-3.3 4.5-6.45 4.5-7 0-0.55-1.19-2.91-2.65-5.25-1.45-2.34-3.82-7.92-7.85-20.56l-6-0.65c-3.3-0.37-7.01-0.86-8.25-1.1-2.1-0.41-2.23-0.89-1.75-13.9l5-0.77c2.75-0.42 6.46-1 8.25-1.27 2.86-0.44 3.38-1.02 4.31-4.75 0.58-2.34 1.82-6.27 2.75-8.73 0.93-2.46 2.87-6.29 6.93-12.52l-10.24-13.62 4.41-4.44c2.42-2.44 4.9-4.44 5.5-4.44 0.6 0 3.68 2.03 12.59 9l8.25-3.97c4.54-2.18 10.5-4.44 18.25-6.06l0.81-6.23c0.45-3.43 1.07-7.27 1.39-8.53 0.53-2.14 1.01-2.28 13.72-1.71zm-27.92 35.22c-2.2 1.13-6.41 4.24-9.36 6.91-2.95 2.68-6.62 7.12-8.16 9.87-1.54 2.75-3.58 7.7-4.52 11-1.21 4.26-1.6 8.47-1.32 14.5 0.34 7.42 0.89 9.52 4.3 16.5 2.53 5.19 5.71 9.76 9.03 13 2.82 2.75 7.58 6.18 10.58 7.62 3 1.44 7.93 3.19 10.95 3.89 3.32 0.77 8.68 1.07 13.5 0.76 6.15-0.4 9.62-1.26 15-3.74 4.71-2.17 8.82-5.07 12.57-8.88 3.18-3.22 6.94-8.44 8.75-12.15 1.74-3.57 3.54-9.2 4-12.5 0.46-3.3 0.46-9.15 0-13-0.49-4.09-2.01-9.5-3.66-13-1.56-3.3-5.27-8.63-8.25-11.85-3.83-4.15-7.58-6.92-12.86-9.5-6.97-3.42-8.12-3.67-18-3.89-6.68-0.15-12.02 0.25-14.55 1.09-2.2 0.73-5.8 2.24-8 3.37z'
							/>
						</svg> */}
					</div>
					<div className={mobileStyles.gear3}>
						<Image
							src='/assets/services/xl-gear.png'
							alt='code graphic'
							fill
							className={styles.image}
						/>
						{/* <svg
							version='1.2'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 151 151'
							width='100%'
							height='100%'
							className={mobileStyles.image}
						>
							<path
								id='Path 0'
								fillRule='evenodd'
								className='s0'
								d='m82.42 0.5l0.68 3.5c0.37 1.92 0.95 5.64 1.9 13l5.25 1.06c2.89 0.58 8.74 2.83 20.75 8.94l5.25-3.81c2.89-2.1 5.92-4.18 6.75-4.61 1.07-0.57 2.85 0.59 10.92 8.92l-9.92 12.5 3.92 7.75c2.16 4.26 4.48 10 5.15 12.75 0.67 2.75 1.43 5.22 1.67 5.5 0.25 0.28 3.9 0.95 15.76 2.52v13.96l-7.65 1.01c-4.21 0.56-7.87 1.23-8.13 1.51-0.26 0.28-1.24 3.2-2.18 6.5-0.94 3.3-3.31 8.92-8.82 19l3.96 5.5c2.17 3.03 4.31 6.17 4.74 7 0.57 1.06-0.48 2.75-3.56 5.76-2.4 2.35-4.7 4.26-5.11 4.25-0.41 0-3.56-2.09-13.25-9.27l-8 4.07c-4.4 2.24-9.58 4.35-11.5 4.68-1.92 0.34-4.17 1.03-5 1.54-0.96 0.59-1.87 3.74-3.52 16.47h-13.98l-1-7.89q-1-7.89-2.5-8.64c-0.83-0.4-4.65-1.69-8.5-2.86-3.85-1.17-9.02-3.4-16-7.8l-13 9.68-4.5-4.21c-2.48-2.31-4.61-4.56-4.75-4.99-0.14-0.44 1.77-3.49 4.25-6.79 2.48-3.3 4.5-6.45 4.5-7 0-0.55-1.19-2.91-2.65-5.25-1.45-2.34-3.82-7.92-7.85-20.56l-6-0.65c-3.3-0.37-7.01-0.86-8.25-1.1-2.1-0.41-2.23-0.89-1.75-13.9l5-0.77c2.75-0.42 6.46-1 8.25-1.27 2.86-0.44 3.38-1.02 4.31-4.75 0.58-2.34 1.82-6.27 2.75-8.73 0.93-2.46 2.87-6.29 6.93-12.52l-10.24-13.62 4.41-4.44c2.42-2.44 4.9-4.44 5.5-4.44 0.6 0 3.68 2.03 12.59 9l8.25-3.97c4.54-2.18 10.5-4.44 18.25-6.06l0.81-6.23c0.45-3.43 1.07-7.27 1.39-8.53 0.53-2.14 1.01-2.28 13.72-1.71zm-27.92 35.22c-2.2 1.13-6.41 4.24-9.36 6.91-2.95 2.68-6.62 7.12-8.16 9.87-1.54 2.75-3.58 7.7-4.52 11-1.21 4.26-1.6 8.47-1.32 14.5 0.34 7.42 0.89 9.52 4.3 16.5 2.53 5.19 5.71 9.76 9.03 13 2.82 2.75 7.58 6.18 10.58 7.62 3 1.44 7.93 3.19 10.95 3.89 3.32 0.77 8.68 1.07 13.5 0.76 6.15-0.4 9.62-1.26 15-3.74 4.71-2.17 8.82-5.07 12.57-8.88 3.18-3.22 6.94-8.44 8.75-12.15 1.74-3.57 3.54-9.2 4-12.5 0.46-3.3 0.46-9.15 0-13-0.49-4.09-2.01-9.5-3.66-13-1.56-3.3-5.27-8.63-8.25-11.85-3.83-4.15-7.58-6.92-12.86-9.5-6.97-3.42-8.12-3.67-18-3.89-6.68-0.15-12.02 0.25-14.55 1.09-2.2 0.73-5.8 2.24-8 3.37z'
							/>
						</svg> */}
					</div>
					<div className={mobileStyles.gear4}>
						<Image
							src='/assets/services/xl-gear.png'
							alt='code graphic'
							fill
							className={styles.image}
						/>
						{/* <svg
							version='1.2'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 151 151'
							width='100%'
							height='100%'
							className={mobileStyles.image}
						>
							<path
								id='Path 0'
								fillRule='evenodd'
								className='s0'
								d='m82.42 0.5l0.68 3.5c0.37 1.92 0.95 5.64 1.9 13l5.25 1.06c2.89 0.58 8.74 2.83 20.75 8.94l5.25-3.81c2.89-2.1 5.92-4.18 6.75-4.61 1.07-0.57 2.85 0.59 10.92 8.92l-9.92 12.5 3.92 7.75c2.16 4.26 4.48 10 5.15 12.75 0.67 2.75 1.43 5.22 1.67 5.5 0.25 0.28 3.9 0.95 15.76 2.52v13.96l-7.65 1.01c-4.21 0.56-7.87 1.23-8.13 1.51-0.26 0.28-1.24 3.2-2.18 6.5-0.94 3.3-3.31 8.92-8.82 19l3.96 5.5c2.17 3.03 4.31 6.17 4.74 7 0.57 1.06-0.48 2.75-3.56 5.76-2.4 2.35-4.7 4.26-5.11 4.25-0.41 0-3.56-2.09-13.25-9.27l-8 4.07c-4.4 2.24-9.58 4.35-11.5 4.68-1.92 0.34-4.17 1.03-5 1.54-0.96 0.59-1.87 3.74-3.52 16.47h-13.98l-1-7.89q-1-7.89-2.5-8.64c-0.83-0.4-4.65-1.69-8.5-2.86-3.85-1.17-9.02-3.4-16-7.8l-13 9.68-4.5-4.21c-2.48-2.31-4.61-4.56-4.75-4.99-0.14-0.44 1.77-3.49 4.25-6.79 2.48-3.3 4.5-6.45 4.5-7 0-0.55-1.19-2.91-2.65-5.25-1.45-2.34-3.82-7.92-7.85-20.56l-6-0.65c-3.3-0.37-7.01-0.86-8.25-1.1-2.1-0.41-2.23-0.89-1.75-13.9l5-0.77c2.75-0.42 6.46-1 8.25-1.27 2.86-0.44 3.38-1.02 4.31-4.75 0.58-2.34 1.82-6.27 2.75-8.73 0.93-2.46 2.87-6.29 6.93-12.52l-10.24-13.62 4.41-4.44c2.42-2.44 4.9-4.44 5.5-4.44 0.6 0 3.68 2.03 12.59 9l8.25-3.97c4.54-2.18 10.5-4.44 18.25-6.06l0.81-6.23c0.45-3.43 1.07-7.27 1.39-8.53 0.53-2.14 1.01-2.28 13.72-1.71zm-27.92 35.22c-2.2 1.13-6.41 4.24-9.36 6.91-2.95 2.68-6.62 7.12-8.16 9.87-1.54 2.75-3.58 7.7-4.52 11-1.21 4.26-1.6 8.47-1.32 14.5 0.34 7.42 0.89 9.52 4.3 16.5 2.53 5.19 5.71 9.76 9.03 13 2.82 2.75 7.58 6.18 10.58 7.62 3 1.44 7.93 3.19 10.95 3.89 3.32 0.77 8.68 1.07 13.5 0.76 6.15-0.4 9.62-1.26 15-3.74 4.71-2.17 8.82-5.07 12.57-8.88 3.18-3.22 6.94-8.44 8.75-12.15 1.74-3.57 3.54-9.2 4-12.5 0.46-3.3 0.46-9.15 0-13-0.49-4.09-2.01-9.5-3.66-13-1.56-3.3-5.27-8.63-8.25-11.85-3.83-4.15-7.58-6.92-12.86-9.5-6.97-3.42-8.12-3.67-18-3.89-6.68-0.15-12.02 0.25-14.55 1.09-2.2 0.73-5.8 2.24-8 3.37z'
							/>
						</svg> */}
					</div>

					<div className={mobileStyles.devices}>
						<div className={mobileStyles.desktop}>
							<div className={mobileStyles.monitor}>
								<div className={mobileStyles.screen}>
									<div className={mobileStyles.navbar}>
										<div className={mobileStyles.logo}>
											<Image
												src='/logo.svg'
												alt='Logo Image'
												width={9}
												height={9}
											/>
										</div>
										<div className={mobileStyles.brand}>Retcon Consulting</div>
										<div className={mobileStyles.burger}>
											<div className={mobileStyles.line}></div>
										</div>
									</div>
									<div className={mobileStyles.bg}>
										<RGBLogo />
									</div>
								</div>
							</div>
							<div className={mobileStyles.base}>
								<div className={mobileStyles.stand}></div>
								<div className={mobileStyles.platform}></div>
							</div>
						</div>

						<div className={mobileStyles.tablet}>
							<div className={mobileStyles.screen}>
								<div className={mobileStyles.navbar}>
									<div className={mobileStyles.logo}>
										<Image
											src='/logo.svg'
											alt='Logo Image'
											width={9}
											height={9}
										/>
									</div>
									<div className={mobileStyles.brand}>Retcon Consulting</div>
									<div className={mobileStyles.burger}>
										<div className={mobileStyles.line}></div>
									</div>
								</div>
								<div className={mobileStyles.bg}>
									<RGBLogo />
								</div>
							</div>
						</div>

						<div className={mobileStyles.mobile}>
							<div className={mobileStyles.screen}>
								<div className={mobileStyles.navbar}>
									<div className={mobileStyles.logo}>
										<Image
											src='/logo.svg'
											alt='Logo Image'
											width={8}
											height={8}
										/>
									</div>
									<div className={mobileStyles.brand}>Retcon Consulting</div>
									<div className={mobileStyles.burger}>
										<div className={mobileStyles.line}></div>
									</div>
								</div>
								<div className={mobileStyles.bg}>
									<RGBLogo />
								</div>
							</div>
						</div>
					</div>
					<div className={mobileStyles.code}>{`</>`}</div>
				</div>
				<div className={mobileStyles['text-content']}>
					<div className={mobileStyles['webdev-text']}>
						<p>
							We apply modern best practices to ensure your online presence is{' '}
							<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
								robust
							</span>
							,{' '}
							<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
								scalable
							</span>
							, and{' '}
							<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
								future-proof
							</span>
							.
						</p>
						<p>
							Using trusted frameworks like{' '}
							<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
								React
							</span>
							,{' '}
							<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
								Next.js
							</span>
							, and other modern technologies, we make sure your website is{' '}
							<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
								built to last
							</span>
							.
						</p>
						<ul className={mobileStyles.bullets}>
							<li className={mobileStyles.bullet}>
								<p aria-hidden='true' className={mobileStyles.arrow}>
									&rarr;
								</p>
								<p>Mobile Responsiveness</p>
							</li>
							<li className={mobileStyles.bullet}>
								<p aria-hidden='true' className={mobileStyles.arrow}>
									&rarr;
								</p>
								<p>Maintainability</p>
							</li>
							<li className={mobileStyles.bullet}>
								<p aria-hidden='true' className={mobileStyles.arrow}>
									&rarr;
								</p>
								<p>Accessibility</p>
							</li>
						</ul>
					</div>
					<FaReact className={mobileStyles.react} />
					<div className={mobileStyles.cta}>
						<Link href='/development'>
							<span className={mobileStyles.link}>Learn More</span>
							{/* <span className={mobileStyles.arrow}>&rarr;</span> */}
						</Link>
					</div>
				</div>
				<div className={mobileStyles.gear5}>
					<Image
						src='/assets/services/xl-gear.png'
						alt='code graphic'
						fill
						className={styles.image}
					/>
					{/* <svg
						version='1.2'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 151 151'
						width='100%'
						height='100%'
						className={mobileStyles.image}
					>
						<path
							id='Path 0'
							fillRule='evenodd'
							className='s0'
							d='m82.42 0.5l0.68 3.5c0.37 1.92 0.95 5.64 1.9 13l5.25 1.06c2.89 0.58 8.74 2.83 20.75 8.94l5.25-3.81c2.89-2.1 5.92-4.18 6.75-4.61 1.07-0.57 2.85 0.59 10.92 8.92l-9.92 12.5 3.92 7.75c2.16 4.26 4.48 10 5.15 12.75 0.67 2.75 1.43 5.22 1.67 5.5 0.25 0.28 3.9 0.95 15.76 2.52v13.96l-7.65 1.01c-4.21 0.56-7.87 1.23-8.13 1.51-0.26 0.28-1.24 3.2-2.18 6.5-0.94 3.3-3.31 8.92-8.82 19l3.96 5.5c2.17 3.03 4.31 6.17 4.74 7 0.57 1.06-0.48 2.75-3.56 5.76-2.4 2.35-4.7 4.26-5.11 4.25-0.41 0-3.56-2.09-13.25-9.27l-8 4.07c-4.4 2.24-9.58 4.35-11.5 4.68-1.92 0.34-4.17 1.03-5 1.54-0.96 0.59-1.87 3.74-3.52 16.47h-13.98l-1-7.89q-1-7.89-2.5-8.64c-0.83-0.4-4.65-1.69-8.5-2.86-3.85-1.17-9.02-3.4-16-7.8l-13 9.68-4.5-4.21c-2.48-2.31-4.61-4.56-4.75-4.99-0.14-0.44 1.77-3.49 4.25-6.79 2.48-3.3 4.5-6.45 4.5-7 0-0.55-1.19-2.91-2.65-5.25-1.45-2.34-3.82-7.92-7.85-20.56l-6-0.65c-3.3-0.37-7.01-0.86-8.25-1.1-2.1-0.41-2.23-0.89-1.75-13.9l5-0.77c2.75-0.42 6.46-1 8.25-1.27 2.86-0.44 3.38-1.02 4.31-4.75 0.58-2.34 1.82-6.27 2.75-8.73 0.93-2.46 2.87-6.29 6.93-12.52l-10.24-13.62 4.41-4.44c2.42-2.44 4.9-4.44 5.5-4.44 0.6 0 3.68 2.03 12.59 9l8.25-3.97c4.54-2.18 10.5-4.44 18.25-6.06l0.81-6.23c0.45-3.43 1.07-7.27 1.39-8.53 0.53-2.14 1.01-2.28 13.72-1.71zm-27.92 35.22c-2.2 1.13-6.41 4.24-9.36 6.91-2.95 2.68-6.62 7.12-8.16 9.87-1.54 2.75-3.58 7.7-4.52 11-1.21 4.26-1.6 8.47-1.32 14.5 0.34 7.42 0.89 9.52 4.3 16.5 2.53 5.19 5.71 9.76 9.03 13 2.82 2.75 7.58 6.18 10.58 7.62 3 1.44 7.93 3.19 10.95 3.89 3.32 0.77 8.68 1.07 13.5 0.76 6.15-0.4 9.62-1.26 15-3.74 4.71-2.17 8.82-5.07 12.57-8.88 3.18-3.22 6.94-8.44 8.75-12.15 1.74-3.57 3.54-9.2 4-12.5 0.46-3.3 0.46-9.15 0-13-0.49-4.09-2.01-9.5-3.66-13-1.56-3.3-5.27-8.63-8.25-11.85-3.83-4.15-7.58-6.92-12.86-9.5-6.97-3.42-8.12-3.67-18-3.89-6.68-0.15-12.02 0.25-14.55 1.09-2.2 0.73-5.8 2.24-8 3.37z'
						/>
					</svg> */}
				</div>
				<div className={mobileStyles.gear6}>
					<Image
						src='/assets/services/xl-gear.png'
						alt='code graphic'
						fill
						className={styles.image}
					/>
					{/* <svg
						version='1.2'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 151 151'
						width='100%'
						height='100%'
						className={mobileStyles.image}
					>
						<path
							id='Path 0'
							fillRule='evenodd'
							className='s0'
							d='m82.42 0.5l0.68 3.5c0.37 1.92 0.95 5.64 1.9 13l5.25 1.06c2.89 0.58 8.74 2.83 20.75 8.94l5.25-3.81c2.89-2.1 5.92-4.18 6.75-4.61 1.07-0.57 2.85 0.59 10.92 8.92l-9.92 12.5 3.92 7.75c2.16 4.26 4.48 10 5.15 12.75 0.67 2.75 1.43 5.22 1.67 5.5 0.25 0.28 3.9 0.95 15.76 2.52v13.96l-7.65 1.01c-4.21 0.56-7.87 1.23-8.13 1.51-0.26 0.28-1.24 3.2-2.18 6.5-0.94 3.3-3.31 8.92-8.82 19l3.96 5.5c2.17 3.03 4.31 6.17 4.74 7 0.57 1.06-0.48 2.75-3.56 5.76-2.4 2.35-4.7 4.26-5.11 4.25-0.41 0-3.56-2.09-13.25-9.27l-8 4.07c-4.4 2.24-9.58 4.35-11.5 4.68-1.92 0.34-4.17 1.03-5 1.54-0.96 0.59-1.87 3.74-3.52 16.47h-13.98l-1-7.89q-1-7.89-2.5-8.64c-0.83-0.4-4.65-1.69-8.5-2.86-3.85-1.17-9.02-3.4-16-7.8l-13 9.68-4.5-4.21c-2.48-2.31-4.61-4.56-4.75-4.99-0.14-0.44 1.77-3.49 4.25-6.79 2.48-3.3 4.5-6.45 4.5-7 0-0.55-1.19-2.91-2.65-5.25-1.45-2.34-3.82-7.92-7.85-20.56l-6-0.65c-3.3-0.37-7.01-0.86-8.25-1.1-2.1-0.41-2.23-0.89-1.75-13.9l5-0.77c2.75-0.42 6.46-1 8.25-1.27 2.86-0.44 3.38-1.02 4.31-4.75 0.58-2.34 1.82-6.27 2.75-8.73 0.93-2.46 2.87-6.29 6.93-12.52l-10.24-13.62 4.41-4.44c2.42-2.44 4.9-4.44 5.5-4.44 0.6 0 3.68 2.03 12.59 9l8.25-3.97c4.54-2.18 10.5-4.44 18.25-6.06l0.81-6.23c0.45-3.43 1.07-7.27 1.39-8.53 0.53-2.14 1.01-2.28 13.72-1.71zm-27.92 35.22c-2.2 1.13-6.41 4.24-9.36 6.91-2.95 2.68-6.62 7.12-8.16 9.87-1.54 2.75-3.58 7.7-4.52 11-1.21 4.26-1.6 8.47-1.32 14.5 0.34 7.42 0.89 9.52 4.3 16.5 2.53 5.19 5.71 9.76 9.03 13 2.82 2.75 7.58 6.18 10.58 7.62 3 1.44 7.93 3.19 10.95 3.89 3.32 0.77 8.68 1.07 13.5 0.76 6.15-0.4 9.62-1.26 15-3.74 4.71-2.17 8.82-5.07 12.57-8.88 3.18-3.22 6.94-8.44 8.75-12.15 1.74-3.57 3.54-9.2 4-12.5 0.46-3.3 0.46-9.15 0-13-0.49-4.09-2.01-9.5-3.66-13-1.56-3.3-5.27-8.63-8.25-11.85-3.83-4.15-7.58-6.92-12.86-9.5-6.97-3.42-8.12-3.67-18-3.89-6.68-0.15-12.02 0.25-14.55 1.09-2.2 0.73-5.8 2.24-8 3.37z'
						/>
					</svg> */}
				</div>
			</div>
			<div className={mobileStyles['mobile-webdesign']}>
				<h3>Web Design</h3>
				<div className={mobileStyles['design-graphics']}>
					<div className={mobileStyles.palettes}>
						<div className={mobileStyles.palette1}>
							{Array.from({ length: 5 }).map((_, index) => (
								<div
									key={index}
									className={mobileStyles.pantone}
									style={{
										backgroundColor: `hsl(${280 - index * 15}, 0%, ${
											50 + index * 10
										}%)`,
									}}
								></div>
							))}
						</div>
						<div className={mobileStyles.palette2}>
							{Array.from({ length: 5 }).map((_, index) => (
								<div
									key={index}
									className={mobileStyles.pantone}
									style={{
										backgroundColor: `hsl(${200 + index * 20}, 0%, ${
											30 - index * 5
										}%)`,
									}}
								></div>
							))}
						</div>
						<div className={mobileStyles.palette3}>
							{Array.from({ length: 5 }).map((_, index) => (
								<div
									key={index}
									className={mobileStyles.pantone}
									style={{
										backgroundColor: `hsl(var(--hue), 100%, ${
											80 - index * 15
										}%)`,
									}}
								></div>
							))}
						</div>
					</div>

					<div className={mobileStyles.rectangle}>
						<div className={mobileStyles['icon-box']}>
							<ContentCut className={mobileStyles.icon} />
						</div>
						<div className={mobileStyles.letters} aria-hidden='true'>
							<span className={mobileStyles.letter1}>A</span>
							<span className={mobileStyles.letter2}>A</span>
							<span className={mobileStyles.letter3}>A</span>
						</div>
					</div>
					<div className={mobileStyles['triangle-box']}>
						<svg
							version='1.2'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 150 120'
							width='100%'
							height='100%'
						>
							<path d='M25,100 L135,25 L135,100 Z' />
						</svg>
					</div>
				</div>
				<div className={mobileStyles['text-content']}>
					<p>
						Our design process emphasizes collaboration to understand your brand
						and goals, ensuring every detail reflects your vision.
					</p>
					<p>
						From wireframes to final mockups, we prioritize{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							usability
						</span>
						,{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							accessibility
						</span>
						, and{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							modern aesthetics
						</span>{' '}
						to deliver a beautiful final product.
					</p>
					<ul className={mobileStyles.bullets}>
						<li className={mobileStyles.bullet}>
							<p aria-hidden='true' className={mobileStyles.arrow}>
								&rarr;
							</p>
							<p>Clear communication from start to launch</p>
						</li>
						<li className={mobileStyles.bullet}>
							<p aria-hidden='true' className={mobileStyles.arrow}>
								&rarr;
							</p>
							<p>Modern, accessible, and engaging design</p>
						</li>
						<li className={mobileStyles.bullet}>
							<p aria-hidden='true' className={mobileStyles.arrow}>
								&rarr;
							</p>
							<p>Brand-focused, goal-driven results</p>
						</li>
					</ul>
					<div className={mobileStyles.cta}>
						<Link href='/development'>
							<span className={mobileStyles.link}>Learn More</span>
							{/* <span className={mobileStyles.arrow}>&rarr;</span> */}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WebDev;
