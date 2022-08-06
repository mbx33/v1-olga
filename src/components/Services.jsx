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
import corp from '../assets/corp.jpg';
import personal from '../assets/personal.jpg';
//content
const professional = {
	text: 'lorem this is the sentence to fill out the subheadline',
	list: ['List item 1', 'List item 2', 'List item 3', 'List item 4'],
};
const entrepreneurs = {
	text: 'lorem this is the sentence to fill out the subheadline',
	list: ['List item 1', 'List item 2', 'List item 3', 'List item 4'],
};
const student = {
	text: 'lorem this is the sentence to fill out the subheadline',
	list: ['List item 1', 'List item 2', 'List item 3', 'List item 4'],
};

function Services() {
	return (
		<section className="services">
			<h1 className="title">Our Services</h1>
			<div className="service-container">
				<ServiceCard
					title="For Professionals"
					icon={<BsBriefcaseFill />}
					image={corp}
					content={professional.text}
					list={professional.list}
				/>
				<ServiceCard
					title="For Entrepreneurs"
					icon={<FaCommentsDollar />}
					image={personal}
					content={entrepreneurs.text}
					list={entrepreneurs.list}
				/>
				<ServiceCard
					title="For Students"
					icon={<MdSchool />}
					image={training}
					content={student.text}
					list={student.list}
				/>
			</div>
		</section>
	);
}

export default Services;
