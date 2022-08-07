import React from 'react';
//styles
import './cta.css';

import look from '../assets/looking.jpg';

function Cta() {
	return (
		<section className="cta-container">
			<div className="form">
				<form>
					<label>
						<span>Name</span>
						<input type="text" />
					</label>
				</form>
			</div>
			<div className="cta-image">
				<img src={look} alt="looking" />
			</div>
		</section>
	);
}

export default Cta;
