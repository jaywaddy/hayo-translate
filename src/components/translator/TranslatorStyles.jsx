import styled from "styled-components";
import { style } from "../../helpers/styles/GlobalStyle";

export const Divider = styled.div`
    border-bottom: solid ${ style.color.disabled } 1px;
`;

export const Output = styled.div`
    width: 100%;
    min-height: 40px;

    p {
        max-width: 295px;
        font-size: 32px;
        overflow-wrap: break-word;
        overflow-x: none;
        overflow-y: auto;
    }
`;