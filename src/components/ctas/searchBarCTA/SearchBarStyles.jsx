import styled from "styled-components";

export const SearchBarContainer = styled.div`
    display: flex;
    flex-flow: row;
    align-content: center;

    width: 100%;
    background: var(--color_bg-light);
    border-radius: var(--component_corners);
    padding: 10px var(--component_padding);

`;

export const Input = styled.input`
    width: 100%;
    background: none;
    border: 0;

    &:focus {
        outline: none;
    }
`;