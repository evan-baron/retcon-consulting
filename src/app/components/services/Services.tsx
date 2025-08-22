'use client';

// Library imports
import React from 'react';

// Styles imports
import styles from './services.module.scss';

// Component imports
import Tile from './servicesTile/Tile';

// Data imports
import { tileData } from './tileInfo';

function Services({ id }: { id: string }) {
	return (
		<div className={styles['services-wrapper']} id={id}>
			<section
				className={styles.services}
				aria-label='The services we offer to help you grow your business'
			>
				<h2 className={styles.h2}>Services</h2>

				<div className={styles['services-tiles']}>
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
				</div>
			</section>
		</div>
	);
}

export default Services;
