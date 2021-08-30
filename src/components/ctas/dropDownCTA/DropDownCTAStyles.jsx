import styled from "styled-components";
import { global } from "../../../helpers/styles/GlobalStyle";

export const DropDownContainer = styled.div`
    display: flex;
    flex-flow: column;

    width: var(--component_width);
`;

export const CTAContainer = styled.button`
    background: ${global.color.componentLight};
    border-radius: ${global.component.corners};
    border: ${props => props.disabled && global.component.disabled};
    color: ${props => props.disabled && global.color.disabled};

    width: var(--cta_width);
    height: ${global.cta.height};
`;

export const Title = styled.span`
    font-weight: bold;
`;