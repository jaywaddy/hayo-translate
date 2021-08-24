import styled from "styled-components";
import { global } from "../../../helpers/styles/GlobalStyle";

export const MenuIconContainer = styled.button`
    background: ${global.color.componentLight};
    border: none;
    border-radius: ${global.cta.borderRadius};

    width: ${global.cta.height};
    height: ${global.cta.height};

    cursor: pointer;
`;

export const MenuContainer = styled.div`
    position: absolute;

    width: ${global.component.width};
    height: ${global.component.height};

    margin-top: 40px;
    padding: ${global.component.padding} 0;
`;