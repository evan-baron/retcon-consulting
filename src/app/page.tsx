import styles from './page.module.css';
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
				<section id='about' className={styles.summary}></section>
				<section id='services' className={styles.carousel}></section>
				<section className={styles.profiles}></section>
				<section id='contact' className={styles['contact-form']}></section>
				<Footer />
			</main>
		</>
	);
}
