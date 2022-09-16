import styled from "styled-components";

export const GlossaryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 20px;

	width: var(--component_width);
	height: var(--compnent_height);
	margin-top: var(--component_margin);
`;