import React from 'react';
import { MdMenu } from 'react-icons/md';

//styles
import './navbar.css';

const Links = [
	{
		id: 1,
		url: '/',
		text: 'home',
	},
	{
		id: 2,
		url: '/about',
		text: 'about',
	},
	{
		id: 3,
		url: '/services',
		text: 'services',
	},
	{
		id: 4,
		url: '/testimonials',
		text: 'testimonials',
	},
];

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-links">
				{Links.map((link) => {
					const { id, url, text } = link;
					return (
						<div key={id} className="links">
							<a href={url}>{text}</a>
						</div>
					);
				})}
			</div>
		</nav>
	);
};

export default Navbar;
