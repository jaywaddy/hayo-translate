import styled from "styled-components";
import { style } from "../../../helpers/styles/GlobalStyle";

export const Button = styled.button`
    border: none;
    background: none;
    text-decoration: none;

    font-size: 12px;
    color: ${ style.color.disabled };
`;