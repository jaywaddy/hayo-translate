import styled from "styled-components";
import { style } from "../../helpers/styles/GlobalStyle";

export const NavContainer = styled.nav`
    position: fixed;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;

    width: 100%;
    height: 95px;

    left: 0;
    bottom: 0;

    backdrop-filter: blur(15px);

    .active-link {
        svg rect {
            stroke: ${ style.color.black };
        }

        svg path:nth-child(2) {
            user-select: none;
            fill: ${ style.color.black };
        }
    }
`;

export const NavLinkContainer = styled.ul`
    position: relative;
    display: flex;
    justify-content: space-between;

    width: 120px;
    transform: translateY(5px);

    a:not(:nth-child(2)) {
        margin-right: auto;
    }

    li {
        user-select: none;
    }
`;