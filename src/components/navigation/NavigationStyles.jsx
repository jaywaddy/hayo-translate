import styled from 'styled-components';

export const NavContainer = styled.ul`
    position: fixed;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    background-image: url("../../assets/images/navbg.png");
    box-shadow: 0 3px 50px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    /* border: solid blue 1px; */

    width: var(--component_width);
    height: 95px;
    left: 0;
    bottom: 0;

    .active-link {
        svg g path:nth-child(2) {
            fill: var(--color_primary);
        }

        svg g g {
            stroke: var(--color_primary);
        }
    }

    &:before {
        position: absolute;
        content: "";

        background: inherit;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: -20px;

        /* box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5); */
        /* filter: blur(10px); */
        backdrop-filter: blur(10px);
        z-index: -1;
    }
`;

export const NavLinkContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: var(--nav_width);
`;

export const Text = styled.li`
    position: relative;

    font-size: 12px;
    color: var(--color_primary);

    transform: ${props => props.active ? "translateX(100%)" : "translateX(-100%)"};
    
    &:hover {
        cursor: pointer;
    }
`;