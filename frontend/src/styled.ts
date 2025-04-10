import styled from "styled-components";

export const AppStayled = styled.div`
	background-color: #121212;
	color: #fff;
	font-family: 'Courier New', monospace;
	text-align: center;
	padding: 2rem;
	min-height: 100vh;

	.Button{
		background-color: #e63946;
		border: none;
		color: white;
		padding: 1rem 2rem;
		font-size: 1.2rem;
		cursor: pointer;
		border-radius: 8px;
		margin-top: 2rem;
		margin-bottom: 2rem;
		transition: 0.3s;

		&:hover {
			background-color: #ff4d6d;
		}
	}

	.Card {
		background-color: #1f1f1f;
		padding: 2rem;
		border-radius: 12px;
		max-width: 500px;
		margin: 0 auto;
	}

	.Img {
		border-radius: 50%;
  		margin-bottom: 1rem;
	}
`