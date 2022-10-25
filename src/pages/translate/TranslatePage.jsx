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
        const timer = setTimeout(() => {
            input !== ""
            && setHistory(history => [...history, { eng: input, plc: output }]);
        }, interval);
        
        return () => clearTimeout(timer);
    }, [output]);

    const DisplayEmptyHistoryMessage = () => {
        return history.length === 0 && (
            <Container>
				<span>Favorite translate history items.</span>
			</Container>
        );
    }

    const DisplayHistory = () => {
        return history.length > 0
        && history.reverse().map((entry, key) => (
            entry.eng !== "" && (
                <li key={ key }>
                    <TranslateHistory 
                    timeStamp={ 1 }
                    setHistory={ setHistory }
                    english={ entry.eng }
                    planco={ entry.plc }/>
                </li>
            )
        ));
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
