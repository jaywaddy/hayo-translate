import React from 'react';

// Asssets
// import CancelIcon from '../../assets/icons/CancelIcon';

// Helpers
import Data from '../../helpers/scripts/data';

// Styles
import {
    TranslateContainer, 
    ContentWrapper,
    InputContainer, 
    OutputContainer, 
    LanguageHeading, 
    InputCount, 
    CopyCTA, 
    Input, 
    Output,
    TranslateFooter
} from "./TranslateStyles";

export default function Translate() {
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
        userInput.map(inputTerm => {
            const matchCase = (planco, inputString = null) => {
                let output = "";

                // Return the case values for each character for every term
                const getCase = target => {
                    let cases = new Array(0);

                    target.split("").map(character => {
                        return character === character.toLowerCase()
                            ? cases.push(0)  // Lowercase characters
                            : cases.push(1); // Uppercase characters;
                    });
                    
                    return cases;
                }

                const matchCaseValue = getCase(inputString);

                // Create a new planco string with matching case values
                planco.split("").forEach((character, index) => {
                    matchCaseValue[index] === 1
                        ? output += character.toUpperCase()
                        : output += character;
                });

                return output;
            }

            let counter = 0;

            // Iterate through Data to see if any terms match
            return Data.map(entry => {
                const match = entry.eng.toLowerCase();
                const planco = entry.plc;

                // If a match has been found, setOutput to planco term
                inputTerm.toLowerCase() === match || inputTerm === /\W/
                    ? outputString += matchCase(planco, inputTerm)
                    : counter++;

                // If there are no matches, return the user input
                return counter === Data.length
                    ? outputString += inputTerm
                    : null
            });
        });

        setOutput(outputString);
        return <p>{output}</p>;
    }

    return (
        <TranslateContainer>
            <ContentWrapper>
                <LanguageHeading>English</LanguageHeading>
                <InputContainer>
                    <Input 
                    className="user-input" 
                    onChange={getUserInput}
                    value={input}
                    name="textarea"
                    rows="4"
                    maxLength="250">
                        {input}
                    </Input>
                </InputContainer>
                <OutputContainer>
                    <LanguageHeading>Planco</LanguageHeading>
                    <Output>
                        <InputConversion />
                    </Output>
                </OutputContainer>
                <TranslateFooter>
                    <CopyCTA>copy</CopyCTA>
                    <InputCount>{count} / 250</InputCount>
                </TranslateFooter>
            </ContentWrapper>
        </TranslateContainer>
    );
}
