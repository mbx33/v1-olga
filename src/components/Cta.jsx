import React from 'react';
//styles
import './cta.css';

import look from '../assets/looking.jpg';

function Cta() {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form Submitted');
	};

	return (
		<section className="cta-container">
			<div className="form-container">
				<div className="cta-text">
					<h2>Get your first consultation for free!</h2>
					<p>
						Start living better today, Lorem ipsum dolor sit amet consectetur!
					</p>
					<br />
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
						sed?
					</p>
				</div>
				<form
					className="form"
					onSubmit={(e) => {
						handleSubmit(e);
					}}
				>
					<div className="input">
						<label>
							<span>Full Name: </span>
							<input type="text" />
						</label>
					</div>
					<div className="input">
						<label>
							<span>Email address: </span>
							<input type="email" />
						</label>
					</div>
					{/* <div className="input">
						<label>
							<span>Phone: </span>
							<input type="text" placeholder="+7" />
						</label>
					</div> */}
					<button className="btn-cta">Request Call Back</button>
				</form>
			</div>
			<div className="cta-image">
				<img src={look} alt="looking" />
			</div>
		</section>
	);
}

export default Cta;
