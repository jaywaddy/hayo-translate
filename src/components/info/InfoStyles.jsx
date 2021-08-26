import styled from "styled-components";
import { global } from "../../helpers/styles/GlobalStyle";

export const InfoContainer = styled.div`
    display: flex;
    flex-flow: column;

    background: ${global.color.componentLight};
    border-radius: ${global.component.corners};

    text-align: center;

    width: ${global.component.width};
    height: ${global.component.height};
    margin-top: ${global.component.margin};
    padding: ${global.component.padding};
`;

export const Text = styled.span`
    color: ${global.color.disabled};
    
    &:not(:first-child) {
        margin-top: 14px;
    }
`;