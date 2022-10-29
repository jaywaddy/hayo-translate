import React from "react";

// Components
import FavoriteButton from "../favoriteButton/FavoriteButton";
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

export default function TranslateHistory({ timeStamp, english, planco, history, setHistory }) {
    const [isFavorited, setIsFavorited] = React.useState(false);
    const englishRef = React.useRef();
    const plancoRef = React.useRef();

    const DisplaySetAsFavorite = () => {
        // Push data into Local Storage
        return isFavorited ? "Unfavorite" : "Favorite";
    }

    const clearHistoryEntry = () => {
        setHistory(prev => prev.filter(history => history.eng !== english));
    }

    return (
        <Container>
            <Header>
                <HistoryInfo>
                    <TimeStamp>{ timeStamp + " sec ago" }</TimeStamp>
                    <FavoriteButton
                    isFavorited={ isFavorited }
                    setIsFavorited={ setIsFavorited }/>
                </HistoryInfo>
                <ClearButton
                clearHistoryEntry={ clearHistoryEntry }
                cancel={ true }/>
            </Header>
            <EnglishText ref={ englishRef }>{ english }</EnglishText>
            <p ref={ plancoRef } >{ planco }</p>
            <Footer>
                <CopyButton value={ planco }/>
                <button onClick={ () => setIsFavorited(() => !isFavorited) }>
                    <DisplaySetAsFavorite />
                </button>
            </Footer>
        </Container>
    );
}
