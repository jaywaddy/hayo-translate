import styled from "styled-components";
import { style } from "../../helpers/styles/GlobalStyle";

export const Divider = styled.div`
    border-bottom: solid ${ style.color.disabled } 1px;
`;

export const CardHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
`;