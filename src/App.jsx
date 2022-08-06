import './App.css';

// Components //
import Hero from './components/Hero';
import BusinessLinks from './components/BusinessLinks';
import About from './components/About';
import Services from './components/Services';
import Testimonial from './components/Testimonial';

function App() {
	return (
		<div>
			<Hero />
			<BusinessLinks />
			<About />
			<Services />
			<Testimonial />
		</div>
	);
}

export default App;
