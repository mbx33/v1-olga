import React from 'react';

import Navbar from './navigation/Navbar';

//styles
import './hero.css';

//assets
import logo from '../assets/logo-2.png';

function Hero() {
	return (
		<section className="hero-container">
			<header className="header">
				<div className="logo">
					<img src={logo} alt="Olga's site logo" />
				</div>
				<Navbar />
			</header>
			<main className="hero-text">
				<h1 className="hero-title">Unlock your potential</h1>
				<h2 className="hero-subtitle">
					A Lifecoach that can transform, and grow your true potential.
				</h2>
				<button className="btn hero-btn">Find Out More</button>
			</main>
		</section>
	);
}

export default Hero;

//Todo
//Shrink the Logo a bit
