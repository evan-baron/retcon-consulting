'use client';

// Library imports
import React from 'react';

// Hooks imports

// Styles imports
import styles from './consulting.module.scss';
import mobileStyles from './consultingMobile.module.scss';

// Icon imports
import {} from '@mui/icons-material';

// Components imports
import TreasureMap from '../graphics/treasureMap/TreasureMap';

// Context imports
import { useAppContext } from '@/app/context/AppContext';

const Consulting = () => {
	const { isMobile } = useAppContext();

	return !isMobile ? (
		<div className={styles.content}>
			<div className={styles.text}>
				<div className={styles['text-content']}>
					<h4>Product-Market Fit</h4>
					<p>
						Brand changes, new products, shifting markets...{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							disruption happens
						</span>
						. The right product-market fit is the difference between a launch
						that stalls and a{' '}
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
								We help uncover customer needs, validate assumptions, and
								position your brand with{' '}
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
								<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
									pivots
								</span>
								,{' '}
								<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
									refinements
								</span>
								, and{' '}
								<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
									market entries
								</span>{' '}
								so your next move is grounded in confidence.
							</p>
						</li>
					</ul>
				</div>
				<div className={styles['text-content']}>
					<h4>Go-to-Market Strategy</h4>
					<p>
						With a combined{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							20+ years of experience
						</span>{' '}
						in SaaS sales and consulting for startups through large enterprises,
						our team is well versed in the nuances of market entry and
						expansion.
					</p>

					<ul className={styles.bullets}>
						<li className={styles.bullet}>
							<p aria-hidden='true' className={styles.arrow}>
								&rarr;
							</p>
							<p>
								We can build{' '}
								<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
									new sales processes
								</span>
								,{' '}
								<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
									outreach cadences
								</span>
								, and{' '}
								<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
									GTM playbooks
								</span>{' '}
								that connect with your audience and{' '}
								<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
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
								<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
									clear
								</span>
								,{' '}
								<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
									repeatable
								</span>{' '}
								path from first touch to closed deal.
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.graphics}>
				<div className={styles['consulting-graphics-container']}>
					<TreasureMap />
					<div className={styles.lightbulb}>
						<svg
							version='1.2'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512 512'
							width='512'
							height='512'
						>
							<path
								id='Shape 1'
								className={styles.s0}
								d='m206 412c0-122.22-106-156-106-256 0-78 65.32-156 156-156m50 412c0-122.22 106-156 106-256 0-78-65.32-156-156-156m0 442h-50v40l20 30h30m0-70h50v40l-20 30h-30m-100.4-361.86c0-50.27 40.48-100.49 100.4-100.49'
							/>
						</svg>
					</div>
					<div className={styles.puzzle}>
						<svg
							version='1.2'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 720 720'
							width='512'
							height='512'
						>
							<path
								id='Layer 2'
								className={styles.s0}
								d='m30 690h180c0-60 0-150 90-150 90 0 90 90 90 150h180v-180c60 0 150 0 150-90 0-90-90-90-150-90v-180h-180c0-60 0-150-90-150-90 0-90 90-90 150h-180v180c61.57 0 150 0 150 90 0 90-90 90-150 90z'
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className={mobileStyles.content}>
			<h3>Consulting</h3>
			<div className={styles.pmf}>
				<div className={mobileStyles['text-content']}>
					<h4>Product-Market Fit</h4>
					<p>
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							Disruption happens
						</span>
						. The right product-market fit is the difference between a launch
						that stalls and a{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							launch that soars
						</span>
						.
					</p>
					<ul className={mobileStyles.bullets}>
						<li className={mobileStyles.bullet}>
							<p aria-hidden='true' className={mobileStyles.arrow}>
								&rarr;
							</p>
							<p>Uncover customer needs</p>
						</li>
						<li className={mobileStyles.bullet}>
							<p aria-hidden='true' className={mobileStyles.arrow}>
								&rarr;
							</p>
							<p>Validate assumptions</p>
						</li>
						<li className={mobileStyles.bullet}>
							<p aria-hidden='true' className={mobileStyles.arrow}>
								&rarr;
							</p>
							<p>Reposition your brand</p>
						</li>
					</ul>
					<p>
						We&apos;ll guide you through{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							pivots
						</span>
						,{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							refinements
						</span>
						, and{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							market entries
						</span>{' '}
						so your next move is{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							grounded in confidence
						</span>
						.
					</p>
				</div>
			</div>
			<div className={mobileStyles.graphics}>
				<div className={mobileStyles['consulting-graphics-container']}>
					<TreasureMap />
					<div className={mobileStyles.lightbulb}>
						<svg
							version='1.2'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512 512'
							width='512'
							height='512'
						>
							<path
								id='Shape 1'
								className={mobileStyles.s0}
								d='m206 412c0-122.22-106-156-106-256 0-78 65.32-156 156-156m50 412c0-122.22 106-156 106-256 0-78-65.32-156-156-156m0 442h-50v40l20 30h30m0-70h50v40l-20 30h-30m-100.4-361.86c0-50.27 40.48-100.49 100.4-100.49'
							/>
						</svg>
					</div>
					<div className={mobileStyles.puzzle}>
						<svg
							version='1.2'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 720 720'
							width='512'
							height='512'
						>
							<path
								id='Layer 2'
								className={mobileStyles.s0}
								d='m30 690h180c0-60 0-150 90-150 90 0 90 90 90 150h180v-180c60 0 150 0 150-90 0-90-90-90-150-90v-180h-180c0-60 0-150-90-150-90 0-90 90-90 150h-180v180c61.57 0 150 0 150 90 0 90-90 90-150 90z'
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className={styles.gtm}>
				<div className={mobileStyles['text-content']}>
					<h4>Go-to-Market Strategy</h4>
					<p>
						With a combined{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							20+ years of experience
						</span>{' '}
						in SaaS sales and consulting for startups through large enterprises,
						our team is well versed in the nuances of market entry and
						expansion.
					</p>
					<p>We can build:</p>
					<ul className={mobileStyles.bullets}>
						<li className={mobileStyles.bullet}>
							<p aria-hidden='true' className={mobileStyles.arrow}>
								&rarr;
							</p>
							<p>New sales processes</p>
						</li>
						<li className={mobileStyles.bullet}>
							<p aria-hidden='true' className={mobileStyles.arrow}>
								&rarr;
							</p>
							<p>Outreach cadences</p>
						</li>
						<li className={mobileStyles.bullet}>
							<p aria-hidden='true' className={mobileStyles.arrow}>
								&rarr;
							</p>
							<p>GTM playbooks</p>
						</li>
					</ul>

					<p>
						We align sales and marketing efforts to create a{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							clear
						</span>
						,{' '}
						<span style={{ fontWeight: 'bold', color: 'var(--gray1)' }}>
							repeatable
						</span>{' '}
						path from first touch to closed deal.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Consulting;
