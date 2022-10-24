import React from "react";

// Components
import Translator from "../../components/translator/Translator";
import TranslateHistory from "../../components/translateHistory/TranslateHistory";
import { ContentContainer as Container } from "../../helpers/styles/GlobalStyle";

export default function TranslatePage() {
    const [history, setHistory] = React.useState([]);

    const DisplayEmptyHistoryMessage = () => {
        return history.length === 0 && (
            <Container>
				<span>Favorite translate history items.</span>
			</Container>
        );
    }

    const DisplayHistory = () => {
        console.log(history)
        return history.map(entry => {
            <TranslateHistory 
            timeStamp={ 1 }
            english={ entry.eng }
            planco={ entry.plc }/>
        });
    }

    return (
        <>
        <Translator setHistory={ setHistory }/>
        <DisplayEmptyHistoryMessage />
        <DisplayHistory />
        </> 
    );
}
