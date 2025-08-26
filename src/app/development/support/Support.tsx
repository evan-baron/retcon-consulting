'use client';

// Library imports
import React, { useState, useEffect, useRef, useMemo, createRef } from 'react';

// Hooks imports

// Styles imports
import styles from './support.module.scss';

// MUI imports
import { Check, Close } from '@mui/icons-material';

// Components imports

// Context imports

// Support Data
const supportTiers = [
	{
		name: 'Basic',
		color: 'var(--main-gray)',
	},
	{
		name: 'Silver',
		color: 'var(--gray2)',
	},
	{
		name: 'Gold',
		color: 'hsla(50, 100%, 50%)',
	},
	{
		name: 'Platinum',
		color: 'var(--gray1)',
	},
];

const features = [
	'Site Ownership',
	'Proactive Maintenance',
	'Monthly Support Hours',
	'Technical Assistance',
	'Priority Response',
	'Feature Enhancements',
];

const tierFeatures = [
	// Basic
	[true, false, false, false, false, false],
	// Silver
	[true, true, true, false, false, false],
	// Gold
	[true, true, true, true, true, false],
	// Platinum
	[true, true, true, true, true, true],
];

const Support = () => {
	const [hoveredTier, setHoveredTier] = useState<number | null>(null);

	interface SupportRef {
		index: number;
		visible: boolean;
	}

	const supportRefs = useMemo(
		() => Array.from({ length: 3 }).map(() => createRef<HTMLDivElement>()),
		[]
	);

	const [supportRefsVisible, setSupportRefsVisible] = useState<SupportRef[]>(
		supportRefs.map((_, index) => ({
			index,
			visible: false,
		}))
	);

	useEffect(() => {
		const observer = new window.IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				// Definitions visibility logic
				const index = supportRefs.findIndex(
					(ref) => ref.current === entry.target
				);

				if (entry.target === supportRefs[index]?.current) {
					if (
						entry.intersectionRatio > 0 &&
						supportRefsVisible[index].visible === false
					) {
						setSupportRefsVisible((prev) =>
							prev.map((item) =>
								item.index === index ? { ...item, visible: true } : item
							)
						);
					} else if (
						!entry.isIntersecting &&
						entry.boundingClientRect.top > window.innerHeight
					) {
						setSupportRefsVisible((prev) =>
							prev.map((item) =>
								item.index === index ? { ...item, visible: false } : item
							)
						);
					}
				}
			});
		});

		supportRefs.forEach((ref) => {
			if (ref.current) observer.observe(ref.current);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<div className={styles['support-wrapper']}>
			<p
				className={`${styles.intro} ${
					supportRefsVisible[0].visible ? styles.visible : ''
				}`}
				ref={supportRefs[0]}
			>
				Launching your website is just the beginning. We offer a range of
				support options from complete independence to proactive care and ongoing
				feature enhancements so you can choose the level of partnership that
				fits your needs. Whether you prefer to manage your site yourself, or if
				you want dedicated technical assistance and continuous improvement,
				we're here to help your business thrive.
			</p>

			<div
				className={`${styles.tiersTable} ${
					supportRefsVisible[1].visible ? styles.visible : ''
				}`}
				role='table'
				aria-labelledby='support-table-heading'
				ref={supportRefs[1]}
			>
				<h3 id='support-table-heading'>Support Tiers Comparison:</h3>
				<table>
					<colgroup>
						<col style={{ width: 'auto' }} />
						{supportTiers.map((_, i) => (
							<col
								key={i}
								style={{ width: `${100 / (supportTiers.length + 1)}%` }}
							/>
						))}
					</colgroup>
					<thead>
						<tr>
							<th scope='col' style={{ backgroundColor: 'var(--gray7)' }}>
								Support
							</th>
							{supportTiers.map((tier, idx) => (
								<th
									scope='col'
									key={tier.name}
									style={{
										color: tier.color,
										fontWeight: idx === 2 || idx === 3 ? 'bold' : '400',
										background:
											hoveredTier === idx ? 'var(--gray6)' : 'var(--gray7)',
									}}
									onMouseEnter={() => setHoveredTier(idx)}
									onMouseLeave={() => setHoveredTier(null)}
								>
									{tier.name}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{features.map((feature, i) => (
							<tr key={feature}>
								<th
									scope='row'
									className={styles.feature}
									style={{
										fontWeight:
											hoveredTier !== null && tierFeatures[hoveredTier][i]
												? 'bold'
												: 'normal',
										background:
											hoveredTier !== null && tierFeatures[hoveredTier][i]
												? 'var(--gray6)'
												: 'var(--gray7)',
										transition: 'background 0.1s ease-in-out',
									}}
								>
									{feature}
									{i === 0 ? (
										<span
											className={styles.asterisk}
											style={{ transform: 'translateY(-0.375rem)' }}
										>
											*
										</span>
									) : null}
								</th>
								{tierFeatures.map((tier, j) => (
									<td
										key={supportTiers[j].name}
										className={styles.tierFeature}
										style={{
											textAlign: 'center',
											background:
												hoveredTier === j
													? 'rgba(255, 255, 255, 0.1)'
													: undefined,
											transition: 'background 0.1s ease-in-out',
										}}
										onMouseEnter={() => setHoveredTier(j)}
										onMouseLeave={() => setHoveredTier(null)}
									>
										{tier[i] ? (
											<>
												<Check
													className={`${styles.icon} ${styles.check}`}
													aria-label='Included'
													role='img'
													fontSize='small'
												/>
												{feature === 'Site Ownership' && (
													<span
														className={styles.asterisk}
														style={{ fontWeight: 'bold' }}
													>
														*
													</span>
												)}
											</>
										) : (
											<Close
												className={`${styles.icon} ${styles.close}`}
												aria-label='Not included'
												role='img'
												fontSize='small'
											/>
										)}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
				<div className={styles.description} ref={supportRefs[2]}>
					<p>
						<span
							className={styles.asterisk}
							aria-label='Note'
							style={{ transform: 'translateY(-0.375rem)' }}
						>
							*
						</span>
						<span className={styles.note}>
							All tiers allow you the option to own or lease your site and code.
							Ownership is a one-time purchase; leasing is a monthly
							subscription. If you lease, access is provided while your
							subscription is active. If leasing, you will always have the
							option to buy out your code.
						</span>
					</p>
				</div>
			</div>

			<p
				className={`${styles.closing} ${
					supportRefsVisible[2].visible ? styles.visible : ''
				}`}
				ref={supportRefs[2]}
			>
				With ongoing support, you can focus on growing your business while we
				ensure your website remains a reliable, high-performing digital asset.
			</p>
		</div>
	);
};

export default Support;
