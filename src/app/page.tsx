// Library imports
import Image from 'next/image';

// Styles imports
import styles from './page.module.css';

// Component imports
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Summary from './components/summary/Summary';

export default function Home() {
	return (
		<>
			<div id='top'></div>
			<main className={styles.main}>
				<Header />
				<Hero />
				<Summary />

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
