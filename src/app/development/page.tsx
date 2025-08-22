'use client';

// Library imports
import React, { useState, useEffect } from 'react';

// Hooks imports

// Styles imports
import styles from './development.module.scss';

// Components imports
import Timeline from '../components/timeline/Timeline';
import Contact from '../components/contact/Contact';
import Tile from './developmentTile/Tile';

// Context imports

// Data imports
import { ReasonTiles } from '@/lib/data/why-custom';

const Development = () => {
	const [showMore, setShowMore] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const visibleReasons = ReasonTiles.slice(0, 6);
	const hiddenReasons = ReasonTiles.slice(6);

	return (
		<>
			<div className={styles['development-wrapper']}>
				<section className={styles.description}>
					<h2>Web Development</h2>
					<p className={styles['development-description']}>
						<span>Your website matters</span>: It's the first impression people
						have of your business, the place they decide whether to trust you,
						and the hub where all your marketing efforts come together. A clean,
						professional online presence turns attention into confidence, and
						confidence into lasting relationships.
					</p>
					<p className={styles['development-description']}>
						At Retcon Consulting, we take a structured approach to help guide
						you through the complexities of custom web development.
					</p>
				</section>
				<section className={styles.process}>
					<h3>Our Process</h3>
					<Timeline />
				</section>
				<section className={styles.custom}>
					<h3>Why Choose Custom?</h3>
					<div className={styles.tiles}>
						{visibleReasons.map((reason, index) => (
							<Tile key={index} {...reason} />
						))}
					</div>
					{showMore && (
						<div
							className={`${styles.drawer} ${showMore && styles.open} ${
								isAnimating && styles.animate
							}`}
							aria-hidden={!showMore}
						>
							{hiddenReasons.map((reason, index) => (
								<Tile key={index + 6} {...reason} />
							))}
						</div>
					)}
					<button
						className={`${styles.more} ${showMore && styles.up}`}
						type='button'
						onClick={() => {
							if (!showMore) {
								setShowMore(true);
							} else {
								setIsAnimating(true);
								setTimeout(() => {
									setShowMore(false);
									setIsAnimating(false);
								}, 1000);
							}
						}}
					>
						{showMore ? 'Show Less' : 'See More Reasons'}
					</button>
				</section>
			</div>
			<Contact id={'contact'} />
		</>
	);
};

export default Development;
