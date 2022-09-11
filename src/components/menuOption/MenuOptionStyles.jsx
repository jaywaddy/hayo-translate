import styled from "styled-components";
import { global } from "../../helpers/styles/GlobalStyle";

export const MenuOptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${global.color.componentLight};
    border: ${props => props.disabled && global.component.disabled};
    border-radius: ${global.component.corners};
    color: ${props => props.disabled && global.color.disabled};

    margin-top: ${global.component.margin};
    width: ${global.component.width};
    height: ${global.cta.height};
    padding: 0 6px 0 ${global.component.padding};
`;