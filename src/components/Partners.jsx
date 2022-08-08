import React, { useState } from 'react';
import './partners.css';

const partners = [
	{
		url: 'https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8Vzd0LXBDeXMzSjR8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
		name: 'Steven',
		job: 'Teacher',
	},
	{
		url: 'https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8Vzd0LXBDeXMzSjR8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
		name: 'Vera',
		job: 'English Assistant',
	},
];

function Partners() {
	const [flipped, setFlipped] = useState(false);

	const flip = (i) => {
		console.log(i);
		setFlipped(!flipped);
	};

	return (
		<section className="partners">
			<h3 className="title">My Partners</h3>
			<div className="partners-container">
				{partners.map((person, i) => {
					const { name, job, url } = person;
					return (
						<div className="profile" key={i} onClick={() => flip(i)}>
							<div
								className={` ${
									flipped ? 'flipped profile-img' : 'profile-img'
								}`}
							>
								<div className="back back-content">
									<p>Socials</p>
									<ul>
										<li>VK</li>
										<li>Insta</li>
										<li>TikTok</li>
									</ul>
								</div>
								<img src={url} alt="profile pic" className="front" />
							</div>
							<div className="profile-text">
								<h4 className="name">{name}</h4>
								<p className="job">-{job}</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Partners;
