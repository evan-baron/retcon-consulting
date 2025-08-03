// Styles imports
import styles from './page.module.scss';

// Component imports
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Summary from './components/summary/Summary';
import Services from './components/services/Services';

export default function Home() {
	return (
		<>
			<div id='top'></div>
			<main className={styles.main}>
				<div className={styles['main-bg']}></div>
				<div className={styles['main-content']}>
					<Header />
					<Hero />
					<Summary />
					<Services id='services' />\
					<section className={styles['previous-work']}>Previous Work</section>
					<section id='contact' className={styles['contact-form']}></section>
					<Footer />
				</div>
			</main>
		</>
	);
}
