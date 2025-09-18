// Component imports
import Hero from './components/hero/Hero';
import Summary from './components/summary/Summary';
import Services from './components/services/Services';
import CTA from './components/CTA/CTA';
import FAB from './components/FAB/FAB';
// import Contact from './components/contact/Contact';
// import Process from './components/process/Process';
// import About from './components/about/About';

export default function Home() {
	return (
		<>
			<Hero />
			<Summary />
			<Services id='services' />
			<CTA content='Book a Free Consultation' parent='home' />
			<FAB type='ttt' />
			{/* <Contact id='contact' /> */}
			{/* <Process /> */}
			{/* <About id='about' /> */}
			{/* <section className={styles['previous-work']}>Previous Work</section> */}
		</>
	);
}
