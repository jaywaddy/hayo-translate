import styled from "styled-components";
import { style } from "../../helpers/styles/GlobalStyle";

export const SearchBarContainer = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 14px auto 14px;
    grid-gap: ${ style.component.margin };

    width: 100%;
    background: ${ style.color.componentLight };
    border-radius: ${ style.component.borderRadius };
    padding: 10px ${ style.component.padding };
`;
