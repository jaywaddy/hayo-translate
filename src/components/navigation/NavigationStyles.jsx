import styled from 'styled-components';

export const NavContainer = styled.div`
    position: fixed;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    background: var(--color_frost-light);
    overflow: hidden;

    width: var(--component_width);
    height: var(--nav_height);
    left: 0;
    bottom: 0;

    backdrop-filter: blur(15px);

    .active-link {
        transform: translateY(-8px);

        svg g path:nth-child(2) {
            fill: var(--color_primary);
        }

        svg g g {
            stroke: var(--color_primary);
        }
    }
`;

export const NavLinkContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;

    width: var(--nav_width);
    transform: translateY(5px);

    a:not(:nth-child(2)) {
        margin-right: auto;
    }
`;

export const PageIndicator = styled.div`
    position: absolute;
    content: "";

    background: var(--color_primary);
    border-radius: var(--component_corners);

    width: 35px;
    height: 2px;
    bottom: 0;

    transform: ${props => props.page ? "translateX(140%)" : "translateX(-140%)"};
`;