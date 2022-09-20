import React from "react";

// Styles
import { ContentContainer as Container } from "../../helpers/styles/GlobalStyle";
import { 
    Divider,
    CardHeader as Header
} from "./GlossaryCardStyles";

// Assets
import FavoriteIcon from "../../assets/icons/FavoriteIcon";

export default function EntryCard({ eng, pos, pro, plc }) {
    return (
        <Container>
            <div>
                <Header>
                    <p>{eng}</p>
                    <FavoriteIcon toggle={ false }/>
                </Header>
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
