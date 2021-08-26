import styled from 'styled-components';
import { global } from "../../helpers/styles/GlobalStyle";

export const Navbar = styled.ul`
    position: fixed;
    display: flex;

    background: ${global.color.white};

    width: ${global.component.width};
    height: 95px;
    left: 0;
    bottom: 0;

    .active-link li {
        background: ${global.color.primary};
        color: ${global.color.white};
    }
`;

export const Link = styled.li`
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    font-size: 12px;
    color: ${global.color.textLight};

    width: 50vw;
    height: 100%;
    
    &:hover {
        cursor: pointer;
    }
`;