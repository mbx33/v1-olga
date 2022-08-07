// import React, { useState } from 'react';
import styled from 'styled-components';

function ServiceCard({ title, icon, image, content, list }) {
	// const [show, setShow] = useState(false);

	return (
		<Container>
			<div className="headline">
				<p>{icon}</p>
				<h1>{title}</h1>
			</div>
			<Wrapper>
				{/* <div className={`${show ? 'overlay active' : 'overlay'}`}>
					<p>Hello There!!</p>
				</div> */}
				<div>
					<img src={image} alt="teaching a student" />
				</div>
				<div className="service-list">
					<p>{content}</p>
					<ol>
						{list &&
							list.map((item, i) => {
								return <li key={i}>{item}</li>;
							})}
					</ol>
				</div>
				<div className="contact-btn">
					<button className="btn">Contact Me</button>
				</div>
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
	color: var(--text-color);
	box-shadow: 0 0.5rem 1rem var(--secondary-color);
	transition: all 0.7s ease-in-out;
	border-bottom-left-radius: 4.5rem;
	border-bottom-right-radius: 4.5rem;

	img {
		border-bottom-right-radius: 6rem;
		border-bottom-left-radius: 6rem;
		box-shadow: 0 0.2rem 1rem black;
	}

	.overlay {
		position: absolute;
		transform: translateY(-25rem);
		height: 33%;
		width: 28%;
		opacity: 0;
		border-bottom-right-radius: 1rem;
		border-bottom-left-radius: 1.5rem;
		transition: all 0.7s ease-in;
	}

	.active {
		background-image: linear-gradient(
			to top,
			rgba(314, 134, 34, 0.4),
			rgba(314, 134, 34, 0.85)
		);
		transform: translateY(0);
		opacity: 1;
		transition: all 0.7s ease-in;
		border-bottom-right-radius: 6rem;
		border-bottom-left-radius: 6rem;
	}

	.service-list {
		font-size: var(--fs-sm);
		padding: 3rem;
		text-align: center;

		li {
			list-style-type: none;
		}
	}

	.contact-btn {
		display: flex;
		justify-content: center;
		padding: 1rem;

		button {
			margin-bottom: 1rem;
			padding: 1rem 2rem;
		}
	}
`;
