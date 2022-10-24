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

export default function TranslateHistory({ timeStamp, english, planco }) {
    const [isFavorited, setIsFavorited] = React.useState(false);
    const englishRef = React.useRef();
    const plancoRef = React.useRef();

    const setAsFavorite = () => {
        // Push data into Local Storage
        console.log(englishRef.current.innerText, plancoRef.current.innerText);
    }

    React.useEffect(() => {
        isFavorited && setAsFavorite();
    }, [isFavorited]);

    return (
        <Container>
            <Header>
                <HistoryInfo>
                    <TimeStamp>{ timeStamp + " sec ago" }</TimeStamp>
                    <FavoriteButton
                    isFavorited={ isFavorited }
                    setIsFavorited={ setIsFavorited }/>
                </HistoryInfo>
                <ClearButton />
            </Header>
            <EnglishText ref={ englishRef }>{ english }</EnglishText>
            <p ref={ plancoRef } >{ planco }</p>
            <Footer>
                <CopyButton value={ planco }/>
                <button onClick={ () => setIsFavorited(() => !isFavorited) }>
                    { isFavorited ? "Unfavorite" : "Favorite" }
                </button>
            </Footer>
        </Container>
    );
}
