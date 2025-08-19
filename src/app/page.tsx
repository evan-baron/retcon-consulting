// Styles imports
import styles from './page.module.scss';

// Component imports
import Hero from './components/hero/Hero';
import Summary from './components/summary/Summary';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
// import Process from './components/process/Process';
// import About from './components/about/About';

export default function Home() {
	return (
		<>
			<div id='top'></div>
			<main className={styles.main}>
				<div className={styles['main-content']}>
					<Hero />
					<Summary />
					<Services id='services' />
					<Contact id='contact' />
					{/* <Process /> */}
					{/* <About id='about' /> */}
					{/* <section className={styles['previous-work']}>Previous Work</section> */}
				</div>
			</main>
		</>
	);
}
