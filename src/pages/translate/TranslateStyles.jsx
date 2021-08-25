import styled from 'styled-components';
import { global } from '../../helpers/styles/GlobalStyle';

export const TranslateContainer = styled.div`
    display: flex;
    flex-flow: column;

    background: ${global.color.componentLight};
    border-radius: ${global.component.corners};

    width: ${global.component.width};
    height: ${global.component.height};
    margin-top: ${global.component.margin};
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-flow: column;

    margin: 0 ${global.component.margin};
`;

export const LanguageHeading = styled.span`
    color: ${global.color.disabled};
    margin: ${global.component.margin} 0;
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
    font-size: 20px;

    border: none;
`;

export const OutputContainer = styled.div`
    display: flex;
    flex-flow: column;

    /* margin-top: ; */
`;

export const Output = styled.p`
    width: 100%;
    min-height: 100px;

    p {
        overflow-wrap: break-word;
        overflow-y: auto;
        content: '';
    }
`;

export const TranslateFooter = styled.div`
    display: flex;

    margin-top: ${global.component.margin};
`;

export const CopyCTA = styled.span`
    color: ${global.color.disabled};
`;

export const InputCount = styled.span`
    display: flex;
    align-items: right;

    color: ${global.color.disabled};
    margin: 0 ${global.component.margin} ${global.component.margin} auto;
`;


