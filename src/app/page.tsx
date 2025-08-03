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
				<div className={styles['summary-wrapper']}>
					<section id='about' className={styles.summary}>
						<div className={styles.wrapper}>
							<div className={styles['image-background']}></div>
						</div>
						<div className={styles['image-wrapper']}>
							<Image
								src='/data-extraction-cuate.svg'
								alt='Data Extraction Illustration'
								className={styles['data-image']}
								width={600}
								height={600}
								priority={true}
							/>
						</div>
						<div className={styles['text-wrapper']}>
							<h2 className={styles['summary-highlight']}>
								Growth shouldn&#39;t feel like guesswork.
							</h2>
							<p className={styles['summary-text']}>
								If you&#39;re stuck, circling the same challenges, or unsure
								what&#39;s next, it&#39;s time to break that cycle. We help
								companies move forward with purpose through design, product
								strategy, and creative problem-solving.
							</p>
							<p className={styles['summary-text']}>
								It&#39;s time to rewrite your narrative.
							</p>
						</div>
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
