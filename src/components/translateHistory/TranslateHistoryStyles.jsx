import styled from "styled-components";
import { global } from "../../helpers/styles/GlobalStyle";

// Header
export const HistoryInfo = styled.div`
    display: flex;
    align-items: center;

    color: ${ global.color.disabled };
`;

export const TimeStamp = styled.span`
    margin-right: 15px;
`;

// Body
export const EnglishText = styled.p`
    color: ${ global.color.disabled };
    margin-top: ${ global.component.margin };
`;

export const PlancoText = styled.p`
    margin-top: ${ global.component.margin };
`;

// Create favorite toggle component
export const FavoriteToggle = styled.button`
    font-size: 12px;
    color: ${ global.color.disabled };
`;