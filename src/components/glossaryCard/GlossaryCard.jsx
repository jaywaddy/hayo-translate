import React from 'react';

// Styles
import {
    CardContainer,
    LanguageInfo
} from './GlossaryCardStyles';

export default function EntryCard({ eng, pos, pro, plc }) {
    return (
        <CardContainer>
            <LanguageInfo>
                <p>{eng}</p>
                <em>{pos}</em>
            </LanguageInfo>
            <LanguageInfo>
                <p>{plc}</p>
                <em>{pro}</em>
            </LanguageInfo>
        </CardContainer>
    );
}
