import styled from "styled-components";
import { global } from "../../../helpers/styles/GlobalStyle";

export const Container = styled.button`
    background: ${global.color.componentLight};
    border: none;
    border-radius: ${global.component.corners};

    width: ${global.cta.width};
    height: ${global.cta.height};
`;