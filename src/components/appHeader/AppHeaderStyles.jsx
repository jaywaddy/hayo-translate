import styled from "styled-components";

// Styles
import { style } from "../../helpers/styles/GlobalStyle";

export const AppTitle = styled.span`
    display: flex;
    justify-content: center;

    font-weight: bold;
    color: ${ style.color.black };
    margin-top: ${ style.component.margin };
`;