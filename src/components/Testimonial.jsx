import React from 'react';

// styles
import './testimonial.css';
import { BsChatRightQuote, BsChatLeftQuote } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';

// components
import TestimonialCard from './TestimonialCard';

const testimonials = [
	{
		name: 'Shiela',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maiores veritatis velit.',
	},
	{
		name: 'Maxim',
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis consequatur illum sint id saepe.',
	},
	{
		name: 'Vera',
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis consequatur illum sint id saepe.',
	},
	{
		name: 'Leo',
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis consequatur illum sint id saepe.',
	},
];

function Testimonial() {
	return (
		<section className="testimonial-section">
			{/* <BsChatRightQuote className="quote-image" /> */}
			<BsChatLeftQuote className="quote-image" />
			<FaQuoteLeft className="fa-quote" />

			<div className="title test-title">
				<h4>What my clients are saying!</h4>
			</div>
			<div className="card-container">
				<TestimonialCard value={testimonials} />
			</div>
		</section>
	);
}

export default Testimonial;
