import React from 'react';
import './about.css';

import profile from '../assets/close-up.jpg';

function About() {
	return (
		<section className="about">
			<div className="photo">
				<img src={profile} alt="standing image" className="profile-img" />
			</div>
			<div className="text-content">
				<h1>Headline Title Here</h1>
				<h2>Lorem ipsum dolor sit amet consectetur.</h2>
				<ul>
					<li>Bullet point 1</li>
					<li>Bullet point 2</li>
					<li>Bullet point 3</li>
					<li>Bullet point 4</li>
					<li>Bullet point 5</li>
				</ul>
				<button className="btn">Free Consultation</button>
				<p>* Free 15 minute consultation</p>
			</div>
		</section>
	);
}

export default About;
