import styled from 'styled-components';

export const GlossaryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 20px;

	width: var(--component_width);
	height: var(--compnent_height);
	margin-top: var(--component_margin);
`;

export const LetterSearch = styled.div`
	width: 90px;
	margin: 10px auto 0 auto;

	.letter-dropdown {
		display: flex;
		align-items: center;
	}
`;

export const GlossaryContent = styled.div`
	overflow-y: scroll;
	margin-bottom: 10px;

	max-height: 68vh;
`;

export const LinksContainer = styled.div`
	margin-top: 10px;
`;

export const DropDownContainer = styled.div`
	position: relative;
	margin-top: 10px;

	button {
		margin-left: 7px;
	}

	.component {
		display: flex;
		align-items: center;

		width: 90px;
		height: 45px;
	}

	.active-letter {
		margin-left: auto;
	}
`;

export const ListContainer = styled.ul`
    position: absolute;

    width: 90px;
    max-height: 80vw;
	margin-top: 10px;

    overflow-y: scroll;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
`;