// Library imports
import React, { useState } from 'react';
import Image from 'next/image';

// Styles imports
import styles from './tile.module.scss';

type TileProps = {
	title: string;
	image: string;
	imageBackground?: boolean; // Optional, used for styling
	alt: string;
	summary: string;
	details: string[];
};

function Tile({
	title,
	image,
	imageBackground,
	alt,
	summary,
	details,
}: TileProps) {
	const [flipped, setFlipped] = useState(false);

	return (
		<div
			className={styles.tile}
			onClick={() => setFlipped((prev) => !prev)}
			aria-label={`Details for ${title}`}
		>
			<div
				className={`${styles['tile-content']} ${flipped ? styles.flipped : ''}`}
			>
				<div className={styles['tile-front']} aria-hidden={flipped}>
					<figure className={styles['image-wrapper']}>
						{imageBackground && (
							<div className={styles.wrapper}>
								<div
									className={styles['image-background']}
									aria-hidden={true}
								></div>
							</div>
						)}
						<Image src={image} alt={alt} width={400} height={400} />
					</figure>
					<header>
						<h3 className={styles.h3}>{title}</h3>
					</header>
					<p className={styles.p}>{summary}</p>
				</div>

				<div className={styles['tile-back']} aria-hidden={!flipped}>
					<div className={styles['back-content']}>
						<header>
							<h3 className={styles.h3}>{title}</h3>
						</header>
						<ul className={styles.ul}>
							{details.map((detail, index) => (
								<li key={index} className={styles.li}>
									<span dangerouslySetInnerHTML={{ __html: detail }} />
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Tile;
