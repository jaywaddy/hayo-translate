import styled from "styled-components";
import { global } from "../../helpers/styles/GlobalStyle";

export const MenuContainer = styled.div`
    width: ${global.component.width};
    height: ${global.component.height};
`;

export const MenuOptionsContainer = styled.div`
    display: flex;
    flex-flow: column;
`;