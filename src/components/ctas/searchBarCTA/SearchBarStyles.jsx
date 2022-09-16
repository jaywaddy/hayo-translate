import styled from "styled-components";
import { style } from "../../../helpers/styles/GlobalStyle";

export const SearchBarContainer = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;

    width: 100%;
    background: ${ style.color.componentLight };
    border-radius: ${ style.component.borderRadius };
    padding: 10px ${ style.component.padding };
`;
