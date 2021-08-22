import styled from 'styled-components';

export const CardContainer = styled.div`
    cursor: pointer;
    margin-bottom: 10px;

    .content {
        flex-direction: column;
        padding: 10px 15px;

        margin: 0;
    }
`;

export const EnglishInfo = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
`;

export const PlancoInfo = styled.div`
    width: 100%;
    margin-top: 10px;

    border-top: solid rgba(0, 0, 0, 0.15) 1px;

    p {
        margin-top: 10px;
    }
`;