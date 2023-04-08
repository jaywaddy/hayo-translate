import React, { useState, useReducer, useEffect } from "react";

// Components
import Translator from "../../components/translator/Translator";
import HistoryCard from "../../components/historyCard/HistoryCard";

// Styles
import { ContentContainer as Container } from "../../helpers/styles/GlobalStyle";
import { HistoryContainer } from "./TranslatePageStyles";

// Helpers
import reducer from "../../helpers/reducers/TranslatePageReducer"
import translatorReducer from "../../helpers/reducers/TranslatorReducer";

const DATA = {
    HIS: "TRANSLATE_HISTORY",
    PIN: "PINNED_CARDS"
}

localStorage.setItem(DATA.HIS, []);
localStorage.setItem("PINNED_CUSTOM", []);

export default function TranslatePage() {
    const [state, dispatch] = useReducer(reducer, {
        userHistory: [],
        pinnedHistory: []
    });

    // const [input, setInput] = useState("");
    // const [output, setOutput] = useState("");
    // const [pinnedCards, setPinnedCards] = useState([]);
    const [history, setHistory] = useState([]);
    // const [time, setTime] = useState(0);

    () => {
        const localData = localStorage.getItem(DATA.HIS);
        return localData ? JSON.parse(localData) : [];
    }

    // const cardInfo = {
    //     id: Date.now(),
    //     eng: input,
    //     plc: output,
    //     timeStamp: time
    // }

    const createCard = (entry, key) => {
        // NOTE: grab with state.userHistory[0]
        return (
            <li key={ key }>
                <HistoryCard
                engDisplay={ entry.eng }
                plcDisplay={ entry.plc }
                // cardInfo={ state }
                // pinnedCards={ pinnedCards }
                // setPinnedCards={ setPinnedCards }
                // setHistory={ setHistory }
                />
            </li>
        );
    }

    const DisplayEmptyHistoryMessage = () => {
        return state.userHistory.length === 0 && 
            <Container>
                <span>Favorite translate history items.</span>
            </Container>
    }

    const DisplayHistory = () => {
        return state.userHistory.length > 0
            && state.userHistory.map((entry, key) => createCard(entry, key));
    }

    return (
        <>
        {/* <Translator
        input={ state.input }
        setInput={ dispatch }
        output={ state.output }
        setOutput={ dispatch }
        /> */}
        <Translator />
        <DisplayEmptyHistoryMessage />
        <HistoryContainer>
            <DisplayHistory />
        </HistoryContainer>
        </> 
    );
}
