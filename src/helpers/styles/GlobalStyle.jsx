import styled, { createGlobalStyle } from "styled-components";

export const global = { // Replace with something more symantic like: style
    version: "0.2.0", // Can probably be removed

    // Containers
    container: { // Maybe redundant
        margin: "20px",
        padding: "20px",
    },

    // Main styles
    component: {
        width: "335px",
        height: "auto",
        corners: "15px",
        margin: "15px",
        padding: "20px",
        disabled: `dashed 1px #969da3`
    },

    // Buttons
    cta: {
        borderRadius: "100%",
        width: "160px",
        height: "40px"
    },

    // Colors
    color: {
        // Constants
        primary: "#E6C347",
        white: "#ffffff",
        disabled: "#969da3",
        black: "#383f46",

        // Components
        componentLight: "#eff0f2",
        componentDark: "#525a62",

        // Text colors
        textLight: "#383f46",
        textDark: "#ffffff"
    }
};

// Containers
export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;

    overflow: none;

    width: var(--component_width);
    max-height: calc(100% + var(--nav_height));
    padding: 0 var(--component_padding) var(--nav_clearance) var(--component_padding);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-flow: column;

    background: ${ global.color.componentLight };
    border-radius: ${ global.component.corners };

    width: ${ global.component.width };
    margin: ${ global.component.margin } auto 0;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-flow: column;

    margin: 0 ${ global.component.margin };
`;

export const ContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin: ${ global.component.margin } auto 0;
`;

export const ContentFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin: ${ global.component.margin } auto;
`;

// Global styles
const GlobalStyles = createGlobalStyle`
    :root {
        --app-version: "0.2.0";

        --nav_clearance: 115px;
        --nav_width: 120px;
        --nav_height: 95px;

        --color_primary: #0f7ddb;
        --color_white: #ffffff;
        --color_disabled: #969da3;
        --color_black: #20272e;
        --color_bg-light: #eff0f2;
        --color_bg-dark: #525a62;
        --color_frost-light: rgba(255, 255, 255, 0.3);
        --color_frost-dark: rgba(32, 49, 36, 0.3);

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

    @font-face {
        font-family: "Roboto";
        src: url(../src/assets/fonts/Roboto-Regular.ttf) format("ttf");
    }

    body {
        overflow: none;
    }
    
    h1, p, a, li, span, em, textarea, .button{
        font-family: "Roboto", Helvetica, sans-serif;
    }

    span, button {
        color: ${ global.color.disabled };
    }

    button, a {
        border: none;

        &:focus {
            -webkit-tap-highlight-color: transparent;
            cursor: pointer;
        }
    }

    span, em, input, .button {
        font-size: 12px;
    }

    p, textarea, input {
        font-size: 18px;
        color: ${ global.color.black }
    }

    ul, li , a{
        list-style: none;
        text-decoration: none;
    }

    textarea {
        outline: none;
        resize: none;
    }
`;

export default GlobalStyles;