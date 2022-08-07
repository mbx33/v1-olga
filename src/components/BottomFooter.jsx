import React from 'react';
import styled from 'styled-components';

import image from '../assets/do-something.jpg';

function BottomFooter() {
	return (
		<Wrapper>
			<div className="footer-img">
				<img src={image} alt="footer image" />
			</div>
		</Wrapper>
	);
}

export default BottomFooter;

const Wrapper = styled.div`
	height: 10%;

	.footer-img {
		height: 15rem;
		width: 100%;

		img {
			width: 100%;
			height: 100%;
		}
	}
`;
