import React from 'react';
import './services.css';
import ServiceCard from './ServiceCard';

//props for each card -----------
//icons
import { BsBriefcaseFill } from 'react-icons/bs';
import { FaCommentsDollar } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
//images
import training from '../assets/training.jpg';
import corp from '../assets/corp-1.jpg';
import personal from '../assets/personal.jpg';

function Services() {
	return (
		<section className="services">
			<h1 className="title">Our Services</h1>
			<div className="service-container">
				<ServiceCard
					title="For Professionals"
					icon={<BsBriefcaseFill />}
					image={corp}
				/>
				<ServiceCard
					title="For Entrepreneurs"
					icon={<FaCommentsDollar />}
					image={personal}
				/>
				<ServiceCard title="For Students" icon={<MdSchool />} image={training} />
			</div>
		</section>
	);
}

export default Services;
