import React, { useState, useReducer, useEffect } from "react";

// Components
import Translator from "../../components/translator/Translator";
import HistoryCard from "../../components/historyCard/HistoryCard";

// Styles
import { ContentContainer as Container } from "../../helpers/styles/GlobalStyle";
import { HistoryContainer } from "./TranslatePageStyles";

// Helpers
import reducer, { ACTION, initialState } from "../../helpers/reducers/TranslatePageReducer"

export default function TranslatePage() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem(ACTION.HISTORY, JSON.stringify(state.history));
        localStorage.setItem(ACTION.PINNED_HISTORY, JSON.stringify(state.pinnedHistory));
    }, []);

    const createCard = entry => {
        // TODO: Figure out how to post each card with separate info (can use it's own key)
        // NOTE: grab with state.history[0]
        const generateTimeStamp = () => {
            return "0 sec ago";
        }
        return (
            <li key={ entry.id }> {/* Grab key from localStorage */}
                <HistoryCard
                // timeStamp={() => generateTimeStamp()}
                engDisplay={ entry.inputValue } /* Grab from localStorage */
                plcDisplay={ entry.outputValue } /* Grab from localStorage */
                />
            </li>
        );
    }

    const DisplayEmptyHistoryMessage = () => {
        return state.history.length === 0 && (
            <Container>
                <span>Favorite translate history items.</span>
            </Container>
        );
    }

    const DisplayHistory = () => {
        return state.history.length > 0 && (
            state.history.map(entry => createCard(entry))
        );
    }

    return (
        <>
        <Translator
        hisDispatch={ dispatch }
        hisState={ state }
        />
        <DisplayEmptyHistoryMessage />
        <HistoryContainer>
            <DisplayHistory />
        </HistoryContainer>
        </> 
    );
}
