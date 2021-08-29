import styled from 'styled-components';

export const CardContainer = styled.div`
    background: var(--color_bg-light);
    border-radius: var(--component_corners);

    padding: var(--component_padding);
`;

export const LanguageInfo = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    
    color: var(--color_disabled);

    &:first-child p {
        color: var(--color_black);
    }

    &:first-child {
        padding-bottom: var(--component_padding);
        border-bottom: solid var(--color_disabled) 1px;
    }

    &:last-child {
        padding-top: var(--component_padding);
    }
`;