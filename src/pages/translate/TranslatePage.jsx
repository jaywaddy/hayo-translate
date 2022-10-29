import React from "react";

// Components
import Translator from "../../components/translator/Translator";
import TranslateHistory from "../../components/translateHistory/TranslateHistory";

// Styles
import { ContentContainer as Container } from "../../helpers/styles/GlobalStyle";
import { HistoryContainer } from "./TranslatePageStyles";

export default function TranslatePage() {
    const [input, setInput] = React.useState("");
    const [output, setOutput] = React.useState("");
    const [history, setHistory] = React.useState([]);
    const interval = 2000;

    React.useEffect(() => {
        const currentEntry = { eng: input, plc: output }
        const timer = setTimeout(() => {
            // Set state only if currentEnrty doesn't already exist
            input !== "" & !history.some(entry => currentEntry.eng === entry.eng)
                && setHistory(history => [currentEntry, ...history]);
        }, interval);
        
        return () => clearTimeout(timer);
    }, [output]);

    const DisplayEmptyHistoryMessage = () => {
        return history.length === 0 
            ? <Container>
                <span>Favorite translate history items.</span>
            </Container>
            : null;
    }

    const DisplayHistory = () => {
        return history.length > 0
            ? history.map((entry, key) => (
                <li key={ key }>
                    <TranslateHistory 
                    timeStamp={ key }
                    history={ history }
                    setHistory={ setHistory }
                    english={ entry.eng }
                    planco={ entry.plc }/>
                </li>
            ))
            : null;
    }

    return (
        <>
        <Translator
        input={ input }
        setInput={ setInput }
        output={ output }
        setOutput={ setOutput }/>
        <DisplayEmptyHistoryMessage />
        <HistoryContainer>
            <DisplayHistory />
        </HistoryContainer>
        </> 
    );
}
