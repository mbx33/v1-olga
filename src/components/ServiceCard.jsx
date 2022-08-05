import React from 'react';
import styled from 'styled-components';

function ServiceCard({ title, icon, image }) {
	return (
		<Container>
			<div className="headline">
				<p>{icon}</p>
				<h1>{title}</h1>
			</div>
			<Wrapper>
				<div className="image">
					<img src={image} alt="teaching a student" />
				</div>
				<div className="service-list">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Pariatur!
					</p>
					<ol>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
					</ol>
				</div>
				<button className="btn">Book</button>
			</Wrapper>
		</Container>
	);
}

export default ServiceCard;

const Container = styled.article`
	width: 28%;

	.headline {
		font-size: 2.5rem;
		display: flex;
		justify-content: space-evenly;
		padding: 1rem;
		align-items: center;

		p {
			font-size: var(--fs-md);
		}
	}
`;

const Wrapper = styled.div`
	background-color: var(--primary-color);
	color: var(--text-color);

	.image {
		position: relative;
	}

	.image img {
		border-bottom-right-radius: 6rem;
		border-bottom-left-radius: 6rem;
	}

	.image:before {
		position: absolute;
		content: '';
		height: 100%;
		width: 100%;
		background-image: linear-gradient(
			to bottom right,
			rgba(34, 34, 34, 0.7),
			rgba(34, 34, 34, 0.5),
			rgba(34, 34, 34, 0.3)
		);
		border-bottom-right-radius: 6rem;
		border-bottom-left-radius: 6rem;
	}

	.service-list {
		font-size: var(--fs-sm);
		padding: 3rem;
	}
`;
