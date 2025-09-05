// Component imports
import Hero from './components/hero/Hero';
import Summary from './components/summary/Summary';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import FAB from './components/FAB/FAB';
// import Process from './components/process/Process';
// import About from './components/about/About';

export default function Home() {
	return (
		<>
			<Hero />
			<Summary />
			<Services id='services' />
			<Contact id='contact' />
			<FAB type='ttt' />
			{/* <Process /> */}
			{/* <About id='about' /> */}
			{/* <section className={styles['previous-work']}>Previous Work</section> */}
		</>
	);
}
