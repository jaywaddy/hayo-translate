import styled from "styled-components";
import { global } from "../../helpers/styles/GlobalStyle";


export const BlankComponentContainer = styled.div`
    width: 100%;
    height: auto;

    background: ${global.color.componentLight};
    border-radius: ${global.borderRadius}px;
    padding: ${global.padding};

    // Text Styles
`;