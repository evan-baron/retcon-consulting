// Component imports
import Hero from './components/hero/Hero';
import Summary from './components/summary/Summary';
import Services from './components/services/Services';
import FAB from './components/FAB/FAB';
import HomeContact from './components/homeContact/HomeContact';

export default function Home() {
	return (
		<>
			<Hero />
			<Summary />
			<Services id='services' />
			<HomeContact />
			<FAB type='ttt' />
		</>
	);
}
