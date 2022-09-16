import styled from "styled-components";
import { style } from "../../helpers/styles/GlobalStyle";

export const HistoryInfo = styled.div`
    display: flex;
    align-items: center;

    color: ${ style.color.disabled };
`;

export const TimeStamp = styled.span`
    margin-right: 15px;
`;

export const EnglishText = styled.p`
    color: ${ style.color.disabled };
`;
