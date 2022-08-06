import React from 'react';
import './businessLinks.css';

const logos = ['Mercury', 'Yandex', 'Gazprom', 'Lenta', 'Pyatorachka'];

function BusinessLinks() {
	return (
		<section className="biz-section">
			<div className="logos-container">
				{logos.map((logo, i) => {
					return <h4 key={i}>{logo}</h4>;
				})}
			</div>
		</section>
	);
}

export default BusinessLinks;
