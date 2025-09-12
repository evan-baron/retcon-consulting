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
						<WebDev />
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
						<Consulting />
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
