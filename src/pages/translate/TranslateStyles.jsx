import styled from 'styled-components';

export const TranslateContainer = styled.div`
    width: 100%;
    min-height: vh;

    .input-content, .output-content {
        flex-direction: column;
    }

    .input-content {
        width: 100%;
    }
`;

export const IntputContainer = styled.div`
    display: flex;
    margin-top: 10px;
`;

export const OutputContainer = styled.div`
    display: flex;

    width: 100%;
    height: auto;
    margin-top: 10px;

    .output-content {
        width: 100%;
    }
`;

export const LanguageHeading = styled.div`
    display: flex;
    justify-content: space-between;

    .cancel-icon {
        cursor: pointer;

        transform: translateX(15px);
    }
`;

export const InputCount = styled.div`
    position: inherit;
    display: flex;
    justify-content: right;

    span {
        text-align: right;
        margin-top: auto;
    }
`;

export const CopyButton = styled.div`
    justify-content: right;

    button {
        transform: translateX(10px);
    }
`;

export const Input = styled.textarea`
    background: none;
    font-size: 20px;

    width: 100%;
    margin-top: 10px;

    border: none;
`;

export const Output = styled.div`
    width: 100%;
    min-height: 100px;

    p {
        overflow-wrap: break-word;
        overflow-y: auto;
        content: '';
    }
`;