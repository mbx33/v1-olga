import React from 'react';
import styled from 'styled-components';

function Footer() {
	return (
		<FooterContainer>
			<h2>Footer section</h2>
		</FooterContainer>
	);
}

export default Footer;

const FooterContainer = styled.footer`
	margin-top: 4rem;
	height: 40vh;
	background-image: url('https://www.transparenttextures.com/patterns/brick-wall.png');
	/* background-image: url('https://www.transparenttextures.com/patterns/light-mesh.png'); */
	background-color: var(--secondary-color);
	border-top-left-radius: 5rem;
	border-top-right-radius: 5rem;
`;

// background-image: url("https://www.transparenttextures.com/patterns/brick-wall.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
