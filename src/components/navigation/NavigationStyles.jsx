import styled from 'styled-components';
import { global } from "../../helpers/styles/GlobalStyle";

const navbarWidth = 150;
const navbarHeight = 45;

export const Navbar = styled.ul`
    display: flex;
    flex-direction: row;

    width: ${navbarWidth}px;
    height: ${navbarHeight}px;

    li {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        width: ${ navbarWidth / 2 }px;
        height: 100%;
        font-size: 12px;
        color: ${global.color.textLight};

        &:hover {
            cursor: pointer;
        }
    }

    .nav-translate {
        border-radius: 10px 0 0 10px;
    }

    .nav-glossary {
        border-radius: 0 10px 10px 0;
    }

    .active-link li {
        background: ${global.color.primary};
        color: ${global.color.white};
    }
`;