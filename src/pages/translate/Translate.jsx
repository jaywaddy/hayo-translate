import React from 'react';

// SVGs
import CancelIcon from '../../assets/icons/CancelIcon';

// Scripts
import Data from '../../helpers/scripts/data';

// Styles
import {
    TranslateContainer, 
    IntputContainer, 
    OutputContainer, 
    LanguageHeading, 
    InputCount, 
    CopyButton, 
    Input, 
    Output
} from "./TranslateStyles";

export default function Translate(props) {
    const [input, setInput] = React.useState("");
    const [output, setOutput] = React.useState("");
    const [count, setCount] = React.useState(0);

    const getUserInput = event => {
        setInput(event.target.value);
        setCount(event.target.textLength);
    }

    const InputConversion = () => {
        let userInput = input.split(/(\W+|\s)/);
        let outputString = "";

        // Iterate through user input to isolate earch term
        userInput.map(input => {
            const inputText = input.toLowerCase();
            let counter = 0;

            // Iterate through Data to see if terms match
            return Data.map(entry => {
                const match = entry.eng.toLowerCase();
                const planco = entry.plc;

                // If a match has been found, setOutput to term
                inputText === match ?
                    outputString += planco
                    : inputText === /\W/ ?
                        outputString += planco
                        : counter++;

                // If there are no matches, return the input
                return counter === Data.length ?
                    outputString += inputText
                    : null
            });
        });

        setOutput(outputString);
        return <p>{output}</p>;
    }

    return (
        <>
        <TranslateContainer className="translate-page-content">
            <IntputContainer className="input component">
                <div className="input-content content">
                    <LanguageHeading>
                        <span>English</span>
                        <div className="cancel-icon cta" onClick={() => setInput(() => "")}><CancelIcon/></div>
                    </LanguageHeading>
                    <Input 
                    className="user-input" 
                    onChange={getUserInput}
                    value={input}
                    name="textarea"
                    rows="4"
                    maxLength="250">
                        {input}
                    </Input>
                    <InputCount className="input-counter">
                        <span>{count} / 250</span>
                    </InputCount>
                </div>
            </IntputContainer>
            <OutputContainer className="output component focus">
                <div className="output-content content">
                    <LanguageHeading>
                        <span>Planco</span>
                    </LanguageHeading>
                    <Output>
                        <InputConversion/>
                    </Output>
                    <CopyButton>
                        <button className="cta">Copy</button>
                    </CopyButton>
                </div>
            </OutputContainer>
        </TranslateContainer>
        </>
    );
}
