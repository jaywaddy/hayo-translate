import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const global = {
    version: "0.2.0"
};

global.component = {
    width: "100%",
    height: "auto",
    corners: "20px",
    margin: "20px",
    padding: "20px",
    disabled: `dashed 1px #969da3`
}

global.cta = {
    borderRadius: "100%",
    width: "160px",
    height: "40px"
}

// Color
global.color = {
    // Constants
    primary: '#0f7ddb',
    white: '#ffffff',
    disabled: '#969da3',
    black: '#20272e',

    // Components
    componentLight: '#eff0f2',
    componentDark: '#525a62',

    // Text colors
    textLight: '#20272e',
    textDark: '#ffffff'
}

// Containers
export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;

    overflow: none;

    width: var(--component_width);
    max-height: calc(100% + 95px);
    padding: 0 var(--component_padding) var(--nav_clearance) var(--component_padding);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

// Global styles
const GlobalStyles = createGlobalStyle`
    :root {
        --app-version: "0.2.0";

        --nav_clearance: 115px;

        --color_primary: #0f7ddb;
        --color_white: #ffffff;
        --color_disabled: #969da3;
        --color_black: #20272e;
        --color_bg-light: #eff0f2;
        --color_bg-dark: #525a62;

        --component_width: 100%;
        --component_height: auto;
        --component_corners: 20px;
        --component_margin: 20px;
        --component_padding: 20px;
        --component_disabled-border: dashed var(--color_disabled) 1px;

        --cta_width: 160px;
        --cta_height: 40px;
        --cta_corners: 100%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        overflow: none;
    }
    
    /* Defaul text */
    h1, p, a, li, span, em, textarea, .button{
        font-family: Arial, Helvetica, sans-serif;
    }

    button, a {
        border: none;

        &:focus {
            -webkit-tap-highlight-color: transparent;
        }
    }

    span, em, input, .button {
        font-size: 12px;
    }

    p, textarea {
        font-size: 20px;
    }

    ul, li , a{
        list-style: none;
        text-decoration: none;
    }

    textarea {
        outline: none;
        resize: none;
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

    /* Light Theme */

    /* Dark Theme */
`;

export default GlobalStyles;