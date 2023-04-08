import React, { useRef, useReducer, useEffect } from "react";

// Components
import FavoriteButton from "../favoriteButton/FavoriteButton";
import ClearButton from "../clearButton/ClearButton";
import CopyButton from "../copyButton/CopyButton";

// Styles
import { 
    TimeStamp,
    EnglishText
} from "./HistoryCardStyles";

import {
    ContentContainer as Container,
    ContentHeader as Header,
    ContentFooter as Footer
} from "../../helpers/styles/GlobalStyle";

// Helpers
import reducer, { ACTION } from "../../helpers/reducers/HistoryCardReducer";

export default function TranslateHistory({ ...props }) {
    // const [isPinned, setIsPinned] = useState(false);
    const [state, dispatch] = useReducer(reducer, {
        id: 0,
        eng: "",
        plc: "",
        timeStamp: "",
        isPinned: false
    });
    const englishRef = useRef();
    const plancoRef = useRef();

    useEffect(() => {
        // pinnedCards.length > 0 
        //     && localStorage.setItem("PINNED_CUSTOM", JSON.stringify(pinnedCards));
    }, [props.pinnedCards]);

    useEffect(() => {
        // TODO: add to pins
        // localStorage.setItem(pinnedItem.id, JSON.stringify(pinnedItem));
        // isPinned && props.setPinnedCards(prev => [props.cardInfo, ...prev]);
        state.isPinned && dispatch({ type: ACTION.IS_PINNED, payload: toggleIsPinned });
    }, [state.isPinned]);

    const clearHistoryEntry = () => {
        props.setHistory(prev => prev.filter(history => history.eng !== props.engDisplay));
    }

    const toggleIsPinned = () => {
        const pinValues = localStorage.getItem("PINNED_CUSTOM");
        setIsPinned(prev => !prev);
        props.setPinnedCards(prev => [pinValues, ...prev]);
    }

    return (
        <Container theme={ isPinned && "pinned" }>
            <Header>
                <TimeStamp>{ state.timeStamp }</TimeStamp>
                <ClearButton
                clearHistoryEntry={ clearHistoryEntry }
                cancel={ true }/>
            </Header>
            <EnglishText ref={ englishRef }>{ props.engDisplay }</EnglishText>
            <p ref={ plancoRef }>{ props.plcDisplay }</p>
            <Footer>
                <CopyButton value={ props.plcDisplay }/>
                <button onClick={ toggleIsPinned }>{ isPinned ? "Unpin" : "Pin" }</button>
            </Footer>
        </Container>
    );
}
