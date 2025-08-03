// Library imports
import React from 'react';
import Image from 'next/image';

// Styles imports
import styles from './services.module.scss';

function Services({ id }: { id: string }) {
	return (
		<div className={styles['services-wrapper']} id={id}>
			<section
				className={styles.services}
				aria-label='The services we offer to help you grow your business'
			>
				<h2 className={styles.h2}>Services</h2>
				<div className={styles['services-tiles']}>
					<div className={styles.tile}>
						<div className={styles['image-wrapper']}>
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
					<div className={styles.tile}>
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
					<div className={styles.tile}>
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
				</div>
			</section>
		</div>
	);
}

export default Services;
