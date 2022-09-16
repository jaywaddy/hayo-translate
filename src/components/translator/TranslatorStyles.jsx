import styled from "styled-components";
import { global } from "../../helpers/styles/GlobalStyle";

export const LanguageHeader = styled.span`
    margin: ${ global.component.margin } 0;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-flow: column;

    background: none;

    width: auto;
    height: auto;
    padding-bottom: ${ global.component.padding };

    border: none;
    border-bottom: solid ${ global.color.disabled } 1px;
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