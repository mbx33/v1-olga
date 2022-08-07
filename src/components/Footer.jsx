import React from 'react';
import styled from 'styled-components';

function Footer() {
	return (
		<FooterContainer>
			<div className="link-container">
				<ul className="grid-container">
					<li>Insta</li>
					<li>Facebook</li>
					<li>VK</li>
					<li>Tik TOk</li>
					<li>Whatsapp</li>
				</ul>
				<ul className="grid-container">
					<li>first link</li>
					<li>second link</li>
					<li>third link</li>
					<li>fourth link</li>
				</ul>
			</div>
		</FooterContainer>
	);
}

export default Footer;

const FooterContainer = styled.footer`
	margin-top: 4rem;
	height: 40vh;
	background-image: url('https://www.transparenttextures.com/patterns/light-mesh.png');
	background-color: var(--secondary-color);
	border-top-left-radius: 5rem;
	border-top-right-radius: 5rem;

	.link-container {
		width: 50%;
		margin: 0 auto;
	}

	.grid-container {
		padding-top: 4rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-start: 2;
		row-gap: 3rem;

		li {
			list-style-type: none;
			font-size: var(--fs-sm);
		}
	}
`;
