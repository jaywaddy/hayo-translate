import styled from "styled-components";

export const DropDownContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: var(--component_margin);

    width: var(--component_width);
    margin-top: var(--component_margin);
`;

export const Menu = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;

    background: var(--color_bg-light);
    border-radius: var(--component_corners);

    width: var(--component_width);
    padding: var(--component_padding);
`;

export const MenuText = styled.span`
    display: flex;
    justify-content: center;

    color: ${props => props.disabled === true && "var(--color_disabled)"};
    width: 20px;

    cursor: pointer;

    &:not(:nth-child(1)) {
        margin-top: var(--component_margin);
    }
`;