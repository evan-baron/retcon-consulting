// Library imports
import Image from 'next/image';

// Styles imports
import styles from './page.module.css';

// Component imports
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';

export default function Home() {
	return (
		<>
			<div id='top'></div>
			<main className={styles.main}>
				<Header />
				<Hero />
				<div className={styles['about-wrapper']}>
					<section id='about' className={styles.about}>
						<div className={styles['image-background']}></div>
						<Image
							src='/data-extraction-cuate.svg'
							alt='Data Extraction Illustration'
							className={styles['data-image']}
							width={600}
							height={600}
							priority={true}
						/>
					</section>
				</div>
				<section id='services' className={styles.services}>
					Services
				</section>
				<section className={styles['previous-work']}>Previous Work</section>
				<section id='contact' className={styles['contact-form']}></section>
				<Footer />
			</main>
		</>
	);
}
