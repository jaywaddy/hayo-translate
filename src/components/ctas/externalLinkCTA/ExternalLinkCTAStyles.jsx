import styled from "styled-components";
import { global } from "../../../helpers/styles/GlobalStyle";

export const ExternalLinkContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    background-image: linear-gradient(to right, ${global.color.primary}, #1A4AA3);
    border-radius: ${global.component.corners};

    width: ${global.component.width};
    height: ${global.cta.height};
    margin-top: ${global.component.margin};

    cursor: pointer;
`;

export const LinkText = styled.span`
    color: ${global.color.white};
    margin-right: ${global.component.margin};
`;