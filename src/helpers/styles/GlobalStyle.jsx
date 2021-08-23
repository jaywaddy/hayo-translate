import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const global = {};

// Constants
global.component = {
    corners: `${20}px`,
    padding: `${20}px`
}

global.cta = {
    borderRadius: "100%",
    width: `${160}px`,
    height: `${40}px`
}

// Color
global.color = {
    // Constants
    primary: '#0f7ddb',
    white: '#ffffff',
    black: '#20272e',

    // Components
    componentLight: '#eff0f2',
    componentDark: '#525a62',

    // Text colors
    textLight: '#20272e',
    textDark: '#ffffff',
    textDeselected: '#969da3'
}

// Containers
export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 90%;
    height: 100vh;
    margin: 0 auto;
`;

// Global styles
const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        overflow: none scroll;
    }
    
    /* Defaul text */
    h1, p, a, li, span, em, textarea, .button{
        font-family: Arial, Helvetica, sans-serif;
    }

    span, em, input, .button {
        font-size: 12px;
    }

    p, textarea {
        font-size: 20px;
        font-weight: bold;
    }

    p {
        margin-right: 5px;
    }

    ul, li , a{
        list-style: none;
        text-decoration: none;
    }

    textarea {
        outline: none;
        resize: none;
    }

    /* CTA */


    /* Content wrapper */
    .content {
        margin: 15px;
    }

    /* List items */
    .list-item {
        display: flex;
        flex-direction: row;
		align-items: center;

        height: 45px;
		margin-left: 15px;
        margin-bottom: 10px;
	}

    .drop-down {
        text-align: center;

        width: 90px;
        padding: 15px;
        background: ${global.color.lightDefaultElement};

        cursor: pointer;

        &:not(:last-child) {
            border-bottom: solid rgba(0, 0, 0, 0.1) 1px;
        }

        &:hover {
            background: ${global.color.action};
            color: ${global.color.white}
        }
    }

    /* Icons */
    .icon {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 25px;
        height: 25px;

        cursor: pointer;
    }

    /* Light Theme */

    /* Dark Theme */
`;

export default GlobalStyles;