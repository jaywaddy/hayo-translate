import React, { useRef, useReducer, useEffect } from "react";

// Components
import FavoriteButton from "../favoriteButton/FavoriteButton";
import ClearButton from "../clearButton/ClearButton";
import CopyButton from "../copyButton/CopyButton";

// Styles
import { EnglishText } from "./HistoryCardStyles";
import {
    ContentContainer as Container,
    ContentHeader as Header,
    ContentFooter as Footer
} from "../../helpers/styles/GlobalStyle";

// Helpers
import reducer, { ACTION, initialState } from "../../helpers/reducers/TranslateHistoryReducer";
// import { initialState } from "../../helpers/reducers/TranslatorReducer";

export default function TranslateHistory({ engDisplay, plcDisplay }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const englishRef = useRef();
    const plancoRef = useRef();

    useEffect(() => {
        // TODO: add to pins
        // localStorage.setItem(pinnedItem.id, JSON.stringify(pinnedItem));
        // isPinned && props.setPinnedCards(prev => [props.cardInfo, ...prev]);
        // state.isPinned && 
        dispatch({ 
            type: ACTION.SET_IS_PINNED,
            payload: toggleIsPinned
        });
    }, [state.isPinned]);

    useEffect(() => {
        dispatch({
            type: ACTION.GENERATE_TIME_STAMP,
            payload: {
                timeStamp: state.id
            }
        });
    }, []);

    const clearHistoryEntry = () => {
        // props.setHistory(prev => prev.filter(history => history.eng !== props.engDisplay));
    }

    const toggleIsPinned = () => {
        const pinValues = localStorage.getItem("PINNED_CUSTOM");
        // setIsPinned(prev => !prev);
        // props.setPinnedCards(prev => [pinValues, ...prev]);
    }

    return (
        <Container theme={ state.isPinned && "pinned" }>
            <Header>
                <span>{ state.timeStamp }</span>
                <ClearButton
                clearHistoryEntry={ clearHistoryEntry }
                cancel={ true }/>
            </Header>
            <EnglishText ref={ englishRef }>{ engDisplay }</EnglishText>
            <p ref={ plancoRef }>{ plcDisplay }</p>
            <Footer>
                <CopyButton value={ plcDisplay }/>
                <button onClick={ toggleIsPinned }>{ state.isPinned ? "Unpin" : "Pin" }</button>
            </Footer>
        </Container>
    );
}
