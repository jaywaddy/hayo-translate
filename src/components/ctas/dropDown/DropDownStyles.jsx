import styled from "styled-components";
import { global } from "../../../helpers/styles/GlobalStyle";

export const Container = styled.button`
    background: ${global.color.componentLight};
    border-radius: ${global.component.corners};
    border: ${props => props.disabled && global.component.disabled};
    color: ${props => props.disabled && global.color.disabled};

    width: ${global.cta.width};
    height: ${global.cta.height};
`;