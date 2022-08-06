import React, { useState } from 'react';
import styled from 'styled-components';

function ServiceCard({ title, icon, image, content, list }) {
	const [show, setShow] = useState(false);

	return (
		<Container>
			<div className="headline">
				<p>{icon}</p>
				<h1>{title}</h1>
			</div>
			<Wrapper>
				<div className={`${show ? 'overlay active' : 'overlay'}`}>
					<p>Hello There!!</p>
				</div>
				<div>
					<img
						src={image}
						alt="teaching a student"
						onMouseEnter={() => setShow(true)}
					/>
				</div>
				<div className="service-list" onMouseEnter={() => setShow(false)}>
					<p>{content}</p>
					<ol>
						{list &&
							list.map((item, i) => {
								return <li key={i}>{item}</li>;
							})}
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
	box-shadow: 0 0.5rem 1rem black;

	.image {
		position: relative;
	}

	.image img {
		border-bottom-right-radius: 6rem;
		border-bottom-left-radius: 6rem;
		box-shadow: 0 0.2rem 1rem black;
	}

	.overlay {
		position: absolute;
		transform: translateY(-15rem);
		height: 33%;
		width: 28%;
		opacity: 0;
		border-bottom-right-radius: 1rem;
		border-bottom-left-radius: 1.5rem;
		transition: all 0.5s ease-in;
	}

	.active {
		background-image: linear-gradient(
			to top,
			rgba(314, 134, 34, 0.4),
			rgba(314, 134, 34, 0.85)
		);
		transform: translateY(0);
		opacity: 1;
		transition: all 0.5s ease-in;
	}

	.service-list {
		font-size: var(--fs-sm);
		padding: 3rem;
		text-align: center;

		li {
			list-style-type: none;
		}
	}
`;
