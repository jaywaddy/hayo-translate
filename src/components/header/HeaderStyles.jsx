import styled from 'styled-components';

// Styles
import { global } from "../../helpers/styles/GlobalStyle";

export const AppTitle = styled.span`
    color: ${global.color.disabled};
    margin: ${global.component.padding} 0;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;

    width: ${global.component.width};
    height: ${global.component.height};
    margin-top: ${global.component.padding};
`;

export const CTAContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: ${global.component.width};
    height: ${global.component.height};
    margin-top: ${global.component.padding};
`;