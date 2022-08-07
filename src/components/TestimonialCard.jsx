import React from 'react';
import styled from 'styled-components';

function TestimonialCard(props) {
	const newArr = props.value;

	return (
		<CardContainer>
			{newArr &&
				newArr.map((item, i) => {
					const { name, text } = item;
					return (
						<Card key={i}>
							<blockquote>
								<span>"</span> {text} <span>"</span>
							</blockquote>
							<h3 className="test-name">-{name}</h3>
						</Card>
					);
				})}
		</CardContainer>
	);
}

export default TestimonialCard;

const CardContainer = styled.article`
	background-color: #f4f4f4;
	gap: 3rem;
	display: flex;
`;

const Card = styled.div`
	box-shadow: 0 0.5rem 1rem var(--secondary-color);
	border-radius: 3rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 2rem;
	width: 50%;

	span {
		font-size: var(--fs-reg);
	}

	blockquote {
		margin: 0 auto 2.5rem;
		font-size: var(--fs-sm);
		color: var(--secondary-color);
	}

	.test-name {
		font-size: var(--fs-reg);
		text-align: right;
		font-style: italic;
	}
`;
