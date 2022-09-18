import React from "react";

// Components
import FavoriteIcon from "../../assets/icons/FavoriteIcon";
import ClearButton from "../clearButton/ClearButton";
import CopyButton from "../copyButton/CopyButton";

// Styles
import { 
    HistoryInfo,
    TimeStamp,
    EnglishText
 } from "./TranslateHistoryStyles";
 
import {
    ContentContainer as Container,
    ContentHeader as Header,
    ContentFooter as Footer
} from "../../helpers/styles/GlobalStyle";

export default function TranslateHistory({ timeStamp, english, planco }) {
    return (
        <Container>
            <Header>
                <HistoryInfo>
                    <TimeStamp>{ timeStamp + " sec ago" }</TimeStamp>
                    <FavoriteIcon toggle={ true }/>
                </HistoryInfo>
                <ClearButton />
            </Header>
                <EnglishText>{ english }</EnglishText>
                <p>{ planco }</p>
            <Footer>
                <CopyButton value={ planco }/>
                <button>Unfavorite</button>
            </Footer>
        </Container>
    );
}
