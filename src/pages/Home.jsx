import React from 'react';

// Components
import Hero from '../components/Hero';
import BusinessLinks from '../components/BusinessLinks';
import About from '../components/About';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';
import Cta from '../components/Cta';

function Home() {
	return (
		<>
			<Hero />
			<BusinessLinks />
			<About />
			<Services />
			<Testimonial />
			<Cta />
		</>
	);
}

export default Home;
