import styles from './page.module.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';

export default function Home() {
	return (
		<main className={styles.main}>
			<Header />
			<Hero />
			<section className={styles.summary}></section>
			<section className={styles.carousel}></section>
			<section className={styles.profiles}></section>
			<section className={styles['contact-form']}></section>
			<Footer />
		</main>
	);
}
