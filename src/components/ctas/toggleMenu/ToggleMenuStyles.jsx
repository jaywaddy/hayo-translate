import styled from "styled-components";
import { global } from "../../../helpers/styles/GlobalStyle";

export const MenuIconContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: ${global.color.componentLight};
    border: none;
    border-radius: ${global.cta.borderRadius};

    width: ${global.cta.height};
    height: ${global.cta.height};

    cursor: pointer;
`;