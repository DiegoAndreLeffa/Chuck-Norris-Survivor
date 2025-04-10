import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
	*{
		margin: 0;
        padding: 0; 
        box-sizing: border-box;
	}

	body{
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #121212;
	}
`;