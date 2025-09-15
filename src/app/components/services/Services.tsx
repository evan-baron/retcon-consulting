// Library imports
import React from 'react';
import Link from 'next/link';

// Styles imports
import styles from './services.module.scss';

// Icon imports

// Component imports
import WebDev from './webDev/WebDev';
import Consulting from './consulting/Consulting';

function Services({ id }: { id: string }) {
	return (
		<section
			className={styles['services-wrapper']}
			id={id}
			aria-labelledby='services-heading'
			role='region'
		>
			<h2 className={styles.h2} id='services-heading'>
				Services
			</h2>

			<div
				className={styles.services}
				aria-label='The services we offer to help you grow your business'
				role='list'
			>
				{/* Development */}
				<article
					className={styles['content-wrapper']}
					aria-labelledby='webdev-heading'
					role='listitem'
				>
					<div className={styles['content-container']}>
						<h3 className={styles['section-title']} id='webdev-heading'>
							Web Development & Design
						</h3>
						<WebDev />
						<div className={styles.cta}>
							<Link
								href='/development'
								aria-label='Web Development & Design details'
							>
								<span className={styles.link}>Learn More</span>
								<span className='sr-only'> about Web Development & Design</span>
								{/* <span className={styles.arrow}>&rarr;</span> */}
							</Link>
						</div>
					</div>
				</article>

				{/* Consulting */}
				<article
					className={styles['content-wrapper']}
					aria-labelledby='consulting-heading'
					role='listitem'
				>
					<div className={styles['content-container']}>
						<h3 className={styles['section-title']} id='consulting-heading'>
							Strategic Consulting
						</h3>
						<Consulting />
					</div>
				</article>

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
