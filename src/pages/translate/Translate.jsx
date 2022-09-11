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

    const copyOutput = target => {
        navigator.clipboard.writeText(target);
    }

    const getUserInput = event => {
        setInput(event.target.value);
        setOutput(getOutputString(event));
        setCount(event.target.textLength);
    }

    const getOutputString = event => {
        const userInput = event.target.value.split(/(\W+|\s)/);
        let outputString = "";

        userInput.map(inputTerm => {
            let counter = 0;
            
            const calcPlancoCase = (planco, inputString) => {
                let plancoOutput = "";

                // Return the case values for each character for every term
                const getCase = target => {
                    let cases = [];

                    target.split("").map((character, index) => {
                        return character === character.toLowerCase()
                            ? cases.push(false)  // Lowercase characters
                            : cases.push(true); // Uppercase characters
                    });

                    return cases;
                }

                const matchCaseValue = getCase(inputString);

                // Create a new planco string with matching case values
                planco.split("").forEach((character, index) => {
                    matchCaseValue[index]
                        ? plancoOutput += character.toUpperCase()
                        : plancoOutput += character;
                });

                return plancoOutput;
            }

            // Iterate through Data to see if any terms match
            return Data.map(entry => {
                const match = entry.eng.toLowerCase();
                const planco = entry.plc;

                // If a match has been found, set output to planco term
                inputTerm.toLowerCase() === match || inputTerm === /\W/
                    ? outputString += calcPlancoCase(planco, inputTerm)
                    : counter++;

                // If there are no matches, return the user input
                return counter === Data.length
                    ? outputString += inputTerm
                    : null
            });
        });

        return outputString;
    }

    return (
        <TranslateContainer>
            <ContentWrapper>
                <LanguageHeading>English</LanguageHeading>
                <InputContainer>
                    <Input 
                    type="text"
                    className="user-input" 
                    value={input}
                    onChange={getUserInput}
                    name="textarea"
                    rows="4"
                    maxLength="250">
                        {input}
                    </Input>
                </InputContainer>
                <OutputContainer>
                    <LanguageHeading>Planco</LanguageHeading>
                    <Output>
                        <p>{output}</p>
                    </Output>
                </OutputContainer>
                <TranslateFooter>
                    <CopyCTA
                    onClick={() => copyOutput(output)}>copy</CopyCTA>
                    <InputCount>{count} / 250</InputCount>
                </TranslateFooter>
            </ContentWrapper>
        </TranslateContainer>
    );
}
