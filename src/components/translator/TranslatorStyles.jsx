import styled from "styled-components";
import { global } from "../../helpers/styles/GlobalStyle";

export const TranslateContainer = styled.div`
    display: flex;
    flex-flow: column;

    background: ${global.color.componentLight};
    border-radius: ${global.component.corners};

    /* width: ${global.component.width}; */
    width: 335px; /* create container constant */
    /* height: ${global.component.height}; */
    margin: ${global.component.margin} auto;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-flow: column;

    margin: 0 ${global.component.margin};
`;

export const TranslatorHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LanguageHeading = styled.span`
    font-size: 11px;
    color: ${global.color.disabled};
    margin: ${global.component.margin} 0;
`;

export const CancelIcon = styled.button` // Create constant in globals
    svg g line {
        stroke: ${global.color.black};
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-flow: column;

    background: none;

    width: auto;
    height: auto;
    padding-bottom: ${global.component.padding};

    border: none;
    border-bottom: solid ${global.color.disabled} 1px;
`;

export const Input = styled.textarea`
    background: none;
    font-size: 16px;
    height: "auto";
    border: none;
`;

export const OutputContainer = styled.div`
    display: flex;
    flex-flow: column;
`;

export const Output = styled.div`
    width: 100%;
    min-height: 70px;

    p {
        font-size: 32px;
        overflow-wrap: break-word;
        overflow-y: auto;
        content: "";
    }
`;

export const TranslateFooter = styled.div`
    display: flex;

    margin-top: ${global.component.margin};
`;

export const CopyCTA = styled.span`
    color: ${global.color.disabled};
    cursor: pointer;
`;

export const InputCount = styled.span`
    display: flex;
    align-items: right;

    color: ${global.color.disabled};
    margin: 0 0 ${global.component.margin} auto;
`;