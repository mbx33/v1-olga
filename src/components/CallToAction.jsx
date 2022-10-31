import { useState } from 'react';
//styles
import './callToAction.css';

import look from '../assets/looking.jpg';

function CallToAction() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form Submitted');
	};

	return (
		<section className="cta-container">
			<div className="form-container">
				<div className="cta-text">
					<h2>Get your free consultation!</h2>
					<p>
						Start living better today, Lorem ipsum dolor sit amet consectetur!
					</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
						sed?
					</p>
				</div>
				<div className="form">
					<form
						onSubmit={(e) => {
							handleSubmit(e);
						}}
					>
						<div className="input">
							<label>
								<span>Full Name: </span>
								<input type="text" placeholder="Name" />
							</label>
						</div>
						<div className="input">
							<label>
								<span>Email address: </span>
								<input type="email" placeholder="Email" />
							</label>
						</div>
						<div className="input">
							<label>
								<span>Phone: </span>
								<input type="text" placeholder="Phone #" />
							</label>
						</div>
						<button className="btn-cta">Let's Talk</button>
					</form>
				</div>
			</div>
			<div className="cta-image">
				<img src={look} alt="looking" />
			</div>
		</section>
	);
}

export default CallToAction;
