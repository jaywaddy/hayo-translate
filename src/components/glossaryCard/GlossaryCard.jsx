import React from "react";

// Styles
import { Divider } from "./GlossaryCardStyles";

import { ContentContainer as Container } from "../../helpers/styles/GlobalStyle"

export default function EntryCard({ eng, pos, pro, plc }) {
    return (
        <Container>
            <div>
                <p>{eng}</p>
                <em>{pos}</em>
            </div>
            <Divider />
            <div>
                <p>{plc}</p>
                <em>{pro}</em>
            </div>
        </Container>
    );
}
