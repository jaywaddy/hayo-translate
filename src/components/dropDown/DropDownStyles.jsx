import styled from "styled-components";
import { global } from '../../helpers/styles/GlobalStyle';

export const DropDownContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;

    background: ${global.color.componentLight};
    border-radius: ${global.component.corners};

    width: ${global.cta.width};
    height: ${global.component.height};
    margin-top: ${global.component.margin};
    padding: ${global.component.padding};

    span:not(:nth-child(1)) {
        padding-top: ${global.component.padding};
    }
`;