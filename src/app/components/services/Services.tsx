'use client';

// Library imports
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Styles imports
import styles from './services.module.scss';

// MUI imports
import { ContentCut, Email, LocalPhone } from '@mui/icons-material';

//React-Icons imports
import { FaReact, FaSass } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { IoChatboxOutline } from 'react-icons/io5';
import { MdShowChart } from 'react-icons/md';

// Component imports
import RGBLogo from '../RGBLogo/RGBLogo';

function Services({ id }: { id: string }) {
	const [activeDot, setActiveDot] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveDot((prev) => (prev + 1) % 4); // 0: none, 1: dot1, 2: dot2, 3: dot3
		}, 650);
		return () => clearInterval(interval);
	}, []);

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
						<h3>Web Development & Design</h3>
						<div className={styles.content}>
							<div className={styles.graphics}>
								<div className={styles['development-graphics-container']}>
									<div className={styles.gear1}>
										<svg
											version='1.2'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 151 151'
											width='70'
											height='70'
											className={styles.image}
										>
											<path
												id='Path 0'
												fillRule='evenodd'
												className='s0'
												d='m82.42 0.5l0.68 3.5c0.37 1.92 0.95 5.64 1.9 13l5.25 1.06c2.89 0.58 8.74 2.83 20.75 8.94l5.25-3.81c2.89-2.1 5.92-4.18 6.75-4.61 1.07-0.57 2.85 0.59 10.92 8.92l-9.92 12.5 3.92 7.75c2.16 4.26 4.48 10 5.15 12.75 0.67 2.75 1.43 5.22 1.67 5.5 0.25 0.28 3.9 0.95 15.76 2.52v13.96l-7.65 1.01c-4.21 0.56-7.87 1.23-8.13 1.51-0.26 0.28-1.24 3.2-2.18 6.5-0.94 3.3-3.31 8.92-8.82 19l3.96 5.5c2.17 3.03 4.31 6.17 4.74 7 0.57 1.06-0.48 2.75-3.56 5.76-2.4 2.35-4.7 4.26-5.11 4.25-0.41 0-3.56-2.09-13.25-9.27l-8 4.07c-4.4 2.24-9.58 4.35-11.5 4.68-1.92 0.34-4.17 1.03-5 1.54-0.96 0.59-1.87 3.74-3.52 16.47h-13.98l-1-7.89q-1-7.89-2.5-8.64c-0.83-0.4-4.65-1.69-8.5-2.86-3.85-1.17-9.02-3.4-16-7.8l-13 9.68-4.5-4.21c-2.48-2.31-4.61-4.56-4.75-4.99-0.14-0.44 1.77-3.49 4.25-6.79 2.48-3.3 4.5-6.45 4.5-7 0-0.55-1.19-2.91-2.65-5.25-1.45-2.34-3.82-7.92-7.85-20.56l-6-0.65c-3.3-0.37-7.01-0.86-8.25-1.1-2.1-0.41-2.23-0.89-1.75-13.9l5-0.77c2.75-0.42 6.46-1 8.25-1.27 2.86-0.44 3.38-1.02 4.31-4.75 0.58-2.34 1.82-6.27 2.75-8.73 0.93-2.46 2.87-6.29 6.93-12.52l-10.24-13.62 4.41-4.44c2.42-2.44 4.9-4.44 5.5-4.44 0.6 0 3.68 2.03 12.59 9l8.25-3.97c4.54-2.18 10.5-4.44 18.25-6.06l0.81-6.23c0.45-3.43 1.07-7.27 1.39-8.53 0.53-2.14 1.01-2.28 13.72-1.71zm-27.92 35.22c-2.2 1.13-6.41 4.24-9.36 6.91-2.95 2.68-6.62 7.12-8.16 9.87-1.54 2.75-3.58 7.7-4.52 11-1.21 4.26-1.6 8.47-1.32 14.5 0.34 7.42 0.89 9.52 4.3 16.5 2.53 5.19 5.71 9.76 9.03 13 2.82 2.75 7.58 6.18 10.58 7.62 3 1.44 7.93 3.19 10.95 3.89 3.32 0.77 8.68 1.07 13.5 0.76 6.15-0.4 9.62-1.26 15-3.74 4.71-2.17 8.82-5.07 12.57-8.88 3.18-3.22 6.94-8.44 8.75-12.15 1.74-3.57 3.54-9.2 4-12.5 0.46-3.3 0.46-9.15 0-13-0.49-4.09-2.01-9.5-3.66-13-1.56-3.3-5.27-8.63-8.25-11.85-3.83-4.15-7.58-6.92-12.86-9.5-6.97-3.42-8.12-3.67-18-3.89-6.68-0.15-12.02 0.25-14.55 1.09-2.2 0.73-5.8 2.24-8 3.37z'
											/>
										</svg>
									</div>
									<div className={styles.gear2}>
										<svg
											version='1.2'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 151 151'
											width='70'
											height='70'
											className={styles.image}
										>
											<path
												id='Path 0'
												fillRule='evenodd'
												className='s0'
												d='m82.42 0.5l0.68 3.5c0.37 1.92 0.95 5.64 1.9 13l5.25 1.06c2.89 0.58 8.74 2.83 20.75 8.94l5.25-3.81c2.89-2.1 5.92-4.18 6.75-4.61 1.07-0.57 2.85 0.59 10.92 8.92l-9.92 12.5 3.92 7.75c2.16 4.26 4.48 10 5.15 12.75 0.67 2.75 1.43 5.22 1.67 5.5 0.25 0.28 3.9 0.95 15.76 2.52v13.96l-7.65 1.01c-4.21 0.56-7.87 1.23-8.13 1.51-0.26 0.28-1.24 3.2-2.18 6.5-0.94 3.3-3.31 8.92-8.82 19l3.96 5.5c2.17 3.03 4.31 6.17 4.74 7 0.57 1.06-0.48 2.75-3.56 5.76-2.4 2.35-4.7 4.26-5.11 4.25-0.41 0-3.56-2.09-13.25-9.27l-8 4.07c-4.4 2.24-9.58 4.35-11.5 4.68-1.92 0.34-4.17 1.03-5 1.54-0.96 0.59-1.87 3.74-3.52 16.47h-13.98l-1-7.89q-1-7.89-2.5-8.64c-0.83-0.4-4.65-1.69-8.5-2.86-3.85-1.17-9.02-3.4-16-7.8l-13 9.68-4.5-4.21c-2.48-2.31-4.61-4.56-4.75-4.99-0.14-0.44 1.77-3.49 4.25-6.79 2.48-3.3 4.5-6.45 4.5-7 0-0.55-1.19-2.91-2.65-5.25-1.45-2.34-3.82-7.92-7.85-20.56l-6-0.65c-3.3-0.37-7.01-0.86-8.25-1.1-2.1-0.41-2.23-0.89-1.75-13.9l5-0.77c2.75-0.42 6.46-1 8.25-1.27 2.86-0.44 3.38-1.02 4.31-4.75 0.58-2.34 1.82-6.27 2.75-8.73 0.93-2.46 2.87-6.29 6.93-12.52l-10.24-13.62 4.41-4.44c2.42-2.44 4.9-4.44 5.5-4.44 0.6 0 3.68 2.03 12.59 9l8.25-3.97c4.54-2.18 10.5-4.44 18.25-6.06l0.81-6.23c0.45-3.43 1.07-7.27 1.39-8.53 0.53-2.14 1.01-2.28 13.72-1.71zm-27.92 35.22c-2.2 1.13-6.41 4.24-9.36 6.91-2.95 2.68-6.62 7.12-8.16 9.87-1.54 2.75-3.58 7.7-4.52 11-1.21 4.26-1.6 8.47-1.32 14.5 0.34 7.42 0.89 9.52 4.3 16.5 2.53 5.19 5.71 9.76 9.03 13 2.82 2.75 7.58 6.18 10.58 7.62 3 1.44 7.93 3.19 10.95 3.89 3.32 0.77 8.68 1.07 13.5 0.76 6.15-0.4 9.62-1.26 15-3.74 4.71-2.17 8.82-5.07 12.57-8.88 3.18-3.22 6.94-8.44 8.75-12.15 1.74-3.57 3.54-9.2 4-12.5 0.46-3.3 0.46-9.15 0-13-0.49-4.09-2.01-9.5-3.66-13-1.56-3.3-5.27-8.63-8.25-11.85-3.83-4.15-7.58-6.92-12.86-9.5-6.97-3.42-8.12-3.67-18-3.89-6.68-0.15-12.02 0.25-14.55 1.09-2.2 0.73-5.8 2.24-8 3.37z'
											/>
										</svg>
									</div>
									<div className={styles.gear3}>
										<svg
											version='1.2'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 151 151'
											width='70'
											height='70'
											className={styles.image}
										>
											<path
												id='Path 0'
												fillRule='evenodd'
												className='s0'
												d='m82.42 0.5l0.68 3.5c0.37 1.92 0.95 5.64 1.9 13l5.25 1.06c2.89 0.58 8.74 2.83 20.75 8.94l5.25-3.81c2.89-2.1 5.92-4.18 6.75-4.61 1.07-0.57 2.85 0.59 10.92 8.92l-9.92 12.5 3.92 7.75c2.16 4.26 4.48 10 5.15 12.75 0.67 2.75 1.43 5.22 1.67 5.5 0.25 0.28 3.9 0.95 15.76 2.52v13.96l-7.65 1.01c-4.21 0.56-7.87 1.23-8.13 1.51-0.26 0.28-1.24 3.2-2.18 6.5-0.94 3.3-3.31 8.92-8.82 19l3.96 5.5c2.17 3.03 4.31 6.17 4.74 7 0.57 1.06-0.48 2.75-3.56 5.76-2.4 2.35-4.7 4.26-5.11 4.25-0.41 0-3.56-2.09-13.25-9.27l-8 4.07c-4.4 2.24-9.58 4.35-11.5 4.68-1.92 0.34-4.17 1.03-5 1.54-0.96 0.59-1.87 3.74-3.52 16.47h-13.98l-1-7.89q-1-7.89-2.5-8.64c-0.83-0.4-4.65-1.69-8.5-2.86-3.85-1.17-9.02-3.4-16-7.8l-13 9.68-4.5-4.21c-2.48-2.31-4.61-4.56-4.75-4.99-0.14-0.44 1.77-3.49 4.25-6.79 2.48-3.3 4.5-6.45 4.5-7 0-0.55-1.19-2.91-2.65-5.25-1.45-2.34-3.82-7.92-7.85-20.56l-6-0.65c-3.3-0.37-7.01-0.86-8.25-1.1-2.1-0.41-2.23-0.89-1.75-13.9l5-0.77c2.75-0.42 6.46-1 8.25-1.27 2.86-0.44 3.38-1.02 4.31-4.75 0.58-2.34 1.82-6.27 2.75-8.73 0.93-2.46 2.87-6.29 6.93-12.52l-10.24-13.62 4.41-4.44c2.42-2.44 4.9-4.44 5.5-4.44 0.6 0 3.68 2.03 12.59 9l8.25-3.97c4.54-2.18 10.5-4.44 18.25-6.06l0.81-6.23c0.45-3.43 1.07-7.27 1.39-8.53 0.53-2.14 1.01-2.28 13.72-1.71zm-27.92 35.22c-2.2 1.13-6.41 4.24-9.36 6.91-2.95 2.68-6.62 7.12-8.16 9.87-1.54 2.75-3.58 7.7-4.52 11-1.21 4.26-1.6 8.47-1.32 14.5 0.34 7.42 0.89 9.52 4.3 16.5 2.53 5.19 5.71 9.76 9.03 13 2.82 2.75 7.58 6.18 10.58 7.62 3 1.44 7.93 3.19 10.95 3.89 3.32 0.77 8.68 1.07 13.5 0.76 6.15-0.4 9.62-1.26 15-3.74 4.71-2.17 8.82-5.07 12.57-8.88 3.18-3.22 6.94-8.44 8.75-12.15 1.74-3.57 3.54-9.2 4-12.5 0.46-3.3 0.46-9.15 0-13-0.49-4.09-2.01-9.5-3.66-13-1.56-3.3-5.27-8.63-8.25-11.85-3.83-4.15-7.58-6.92-12.86-9.5-6.97-3.42-8.12-3.67-18-3.89-6.68-0.15-12.02 0.25-14.55 1.09-2.2 0.73-5.8 2.24-8 3.37z'
											/>
										</svg>
									</div>
									<div className={styles.gear4}>
										<svg
											version='1.2'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 151 151'
											width='70'
											height='70'
											className={styles.image}
										>
											<path
												id='Path 0'
												fillRule='evenodd'
												className='s0'
												d='m82.42 0.5l0.68 3.5c0.37 1.92 0.95 5.64 1.9 13l5.25 1.06c2.89 0.58 8.74 2.83 20.75 8.94l5.25-3.81c2.89-2.1 5.92-4.18 6.75-4.61 1.07-0.57 2.85 0.59 10.92 8.92l-9.92 12.5 3.92 7.75c2.16 4.26 4.48 10 5.15 12.75 0.67 2.75 1.43 5.22 1.67 5.5 0.25 0.28 3.9 0.95 15.76 2.52v13.96l-7.65 1.01c-4.21 0.56-7.87 1.23-8.13 1.51-0.26 0.28-1.24 3.2-2.18 6.5-0.94 3.3-3.31 8.92-8.82 19l3.96 5.5c2.17 3.03 4.31 6.17 4.74 7 0.57 1.06-0.48 2.75-3.56 5.76-2.4 2.35-4.7 4.26-5.11 4.25-0.41 0-3.56-2.09-13.25-9.27l-8 4.07c-4.4 2.24-9.58 4.35-11.5 4.68-1.92 0.34-4.17 1.03-5 1.54-0.96 0.59-1.87 3.74-3.52 16.47h-13.98l-1-7.89q-1-7.89-2.5-8.64c-0.83-0.4-4.65-1.69-8.5-2.86-3.85-1.17-9.02-3.4-16-7.8l-13 9.68-4.5-4.21c-2.48-2.31-4.61-4.56-4.75-4.99-0.14-0.44 1.77-3.49 4.25-6.79 2.48-3.3 4.5-6.45 4.5-7 0-0.55-1.19-2.91-2.65-5.25-1.45-2.34-3.82-7.92-7.85-20.56l-6-0.65c-3.3-0.37-7.01-0.86-8.25-1.1-2.1-0.41-2.23-0.89-1.75-13.9l5-0.77c2.75-0.42 6.46-1 8.25-1.27 2.86-0.44 3.38-1.02 4.31-4.75 0.58-2.34 1.82-6.27 2.75-8.73 0.93-2.46 2.87-6.29 6.93-12.52l-10.24-13.62 4.41-4.44c2.42-2.44 4.9-4.44 5.5-4.44 0.6 0 3.68 2.03 12.59 9l8.25-3.97c4.54-2.18 10.5-4.44 18.25-6.06l0.81-6.23c0.45-3.43 1.07-7.27 1.39-8.53 0.53-2.14 1.01-2.28 13.72-1.71zm-27.92 35.22c-2.2 1.13-6.41 4.24-9.36 6.91-2.95 2.68-6.62 7.12-8.16 9.87-1.54 2.75-3.58 7.7-4.52 11-1.21 4.26-1.6 8.47-1.32 14.5 0.34 7.42 0.89 9.52 4.3 16.5 2.53 5.19 5.71 9.76 9.03 13 2.82 2.75 7.58 6.18 10.58 7.62 3 1.44 7.93 3.19 10.95 3.89 3.32 0.77 8.68 1.07 13.5 0.76 6.15-0.4 9.62-1.26 15-3.74 4.71-2.17 8.82-5.07 12.57-8.88 3.18-3.22 6.94-8.44 8.75-12.15 1.74-3.57 3.54-9.2 4-12.5 0.46-3.3 0.46-9.15 0-13-0.49-4.09-2.01-9.5-3.66-13-1.56-3.3-5.27-8.63-8.25-11.85-3.83-4.15-7.58-6.92-12.86-9.5-6.97-3.42-8.12-3.67-18-3.89-6.68-0.15-12.02 0.25-14.55 1.09-2.2 0.73-5.8 2.24-8 3.37z'
											/>
										</svg>
									</div>
									<div className={styles.gear5}>
										<svg
											version='1.2'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 151 151'
											width='70'
											height='70'
											className={styles.image}
										>
											<path
												id='Path 0'
												fillRule='evenodd'
												className='s0'
												d='m82.42 0.5l0.68 3.5c0.37 1.92 0.95 5.64 1.9 13l5.25 1.06c2.89 0.58 8.74 2.83 20.75 8.94l5.25-3.81c2.89-2.1 5.92-4.18 6.75-4.61 1.07-0.57 2.85 0.59 10.92 8.92l-9.92 12.5 3.92 7.75c2.16 4.26 4.48 10 5.15 12.75 0.67 2.75 1.43 5.22 1.67 5.5 0.25 0.28 3.9 0.95 15.76 2.52v13.96l-7.65 1.01c-4.21 0.56-7.87 1.23-8.13 1.51-0.26 0.28-1.24 3.2-2.18 6.5-0.94 3.3-3.31 8.92-8.82 19l3.96 5.5c2.17 3.03 4.31 6.17 4.74 7 0.57 1.06-0.48 2.75-3.56 5.76-2.4 2.35-4.7 4.26-5.11 4.25-0.41 0-3.56-2.09-13.25-9.27l-8 4.07c-4.4 2.24-9.58 4.35-11.5 4.68-1.92 0.34-4.17 1.03-5 1.54-0.96 0.59-1.87 3.74-3.52 16.47h-13.98l-1-7.89q-1-7.89-2.5-8.64c-0.83-0.4-4.65-1.69-8.5-2.86-3.85-1.17-9.02-3.4-16-7.8l-13 9.68-4.5-4.21c-2.48-2.31-4.61-4.56-4.75-4.99-0.14-0.44 1.77-3.49 4.25-6.79 2.48-3.3 4.5-6.45 4.5-7 0-0.55-1.19-2.91-2.65-5.25-1.45-2.34-3.82-7.92-7.85-20.56l-6-0.65c-3.3-0.37-7.01-0.86-8.25-1.1-2.1-0.41-2.23-0.89-1.75-13.9l5-0.77c2.75-0.42 6.46-1 8.25-1.27 2.86-0.44 3.38-1.02 4.31-4.75 0.58-2.34 1.82-6.27 2.75-8.73 0.93-2.46 2.87-6.29 6.93-12.52l-10.24-13.62 4.41-4.44c2.42-2.44 4.9-4.44 5.5-4.44 0.6 0 3.68 2.03 12.59 9l8.25-3.97c4.54-2.18 10.5-4.44 18.25-6.06l0.81-6.23c0.45-3.43 1.07-7.27 1.39-8.53 0.53-2.14 1.01-2.28 13.72-1.71zm-27.92 35.22c-2.2 1.13-6.41 4.24-9.36 6.91-2.95 2.68-6.62 7.12-8.16 9.87-1.54 2.75-3.58 7.7-4.52 11-1.21 4.26-1.6 8.47-1.32 14.5 0.34 7.42 0.89 9.52 4.3 16.5 2.53 5.19 5.71 9.76 9.03 13 2.82 2.75 7.58 6.18 10.58 7.62 3 1.44 7.93 3.19 10.95 3.89 3.32 0.77 8.68 1.07 13.5 0.76 6.15-0.4 9.62-1.26 15-3.74 4.71-2.17 8.82-5.07 12.57-8.88 3.18-3.22 6.94-8.44 8.75-12.15 1.74-3.57 3.54-9.2 4-12.5 0.46-3.3 0.46-9.15 0-13-0.49-4.09-2.01-9.5-3.66-13-1.56-3.3-5.27-8.63-8.25-11.85-3.83-4.15-7.58-6.92-12.86-9.5-6.97-3.42-8.12-3.67-18-3.89-6.68-0.15-12.02 0.25-14.55 1.09-2.2 0.73-5.8 2.24-8 3.37z'
											/>
										</svg>
									</div>
									<div className={styles.development}>
										<div className={styles.desktop}>
											<div className={styles.monitor}>
												<div className={styles.screen}>
													<div className={styles.navbar}>
														<div className={styles.logo}>
															<Image
																src='/logo.svg'
																alt='Logo Image'
																width={9}
																height={9}
															/>
														</div>
														<div className={styles.brand}>
															Retcon Consulting
														</div>
														<div className={styles.burger}>
															<div className={styles.line}></div>
														</div>
													</div>
													<div className={styles.bg}>
														<RGBLogo />
													</div>
												</div>
											</div>
											<div className={styles.base}>
												<div className={styles.stand}></div>
												<div className={styles.platform}></div>
											</div>
										</div>

										<div className={styles.tablet}>
											<div className={styles.screen}>
												<div className={styles.navbar}>
													<div className={styles.logo}>
														<Image
															src='/logo.svg'
															alt='Logo Image'
															width={9}
															height={9}
														/>
													</div>
													<div className={styles.brand}>Retcon Consulting</div>
													<div className={styles.burger}>
														<div className={styles.line}></div>
													</div>
												</div>
												<div className={styles.bg}>
													<RGBLogo />
												</div>
											</div>
										</div>

										<div className={styles.mobile}>
											<div className={styles.screen}>
												<div className={styles.navbar}>
													<div className={styles.logo}>
														<Image
															src='/logo.svg'
															alt='Logo Image'
															width={8}
															height={8}
														/>
													</div>
													<div className={styles.brand}>Retcon Consulting</div>
													<div className={styles.burger}>
														<div className={styles.line}></div>
													</div>
												</div>
												<div className={styles.bg}>
													<RGBLogo />
												</div>
											</div>
										</div>

										<div className={styles.code}>{`</>`}</div>
									</div>
									<div className={styles.design}>
										<div className={styles.palette1}>
											{Array.from({ length: 5 }).map((_, index) => (
												<div
													key={index}
													className={styles.pantone}
													style={{
														backgroundColor: `hsl(${280 - index * 15}, 0%, ${
															50 + index * 10
														}%)`,
													}}
												></div>
											))}
										</div>
										<div className={styles.palette2}>
											{Array.from({ length: 5 }).map((_, index) => (
												<div
													key={index}
													className={styles.pantone}
													style={{
														backgroundColor: `hsl(${200 + index * 20}, 0%, ${
															30 - index * 5
														}%)`,
													}}
												></div>
											))}
										</div>
										{/* <div className={styles.palette1}>
										{Array.from({ length: 5 }).map((_, index) => (
											<div
												key={index}
												className={styles.pantone}
												style={{
													backgroundColor: `hsl(${280 - index * 15}, 100%, ${
														50 + index * 10
													}%)`,
												}}
											></div>
										))}
									</div>
									<div className={styles.palette2}>
										{Array.from({ length: 5 }).map((_, index) => (
											<div
												key={index}
												className={styles.pantone}
												style={{
													backgroundColor: `hsl(${200 + index * 20}, 100%, ${
														50 - index * 5
													}%)`,
												}}
											></div>
										))}
									</div> */}
										<div className={styles.palette3}>
											{Array.from({ length: 5 }).map((_, index) => (
												<div
													key={index}
													className={styles.pantone}
													style={{
														backgroundColor: `hsl(var(--hue), 100%, ${
															80 - index * 15
														}%)`,
													}}
												></div>
											))}
										</div>
										<div className={styles.rectangle}>
											<div className={styles['icon-box']}>
												<ContentCut className={styles.icon} />
											</div>
											<div className={styles.letters} aria-hidden='true'>
												<span className={styles.letter1}>A</span>
												<span className={styles.letter2}>A</span>
												<span className={styles.letter3}>A</span>
											</div>
										</div>
										<div className={styles['triangle-box']}>
											<svg
												version='1.2'
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 150 120'
												width='150'
												height='120'
											>
												<path d='M25,100 L135,25 L135,100 Z' />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className={styles.text}>
								<div className={styles['text-content']}>
									<h4>Web Development</h4>
									<p>
										We build responsive and modern websites tailored to your
										business needs. Leveraging trusted frameworks like{' '}
										<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
											React
										</span>
										,{' '}
										<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
											Next.js
										</span>
										, and other modern technologies, we ensure your online
										presence is{' '}
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
										interfaces that engage your audience. Our development
										process emphasizes performance, accessibility, and SEO best
										practices to help your website stand out in the digital
										landscape.
									</p>

									<div className={styles.icons}>
										<FaReact className={`${styles.icon} ${styles.react}`} />

										<RiNextjsFill className={`${styles.icon} ${styles.next}`} />

										<FaSass
											className={`${styles.icon} ${styles.sass}`}
											title='Sass'
										/>
										<AiOutlineHtml5
											className={`${styles.icon} ${styles.html}`}
										/>
									</div>
								</div>
								<div className={styles['text-content']}>
									<h4>Design</h4>
									<p>
										Our design process focuses on closely collaborating with our
										clients to understand their brand and goals, ensuring every
										detail is tailored to their unique needs. From wireframes
										and prototypes to final mockups, we prioritize{' '}
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
											<p>
												Strong communication and collaboration from wireframe to
												launch
											</p>
										</li>
										<li className={styles.bullet}>
											<p aria-hidden='true' className={styles.arrow}>
												&rarr;
											</p>
											<p>
												Modern design that's accessible, user-friendly, and
												engaging
											</p>
										</li>
										<li className={styles.bullet}>
											<p aria-hidden='true' className={styles.arrow}>
												&rarr;
											</p>
											<p>Brand-focused, goal-driven design</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className={styles.cta}>
							<Link href='/consulting'>
								<span className={styles.link}>Learn More</span>
								{/* <span className={styles.arrow}>&rarr;</span> */}
							</Link>
						</div>
					</div>
				</div>

				{/* Consulting */}
				<div className={styles['content-wrapper']}>
					<div className={styles['content-container']}>
						<h3>Strategic Consulting</h3>
						<div className={styles.content}>
							<div className={styles.text}>
								<div className={styles['text-content']}>
									<h4>Product-Market Fit</h4>
									<p>
										Brand changes, new products, shifting markets...{' '}
										<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
											disruption happens
										</span>
										. The right product-market fit is the difference between a
										launch that stalls and a{' '}
										<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
											launch that soars
										</span>
										.
									</p>
									<ul className={styles.bullets}>
										<li className={styles.bullet}>
											<p aria-hidden='true' className={styles.arrow}>
												&rarr;
											</p>
											<p>
												We help uncover customer needs, validate assumptions,
												and position your brand with{' '}
												<span
													style={{ fontWeight: 'bold', color: 'var(--gray1)' }}
												>
													structure
												</span>
												,{' '}
												<span
													style={{ fontWeight: 'bold', color: 'var(--gray1)' }}
												>
													insight
												</span>
												, and{' '}
												<span
													style={{ fontWeight: 'bold', color: 'var(--gray1)' }}
												>
													clarity
												</span>
												.
											</p>
										</li>
										<li className={styles.bullet}>
											<p aria-hidden='true' className={styles.arrow}>
												&rarr;
											</p>
											<p>
												We&apos;ll guide you through{' '}
												<span
													style={{ fontWeight: 'bold', color: 'var(--gray1)' }}
												>
													pivots
												</span>
												,{' '}
												<span
													style={{ fontWeight: 'bold', color: 'var(--gray1)' }}
												>
													refinements
												</span>
												, and{' '}
												<span
													style={{ fontWeight: 'bold', color: 'var(--gray1)' }}
												>
													market entries
												</span>{' '}
												so your next move is grounded in confidence.
											</p>
										</li>
									</ul>
									{/* <p>
										Changes to your brand, new product introduction, and
										evolving market conditions can be disruptive to your
										business, but they don&apos;t have to slow your momentum.
										Finding the right product-market fit is often the
										differentiator between a launch that stalls and a{' '}
										<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
											launch that soars
										</span>
										.
									</p>
									<p>
										Our team will work with you to uncover real customer needs
										and position your brand where it will have the greatest
										impact. Whether you&apos;re pivoting, refining, or entering
										a new market, we&apos;ll bring{' '}
										<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
											structure
										</span>
										,{' '}
										<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
											insight
										</span>
										, and{' '}
										<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
											clarity
										</span>{' '}
										to the process so you can move forward with confidence.
									</p> */}
								</div>
								<div className={styles['text-content']}>
									<h4>Go-to-Market Strategy</h4>
									<p>
										With a combined{' '}
										<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
											20+ years of experience
										</span>{' '}
										in SaaS consulting and sales for startups through large
										enterprises, our team is well versed in the nuances of
										market entry and expansion.
									</p>
									{/* <p>
										<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
											20+ years
										</span>{' '}
										in SaaS consulting and sales means we know what it takes to
										enter and expand.
									</p> */}
									<ul className={styles.bullets}>
										<li className={styles.bullet}>
											<p aria-hidden='true' className={styles.arrow}>
												&rarr;
											</p>
											<p>
												We build{' '}
												<span
													style={{ fontWeight: 'bold', color: 'var(--gray1)' }}
												>
													sales processes
												</span>
												,{' '}
												<span
													style={{ fontWeight: 'bold', color: 'var(--gray1)' }}
												>
													outreach cadences
												</span>
												, and{' '}
												<span
													style={{ fontWeight: 'bold', color: 'var(--gray1)' }}
												>
													GTM playbooks
												</span>{' '}
												{/* <span
													style={{ fontWeight: 'bold', color: 'var(--gray1)' }}
												>
													sales processes
												</span>
												,{' '}
												<span
													style={{ fontWeight: 'bold', color: 'var(--gray1)' }}
												>
													outreach cadences
												</span>
												, and{' '}
												<span
													style={{ fontWeight: 'bold', color: 'var(--gray1)' }}
												>
													GTM strategies
												</span>{' '} */}
												that connect with your audience and{' '}
												<span
													style={{ fontWeight: 'bold', color: 'var(--gray1)' }}
												>
													drive growth
												</span>
												.
											</p>
										</li>
										<li className={styles.bullet}>
											<p aria-hidden='true' className={styles.arrow}>
												&rarr;
											</p>
											<p>
												We align sales and marketing efforts to create a{' '}
												<span
													style={{ fontWeight: 'bold', color: 'var(--gray1)' }}
												>
													clear
												</span>
												,{' '}
												<span
													style={{ fontWeight: 'bold', color: 'var(--gray1)' }}
												>
													repeatable
												</span>{' '}
												path from first touch to closed deal.
											</p>
										</li>
									</ul>

									{/* <p>
										With a combined{' '}
										<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
											20+ years of experience
										</span>{' '}
										in SaaS consulting and sales for startups through large
										enterprises, our team is well versed in the nuances of
										market entry and expansion.
									</p>
									<p>
										We can assist with building{' '}
										<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
											sales processes
										</span>
										,{' '}
										<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
											outreach cadences
										</span>
										, and developing effective{' '}
										<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
											go-to-market strategies
										</span>{' '}
										that resonate with your target audience and drive more sales
										and engagement.
									</p> */}
								</div>
							</div>
							<div className={styles.graphics}>
								<div className={styles['consulting-graphics-container']}>
									{/* <div className={styles.compass}>
										<div className={styles['compass-inner']}>
											<svg
												version='1.2'
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 512 512'
												width='512'
												height='512'
												className={styles['compass-body']}
											>
												<path
													id='Path 0'
													className='s0'
													d='m193 25.25c-4.13 1.15-7.65 2.13-7.84 2.17-0.18 0.04 2.2 9.75 5.29 21.58 3.09 11.83 5.27 21.76 4.84 22.09-0.44 0.32-4.39 1.87-8.79 3.44-4.4 1.57-12.95 5.36-19 8.42-6.05 3.06-14.82 8.12-19.5 11.25-4.68 3.13-11.15 7.85-14.39 10.5-3.24 2.64-6.5 5.25-7.24 5.8-1.04 0.76-5.01-2.65-16.62-14.25-8.39-8.38-15.62-15.24-16.07-15.25-0.46 0-3.72 2.81-7.26 6.25l-6.44 6.25 31.52 31.43c-5.03 5.87-9.82 12.07-13.89 17.57-4.08 5.5-10.04 14.73-13.26 20.51-3.22 5.77-7.82 15.45-10.22 21.5-2.41 6.04-4.43 11.12-4.5 11.28-0.07 0.16-8.9-2-19.63-4.81-10.72-2.81-20.29-5.3-21.25-5.54-1.46-0.37-2.13 1.06-4 8.54-1.24 4.94-2.02 9.16-1.75 9.36 0.28 0.21 9.5 2.75 20.5 5.66 11 2.9 20.23 5.4 20.5 5.55 0.28 0.16-0.32 4.93-1.33 10.62-1.31 7.42-1.87 15.97-1.98 30.33-0.12 14.95 0.29 22.78 1.62 31 0.97 6.05 1.64 11.04 1.48 11.09-0.16 0.04-9.29 2.47-20.29 5.39-11 2.93-20.23 5.48-20.5 5.69-0.27 0.2 0.51 4.41 1.75 9.35 1.24 4.94 2.36 8.98 2.5 8.98 0.14 0 9.47-2.46 20.75-5.47 11.28-3.01 20.6-5.37 20.73-5.25 0.12 0.12 2.61 6.07 5.52 13.22 2.92 7.15 7.49 16.82 10.17 21.5 2.67 4.68 7.3 12.1 10.28 16.5 2.98 4.4 5.23 8.45 4.99 9-0.23 0.55-10.39 18.55-22.58 40-12.19 21.45-22.15 39.11-22.13 39.25 0.01 0.14 0.58 0.24 1.27 0.23 0.69-0.01 18.57-9.9 39.75-21.97 21.18-12.08 38.95-21.98 39.5-22 0.55-0.03 5.5 2.94 11 6.59 5.5 3.66 14.5 8.92 20 11.71 5.5 2.78 14.28 6.7 19.5 8.71 7.85 3.01 9.44 3.98 9.18 5.57-0.18 1.05-2.54 10.12-5.25 20.16-2.71 10.04-4.93 18.59-4.93 19 0 0.41 3.93 1.78 8.75 3.03 4.81 1.26 9.01 1.93 9.34 1.5 0.32-0.43 2.93-9.55 5.8-20.28 2.87-10.73 5.31-19.65 5.42-19.83 0.1-0.18 5.37 0.46 11.69 1.42 8.01 1.22 16.96 1.71 29.5 1.64 13.07-0.07 21.15-0.65 29.5-2.1 6.32-1.09 11.73-1.62 12-1.16 0.27 0.45 2.98 9.89 6 20.98l5.5 20.15c4.65-1.07 8.7-2.12 12-3.03 5-1.37 5.94-1.97 5.66-3.61-0.19-1.08-2.58-10.28-5.31-20.46-2.73-10.18-4.78-18.95-4.54-19.5 0.23-0.55 4.41-2.52 9.3-4.37 4.89-1.85 12.71-5.32 17.39-7.7 4.68-2.39 13.23-7.47 19-11.29 5.77-3.82 13.65-9.65 17.5-12.96l7-6 31.5 31.32 13.5-13.5-31.33-31.5c7.74-9.3 13.14-16.73 17-22.5 3.86-5.77 9.41-15.45 12.33-21.5 2.93-6.05 6.6-14.5 8.16-18.78 1.56-4.29 3.29-7.77 3.84-7.75 0.55 0.02 10.23 2.48 21.5 5.47 11.27 2.98 20.73 5.18 21 4.88 0.27-0.3 1.51-4.32 2.75-8.93 1.24-4.62 1.91-8.57 1.5-8.78-0.41-0.22-10.09-2.92-21.5-6-11.41-3.09-20.86-5.61-21-5.62-0.14-0.01 0.4-3.49 1.2-7.75 1.02-5.46 1.44-15.1 1.44-32.74-0.01-19.39-0.38-26.79-1.67-33-0.92-4.4-1.56-8.09-1.44-8.2 0.12-0.1 9.67-2.74 21.22-5.86 11.55-3.11 21.34-5.84 21.75-6.05 0.41-0.21-0.26-4.16-1.5-8.78-1.24-4.61-2.48-8.63-2.75-8.94-0.27-0.3-9.73 1.91-21 4.91-11.27 3-20.95 5.64-21.5 5.86-0.55 0.22-2.74-3.96-4.87-9.27-2.13-5.32-6.21-14.17-9.07-19.67-2.87-5.5-7.99-14.16-11.38-19.25-3.4-5.09-6.52-9.24-6.93-9.23-0.41 0.01-7.27 11.55-15.25 25.63-7.98 14.09-14.89 26.34-15.37 27.23-0.6 1.12 0.38 4.58 3.13 11.12 2.2 5.22 5.17 14.22 6.59 20 1.43 5.78 3.11 15.45 3.74 21.5 0.63 6.05 0.85 14.82 0.48 19.5-0.36 4.68-1.35 12.55-2.2 17.5-0.86 4.95-2.89 13.05-4.53 18-1.64 4.95-4.55 12.38-6.46 16.5-1.92 4.13-6.46 12-10.09 17.5-4.34 6.58-10.4 13.77-17.7 21.02-6.1 6.06-14.69 13.4-19.09 16.32-4.4 2.91-12.05 7.27-17 9.69-4.95 2.42-13.27 5.78-18.5 7.48-5.23 1.7-13.55 3.82-18.5 4.71-5.8 1.04-14.51 1.62-24.5 1.61-11.92-0.01-17.81-0.5-25.5-2.13-5.5-1.16-14.05-3.53-19-5.27-4.95-1.73-10.69-4-12.75-5.04-2.06-1.04-3.73-2.23-3.71-2.64 0.02-0.41 25.88-15.37 57.47-33.25 31.58-17.87 57.44-32.95 57.46-33.5 0.01-0.55-12.01-13.04-26.72-27.75l-26.75-26.75c-114.12 114.31-147.46 147.05-147.72 146.5-0.27-0.55 23.14-42.4 52-93 28.86-50.6 52.67-92.9 52.9-94 0.31-1.44-1.4-3.83-6.1-8.5-3.59-3.57-6.7-6.28-6.91-6-0.2 0.28-15.18 26.49-33.27 58.26-18.1 31.77-33.12 57.77-33.4 57.77-0.28 0-1.96-3.39-3.75-7.52-1.79-4.13-4.4-11.45-5.8-16.26-1.41-4.81-3.25-13.25-4.1-18.75-1.13-7.3-1.4-14.06-0.99-25 0.34-9.35 1.28-18.2 2.49-23.5 1.07-4.68 3.17-12.1 4.68-16.5 1.5-4.4 4.47-11.49 6.6-15.75 2.13-4.26 5.52-10.34 7.54-13.5 2.01-3.16 6.22-8.9 9.35-12.75 3.12-3.85 9.05-10.15 13.16-14 4.11-3.85 10.82-9.32 14.9-12.15 4.08-2.83 11.58-7.22 16.67-9.75 5.09-2.53 13.19-5.92 18-7.53 4.81-1.61 12.12-3.65 16.25-4.54 4.12-0.9 14.25-1.89 22.5-2.21 11.58-0.45 17.51-0.19 26 1.14 6.05 0.95 15.27 3.09 20.5 4.75 5.23 1.66 12.31 4.32 15.75 5.91l6.25 2.88c41.88-23.64 54.11-30.95 54.2-31.5 0.1-0.55-4.3-4.01-9.76-7.69-5.47-3.68-14.89-9.15-20.94-12.15-6.05-3.01-14.49-6.75-18.75-8.31-6.67-2.46-7.67-3.13-7.2-4.85 0.3-1.1 2.94-10.77 5.87-21.5 2.92-10.72 5.04-19.8 4.7-20.18-0.34-0.37-4.44-1.62-9.12-2.77-4.68-1.16-8.58-1.98-8.67-1.83-0.1 0.16-2.8 10.08-6 22.05-3.25 12.13-6.27 21.58-6.83 21.34-0.55-0.23-6.18-1.23-12.5-2.23-8.13-1.28-16.63-1.79-29-1.73-10.63 0.06-21.62 0.72-28 1.7-5.78 0.88-10.73 1.36-11 1.06-0.28-0.3-3.02-9.85-6.1-21.23-3.75-13.88-6.06-20.74-7-20.85-0.77-0.1-4.78 0.77-8.9 1.92z'
												/>
											</svg>
											<svg
												version='1.2'
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 512 512'
												width='512'
												height='512'
												className={styles['compass-needle']}
											>
												<path
													id='Path 0'
													className='s0'
													d='m432 69.06c-11.27 6.53-30.18 17.37-42 24.09-11.82 6.73-37.02 21.04-56 31.81-18.98 10.77-57.11 32.39-84.74 48.06-27.63 15.66-50.13 28.99-50 29.62 0.13 0.63 12.73 13.34 27.99 28.25l27.75 27.11c111.99-111.46 144.61-143.64 144.75-143.41 0.14 0.22-22.07 39.67-49.35 87.66-27.28 47.99-50.94 89.5-52.57 92.25l-2.98 5c9.03 9.02 12.44 12.06 13.4 12.57 1.52 0.81 5.43-5.56 29.97-48.82 15.51-27.36 30.74-54.25 33.84-59.75 3.09-5.5 13.07-23.05 22.17-39 9.09-15.95 26.3-46.1 38.23-67 11.93-20.9 21.65-38.39 21.61-38.87-0.04-0.49-0.41-1-0.82-1.15-0.41-0.15-9.98 5.06-21.25 11.58z'
												/>
											</svg>
										</div>
									</div> */}
									<div className={styles['process-diagram']}>
										<div className={styles.map}>
											<div className={styles.start}>
												<div className={styles.lines}></div>
												<Email className={styles.icon} />
											</div>
											<div className={styles.chatbox}>
												<div className={styles.phone}>
													<div className={styles.lines}>
														<div className={styles.line}></div>
													</div>
													<LocalPhone className={styles.icon} />
												</div>
												<div className={styles.chat}>
													<div className={styles.ellipsis}>
														<span
															className={activeDot > 0 ? styles.visible : ''}
														></span>
														<span
															className={activeDot > 1 ? styles.visible : ''}
														></span>
														<span
															className={activeDot > 2 ? styles.visible : ''}
														></span>
													</div>
													<IoChatboxOutline className={styles.icon} />
												</div>
											</div>
											<div className={styles.desktop}>
												<div className={styles.monitor}>
													<div className={styles.screen}>
														<div className={styles.graph}>
															<MdShowChart className={styles.icon} />
														</div>
														<div className={styles.slide}>
															<div
																className={`${styles.lines} ${
																	activeDot > 0 ? styles.visible : ''
																}`}
															>
																<span></span>
																<span style={{ width: '80%' }}></span>
															</div>
															<div
																className={`${styles.lines} ${
																	activeDot > 1 ? styles.visible : ''
																}`}
															>
																<span></span>
																<span style={{ width: '60%' }}></span>
															</div>
															<div
																className={`${styles.lines} ${
																	activeDot > 2 ? styles.visible : ''
																}`}
															>
																<span></span>
																<span style={{ width: '70%' }}></span>
															</div>
														</div>
													</div>
												</div>
												<div className={styles.base}>
													<div className={styles.stand}></div>
													<div className={styles.platform}></div>
												</div>
											</div>
											<div className={styles.handshake}>
												<svg
													version='1.2'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 400 400'
													width='400'
													height='400'
												>
													<path
														id='Path 0'
														fillRule='evenodd'
														className='s0'
														d='m72.95 67.99c0.85 0 3.86 1.46 6.68 3.25 2.83 1.79 9.1 5.51 13.94 8.26 4.84 2.75 10.85 6.95 13.36 9.34 4.53 4.3 4.56 4.38 3.75 9-0.45 2.56-0.9 5.77-1 7.13-0.17 2.29 0.5 2.68 8.82 5.13 5.2 1.53 13.02 2.93 28 3.98l3.5-3.48c1.93-1.92 4.85-4 6.5-4.64 1.65-0.63 8.18-2.05 14.5-3.15 6.32-1.09 14.87-2.43 19-2.97 4.12-0.54 17.18-0.79 29-0.54 15.15 0.31 23.27 0.9 27.5 2.02 3.3 0.87 10.95 2.73 17 4.14 6.87 1.6 13.91 2.56 26.5 2.54l-0.62-5.25c-0.57-4.78-0.37-5.55 2.25-8.64 1.58-1.86 4.44-4.24 6.37-5.28 1.93-1.04 5.52-3.19 8-4.78 2.48-1.58 7.65-4.74 11.5-7 3.85-2.27 7.79-4.33 8.75-4.59 1.07-0.28 3.01 0.81 5 2.82 1.79 1.8 4.8 5.96 6.69 9.25 1.9 3.28 4.19 7.32 5.1 8.97 0.91 1.65 6.5 11.55 12.43 22 5.93 10.45 11.77 20.8 12.98 23 1.21 2.2 4.15 7.6 6.52 12 2.38 4.4 4.84 8.68 5.47 9.5 0.63 0.82 1.94 3.07 2.91 5 0.97 1.93 2.98 5.62 4.46 8.22 1.48 2.59 4.3 7.54 6.27 11 1.97 3.45 4.1 7.74 4.75 9.53 0.92 2.56 0.88 4.04-0.19 7-1.1 3.05-2.73 4.58-8.75 8.19-4.06 2.44-10.77 6.61-14.89 9.28-4.13 2.66-9.07 5.11-11 5.44-2.46 0.42-4.51 0.04-6.87-1.28-1.86-1.03-4.22-3.57-7.13-9.38l-17 14 2.16 4.25c1.68 3.3 2.06 5.48 1.72 9.75-0.34 4.27-1.22 6.57-3.91 10.27-2.43 3.35-4.89 5.36-8.22 6.75-2.7 1.13-7.02 1.98-15.25 1.96l-1.76 7.26c-1.41 5.81-2.51 8.01-5.5 10.99-2.55 2.54-5.49 4.2-9.24 5.24-3.02 0.83-6.74 1.52-8.25 1.52-2.47 0.01-2.82 0.45-3.39 4.26-0.35 2.34-1.45 5.82-2.45 7.75-1 1.93-2.85 4.49-4.11 5.69-1.27 1.21-3.99 2.9-6.05 3.75-2.06 0.86-6.45 1.56-9.75 1.56-5.21 0-6.16 0.3-7.18 2.25-0.65 1.24-3.24 4.45-5.75 7.14-2.97 3.18-6.85 5.92-11.07 7.82-5.64 2.54-7.36 2.87-13 2.46-3.57-0.26-11.9-1.6-18.5-2.98-6.6-1.38-13.46-3-15.25-3.6-3.11-1.04-3.44-0.89-7.5 3.4-2.82 2.98-6.1 5.18-15.25 8.53l-5.5-2.39c-3.47-1.5-7.26-4.28-10.25-7.51-3.34-3.6-5.05-6.46-6.75-14.12l-3.75 2c-2.06 1.11-5.44 2.01-7.5 2-2.06 0-5.21-0.72-7-1.61-1.79-0.88-5.19-3.47-7.56-5.75-2.36-2.28-5.19-6.16-6.27-8.64-1.08-2.48-1.96-5.29-1.94-6.25 0.01-0.96-0.32-1.76-0.73-1.78-0.41-0.01-2.33 0.61-4.25 1.39-3.11 1.25-4.11 1.2-9-0.43-4.15-1.38-6.78-3.19-10.75-7.38-4.25-4.49-5.45-6.55-6.29-10.8-0.73-3.65-0.73-6.09 0-8 0.57-1.51 1.04-2.98 1.04-3.25 0-0.27-0.79-0.28-1.75 0-0.96 0.27-4.45-0.2-7.75-1.05-4.32-1.11-7.06-2.58-9.79-5.25-2.08-2.03-4.67-5.5-5.74-7.7-1.07-2.2-2.07-6.05-2.21-8.55-0.19-3.39 0.44-5.88 5.24-14.95l-3.61-4.75c-1.99-2.61-3.78-4.97-3.98-5.25-0.2-0.27-2.4 1.41-4.89 3.75-2.49 2.34-5.31 4.26-6.27 4.26-0.96 0.01-4.45-1.63-7.75-3.65-3.3-2.03-9.15-5.53-13-7.8-3.85-2.26-8.8-5.27-11-6.68-2.87-1.84-4.33-3.67-5.18-6.47-0.92-3.07-0.9-4.66 0.12-7.41 0.7-1.93 4.32-8.9 8.04-15.5 3.71-6.6 10.26-18.07 14.55-25.5 4.3-7.43 9.53-16.7 11.64-20.62 2.11-3.92 9.41-17.19 16.24-29.5 6.82-12.31 14-24.07 15.95-26.13 1.95-2.06 4.24-3.75 5.09-3.76zm-15.5 48.51c-3.73 6.6-7.65 13.57-8.72 15.5-1.06 1.93-9.04 16.1-17.73 31.5-14.94 26.47-15.71 28.08-13.98 29.5 1 0.82 4.14 2.85 6.98 4.5 2.84 1.65 6.81 4.04 8.83 5.32 2.88 1.82 3.83 2.04 4.4 1 0.41-0.73 0.75-1.66 0.75-2.07 0.01-0.41 6.15-11.66 13.64-25 7.5-13.34 14.64-26.05 15.88-28.25 1.24-2.2 4.36-7.82 6.94-12.5 2.57-4.68 5.08-9.17 5.57-10 0.48-0.82 3.9-6.9 7.59-13.5 3.69-6.6 7.43-12.8 8.3-13.78 0.88-0.98 1.15-1.76 0.6-1.73-0.55 0.03-3.25-1.38-6-3.13-2.75-1.76-7.03-4.48-9.5-6.05-2.47-1.57-4.82-2.84-5.2-2.83-0.39 0.01-3.15 4.41-6.14 9.77-2.99 5.36-8.49 15.15-12.21 21.75zm252.55-18.98c-3.58 2.03-6.62 3.75-6.77 3.83-0.15 0.08 1.37 3.08 3.38 6.65 2.01 3.58 4.6 8.18 5.77 10.23 1.17 2.05 10.13 18.02 19.92 35.5 9.79 17.47 18.2 32.45 18.69 33.27 0.49 0.82 3.39 6.11 6.45 11.75 3.06 5.64 5.79 10.25 6.06 10.25 0.27 0 2.64-1.46 5.25-3.25 2.61-1.79 6.32-4.01 8.25-4.93 1.92-0.93 4.46-2.5 5.63-3.5l2.13-1.82c-17.04-30.22-23.34-41.47-24.99-44.5-1.65-3.02-4.86-8.81-7.14-12.85-2.27-4.05-5.09-9-6.25-11-1.17-2.01-6.28-11.07-11.35-20.15-5.07-9.07-9.54-16.82-9.92-17.21-0.38-0.39-2.47 0.36-4.65 1.67-2.18 1.3-6.89 4.03-10.46 6.06zm-130.5 18.41c-8.23 0.8-14.56 1.96-17.25 3.16-3.02 1.36-5.54 3.72-8.71 8.16-2.45 3.44-5.31 7.38-6.35 8.75-1.05 1.38-5.25 7.45-9.33 13.5-4.09 6.05-8.22 12.57-9.17 14.5-0.95 1.93-1.73 3.95-1.73 4.5 0.01 0.62 1.63 0.73 4.27 0.3 2.35-0.39 7.19-2.14 10.77-3.89 4.32-2.11 8.18-5.03 11.5-8.72 2.75-3.05 7.25-7.75 10-10.45 2.75-2.7 7.02-5.95 9.5-7.22 2.47-1.27 7.2-3.08 10.5-4.02 4.21-1.21 7.34-1.5 10.5-0.98 2.47 0.4 9.45 3.31 15.5 6.46 6.05 3.15 12.8 6.93 15 8.4 2.2 1.48 4.34 2.67 4.75 2.65 0.41-0.02 1.99 0.81 3.5 1.83 1.51 1.03 7.37 4.74 13.01 8.25 5.65 3.52 12.03 7.52 14.19 8.89 2.15 1.38 8.56 5.66 14.23 9.51 5.68 3.86 13.37 9.26 17.1 12 3.73 2.75 12.4 9.6 19.25 15.24 11.34 9.32 12.67 10.15 14.72 9.1 1.24-0.63 5.4-3.85 9.25-7.14 3.85-3.3 7.14-6.27 7.31-6.6 0.17-0.34-0.42-2.18-1.3-4.11-0.88-1.93-2.82-5.64-4.3-8.25-1.49-2.61-8.24-14.54-15.01-26.5-6.76-11.96-12.7-22.43-13.2-23.25-0.49-0.82-3.06-5.42-5.7-10.2l-4.8-8.71c-16.98 0.96-23.68 0.73-28-0.02-3.85-0.66-9.03-1.84-11.5-2.61-2.48-0.78-9.23-2.19-15-3.13-6.47-1.07-17.41-1.83-28.5-1.99-9.9-0.14-18.9 0.1-20 0.54-1.1 0.44-7.85 1.36-15 2.05zm-100.76 41.95c-1.52 2.54-3.68 6.42-4.8 8.62-1.12 2.2-2.98 5.57-4.13 7.5-1.16 1.93-4.74 8.22-7.96 14-3.22 5.78-5.84 10.95-5.81 11.5 0.02 0.55 1.83 3.14 4 5.75l3.96 4.75c7.31-3.79 10.17-4.39 14.5-4.35 3.62 0.04 7.78 0.84 10.5 2.02 2.47 1.07 6.46 3.72 8.84 5.89l4.35 3.94c2.57-3.32 4.88-5.06 6.81-6.02 1.92-0.95 5.97-1.95 9-2.23 3.81-0.35 7.3 0.07 11.37 1.37 3.89 1.25 7.59 3.43 11 6.49 2.82 2.53 6.11 6.58 7.3 9 1.2 2.41 2.55 6.15 3 8.31 0.72 3.4 1.42 4.17 5.33 5.85 2.47 1.07 6.23 3.36 8.33 5.09 2.35 1.92 5.17 5.86 7.26 10.14 1.88 3.85 3.42 7.79 3.42 8.75-0.01 1 1.17 2.19 2.74 2.78 1.51 0.56 4.26 1.8 6.1 2.75 1.84 0.94 5.05 3.74 7.14 6.22 2.09 2.48 4.98 7.2 6.43 10.5 1.45 3.3 2.62 7.69 2.61 9.75-0.02 2.06-0.82 5.56-1.78 7.76-0.96 2.21-1.36 4.34-0.89 4.75 0.47 0.41 3.62 1.31 7 2.01 3.38 0.7 9.96 1.54 14.64 1.88 6.66 0.47 9.31 0.25 12.25-1.02 2.06-0.9 3.75-2.08 3.75-2.63 0-0.55-1.01-1.45-2.25-2-1.24-0.55-2.93-1.42-3.75-1.94-0.83-0.52-6.68-3.48-13-6.57-6.33-3.09-12.52-6.61-13.76-7.81-1.24-1.2-2.55-3.75-2.92-5.68-0.46-2.46-0.16-4.32 1.01-6.25 0.92-1.51 2.91-3.49 4.42-4.4 2.57-1.53 3.05-1.52 7.25 0.13 2.47 0.98 11.91 5.43 20.97 9.9 15.8 7.79 16.79 8.14 24.5 8.51 7.53 0.36 8.14 0.24 9.79-2 0.96-1.32 1.76-3.07 1.76-3.89 0.01-0.82-1.91-2.52-4.25-3.77-2.35-1.25-6.39-3.5-8.97-5-2.59-1.5-8.44-4.89-13-7.52-4.57-2.63-11.23-6.59-14.8-8.78-3.58-2.2-7.96-5.56-9.75-7.46-1.79-1.91-3.25-3.81-3.25-4.22 0.01-0.41 0.91-2.21 2-4 1.1-1.79 3.57-3.93 5.5-4.75 2.83-1.21 4.13-1.27 6.75-0.33 1.79 0.65 6.08 2.78 9.54 4.75 3.46 1.97 7.79 4.48 9.62 5.58 1.83 1.1 7.1 4.17 11.71 6.82 4.61 2.65 11.3 6.57 14.88 8.7 4.45 2.65 7.76 3.9 10.5 3.97 2.48 0.06 4.84-0.59 6.21-1.7 1.21-0.98 2.45-3.03 2.75-4.54 0.49-2.48 0-3.07-4.99-6-3.04-1.79-9.46-5.59-14.25-8.46-4.8-2.86-10.3-6.15-12.22-7.3-1.93-1.15-5.98-3.62-9-5.49-3.03-1.87-7.08-4.29-9-5.37-1.93-1.09-5.08-3.31-7-4.95-3.04-2.57-3.5-3.55-3.5-7.47 0-3.1 0.62-5.18 2-6.7 1.1-1.21 3.57-2.85 5.5-3.64 3.1-1.27 3.96-1.24 7.5 0.19 2.2 0.89 8.95 4.67 15 8.41 6.05 3.73 12.35 7.53 14 8.44 1.65 0.92 5.02 2.97 7.5 4.56 2.48 1.6 9.34 5.63 15.25 8.97 7.92 4.46 11.75 6.06 14.55 6.06 2.09 0 4.35-0.56 5.02-1.25 0.67-0.69 1.21-3.16 1.2-5.5-0.02-3.88-0.48-4.65-5.27-8.78-2.89-2.49-7.05-5.74-9.25-7.23-2.2-1.49-8.5-6.36-14-10.82-5.5-4.47-11.8-9.32-14-10.79-2.2-1.46-7.15-4.92-11-7.68-3.85-2.76-9.25-6.51-12-8.32-2.75-1.82-8.15-5.33-12-7.81-3.85-2.48-10.51-6.49-14.8-8.92-4.29-2.42-9.92-5.63-12.5-7.14-2.59-1.51-9.2-4.99-14.7-7.72-5.67-2.83-11.41-4.99-13.25-5.01-1.79-0.02-5.12 0.76-7.41 1.72q-4.16 1.75-7.2 6.25c-1.67 2.47-6.88 8.38-11.59 13.13-6.97 7.03-10.03 9.32-16.55 12.36-5.59 2.6-9.96 3.9-14.5 4.29-5.65 0.49-7.25 0.21-12.25-2.11-4.14-1.92-6.52-3.84-8.5-6.85-2.37-3.61-2.74-5.15-2.67-11.25 0.06-5.64 0.68-8.39 3.07-13.57 1.65-3.57 5.78-10.66 9.17-15.75 3.4-5.09 6.19-9.59 6.2-10 0.01-0.41-1.9-1.11-4.25-1.54-2.35-0.44-7.2-1.92-10.77-3.29-3.58-1.37-7.29-2.92-8.25-3.45-0.96-0.54-1.95-0.97-2.2-0.97-0.25 0-4.86 7.93-10.25 17.63-5.39 9.69-11.04 19.71-12.56 22.25zm-7.02 68.62c-1.27 1.65-3.07 4.24-4.01 5.75-0.94 1.51-1.71 3.87-1.71 5.25 0 1.37 0.9 3.85 2 5.5 1.64 2.45 2.68 3 5.75 2.98 3.48-0.02 4.09-0.5 8.5-6.75 3.63-5.14 4.75-7.61 4.75-10.48 0-2.93-0.6-4.2-2.75-5.78-1.51-1.12-3.97-2.02-5.46-2-1.49 0.01-3.17 0.59-3.74 1.28-0.56 0.69-2.06 2.6-3.33 4.25zm43.86 5.15c-1.14 1.73-4.78 6.85-8.08 11.38-3.3 4.53-7.23 9.86-8.73 11.85-1.5 1.99-3.75 5.52-5 7.85-2.02 3.76-2.14 4.65-1.08 8 0.73 2.33 2.17 4.25 3.75 5.02 1.41 0.69 3.12 1.27 3.81 1.3 0.69 0.02 2.84-1.67 4.78-3.75 1.94-2.09 7.56-9.34 12.5-16.11 4.93-6.76 10.43-14.41 12.23-17 1.79-2.58 3.25-5.93 3.25-7.44-0.01-1.72-1.14-3.88-3.01-5.75-1.65-1.65-3.83-3-4.85-3-1.01 0-3.12 1.01-4.67 2.25-1.55 1.24-3.76 3.67-4.9 5.4zm20.88 37.66c-2.23 2.85-5.94 8-8.25 11.44-2.82 4.19-4.2 7.32-4.19 9.5 0 1.79 0.34 3.75 0.75 4.35 0.4 0.61 1.74 1.62 2.98 2.25 1.24 0.63 3.37 1.15 4.75 1.15 1.78 0 3.59-1.36 6.3-4.75 2.08-2.61 4.67-6.05 5.75-7.64 1.07-1.59 2.85-4.1 3.95-5.58 1.1-1.48 3.69-5.24 5.75-8.36 2.06-3.12 3.75-6.8 3.75-8.17 0-1.38-0.34-3.24-0.75-4.14-0.41-0.9-1.99-2.25-3.5-3-1.51-0.75-3.6-1.36-4.65-1.36-1.09 0-3.31 1.93-5.25 4.56-1.84 2.5-5.17 6.89-7.39 9.75zm28.43 26.81c-2.54 3.51-5.46 7.82-6.5 9.58-1.86 3.15-1.86 3.26 0.11 6.79 1.3 2.34 3.04 3.86 5 4.37 1.65 0.44 3.67 0.62 4.5 0.41 0.82-0.21 4.77-4.75 8.76-10.08 6.02-8.03 7.26-10.33 7.25-13.44-0.01-2.8-0.71-4.39-2.76-6.28-1.51-1.4-3.69-2.52-4.85-2.5-1.15 0.01-3.18 1.1-4.5 2.4-1.32 1.31-4.48 5.24-7.01 8.75z'
													/>
												</svg>
											</div>

											<svg
												version='1.2'
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 512 512'
												width='512'
												height='512'
												className={styles['curved-path']}
											>
												<path
													id='Layer 1'
													className={styles.line}
													d='m497 440.91m-495.34-359.83c0 0 260.54-98.26 402.34-41.17 154 62 105 199-36 209-92.19 6.53-181-49-290 0-135.96 61.11-72.72 282.95 154 232 89-20 177-32 264-18'
												/>
												<path
													id='Layer 2'
													className={styles.arrowhead}
													d='m478 446l22 18-23 11'
												/>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.cta}>
							<Link href='/consulting'>
								<span className={styles.link}>Learn More</span>
								{/* <span className={styles.arrow}>&rarr;</span> */}
							</Link>
						</div>
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
