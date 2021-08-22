import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

// Color scheme
export const color = {
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
const GlobalStyle = createGlobalStyle`
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
        background: ${color.lightDefaultElement};

        cursor: pointer;

        &:not(:last-child) {
            border-bottom: solid rgba(0, 0, 0, 0.1) 1px;
        }

        &:hover {
            background: ${color.action};
            color: ${color.white}
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
    .light-theme {
        body {
            background: ${color.lightBackground};
        }

        p, a {
            color: ${color.lightDefaultText};
        }

        span, em, .light {
            color: ${color.lightSecondaryText}
        }

        .component {
            background-color: ${color.lightDefaultElement};
            border-radius: 10px;
        }

        .focus {
            background: ${color.lightFocusElement};

            p, button {
                color: ${color.lightFocusText};
            }

            span, em, button {
                color: ${color.lightFocusSencondaryText};
                border-color: rgba(16, 92, 191, 0.15);
            }
        }
    }

    /* Dark Theme */
    .dark-theme {
        body {
            background: ${color.darkBackground};
            color: ${color.darkDefaultText};
        }

        p, a {
            color: ${color.darkDefaultText};
        }

        span, em {
            color: ${color.darkSecondaryText}
        }

        .component {
            background: ${color.darkDefaultElement};
            border-radius: 10px;

            .cta {
                background: ${color.darkCTA};
            }
        }

        .focus {
            background: ${color.darkFocusElement};

            p {
                color: ${color.darkFocusText}
            }

            span, em {
                color: ${color.darkFocusSencondaryText}
            }
        }
    }
`;

export default GlobalStyle;