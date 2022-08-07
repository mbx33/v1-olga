import React from 'react';

// Components
import Hero from '../components/Hero';
import BusinessLinks from '../components/BusinessLinks';
import About from '../components/About';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';
import CallToAction from '../components/CallToAction';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import BottomFooter from '../components/BottomFooter';

function Home() {
	return (
		<>
			<Hero />
			<BusinessLinks />
			<About />
			<Services />
			<Testimonial />
			<CallToAction />
			<Partners />
			<Footer />
			<BottomFooter />
		</>
	);
}

export default Home;
