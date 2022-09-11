import styled from 'styled-components';

// Styles
import { global } from "../../helpers/styles/GlobalStyle";

export const AppTitle = styled.span`
    color: ${global.color.disabled};
    margin: ${global.component.padding} 0;
`;

export const HeaderContainer = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center;

    width: var(--component_width);
    height: var(--component_height);
    margin-top: var(--component_margin);
`;

export const CTAContainer = styled.div`
    display: flex;
    align-items: flex-start;

    width: var(--component_width);
    height: var(--component_height);
    margin-top: var(--component_margin);
`;