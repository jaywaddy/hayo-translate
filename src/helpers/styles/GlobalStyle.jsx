import styled, { createGlobalStyle } from "styled-components";

export const style = {
    // Main styles
    component: {
        width: "335px",
        height: "auto",
        navOffset: "115px",

        borderRadius: "20px",

        margin: "15px",
        padding: "20px"
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
        white: "#ffffff",
        disabled: "#a7aeb4",
        black: "#383f46",

        // Components
        input: "#E9EAED",
        pinned: "#E5CC47",
        copy: "#5A92E4",
        delete: "#E58047",
        componentLight: "#eff0f2",
        componentDark: "#525a62"
    }
};

// Containers
export const AppContainer = styled.div`
    display: grid;
    grid-gap: ${ style.component.margin };

    width: 335px;
    height: calc(100% + ${ style.component.navOffset });
    margin: 0 auto ${ style.component.navOffset } auto;
    
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const ContentContainer = styled.div`
    display: grid;
    grid-gap: ${ style.component.margin };

    padding: ${ style.component.padding };

    background: ${ props => 
        props.theme === "pinned" ? style.color.pinned 
        : props.theme === "input" ? style.color.input
        : style.color.componentLight
    };
    border-radius: ${ style.component.borderRadius };
`;

export const ContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
`;

export const ContentFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
`;

export const Input = styled.textarea`
    display: flex;
    width: 100%;
    
    background: none;
    border: 0;

    &::placeholder {
        color: ${ style.color.disabled };
    }

    &:focus {
        outline: none;
    }
`;

// Global styles
const globalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow: none;
    }

    @font-face {
        font-family: "Roboto";
        src: url(../src/assets/fonts/Roboto-Regular.ttf) format("ttf");
    }

    body {
        background: #FFFFFF;
        overflow: none;

        -webkit-tap-highlight-color: transparent;
    }
    
    h1, p, a, li, span, em, textarea, button{
        font-family: "Roboto", Helvetica, sans-serif;
    }

    span, em {
        color: ${ style.color.disabled };
    }

    button {
        border: none;
        background: none;
        color: ${ style.color.black };

        &:focus {
            -webkit-tap-highlight-color: transparent;
            cursor: pointer;
        }
    }

    span, em, input, button {
        font-size: 12px;
    }

    p, textarea {
        font-size: 18px;
        color: ${ style.color.black };
    }

    ul, li , a{
        list-style: none;
        text-decoration: none;
    }

    textarea {
        outline: none;
        resize: none;
    }

    .grid-main {
        grid-area: main;
    }

    .grid-history {
        grid-area: history;
    }
`;

export default globalStyles;