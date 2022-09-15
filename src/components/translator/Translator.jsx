import { render } from "@testing-library/react";
import React from "react";

// Helpers
import Data from '../../helpers/scripts/data';

// Styles
import {
    TranslateContainer, 
    ContentWrapper,
    InputContainer, 
    OutputContainer, 
    TranslatorHeader,
    CancelIcon,
    LanguageHeading, 
    InputCount, 
    CopyCTA, 
    Input, 
    Output,
    TranslateFooter
} from "./TranslatorStyles";

export default function Translator() {
    const [input, setInput] = React.useState("");
    const [output, setOutput] = React.useState("");
    const [count, setCount] = React.useState(0);

    const inputElement = React.useRef(null);

    const copyOutput = target => {
        navigator.clipboard.writeText(target);
    }

    const clearInput = () => {
        setInput("");
        setOutput("");
        setCount(0);

        // Reset textarea height
        inputElement.current.style.height = "auto";
    }

    const handleStateChanges = event => {
        setInput(event.target.value);
        setOutput(getOutputString(event));
        setCount(event.target.textLength);

        // Textarea auto-wrap
        inputElement.current.style.height = "auto";
        inputElement.current.style.height = event.target.scrollHeight + "px";
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

                    target.split("").map(character => {
                        return character === character.toLowerCase()
                            ? cases.push(false) // Lowercase characters
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
                return counter === Data.length && (outputString += inputTerm);
            });
        });
        return outputString;
    }

    return (
        <>
        <TranslateContainer>
        <ContentWrapper>
            <TranslatorHeader>
                <LanguageHeading>English</LanguageHeading>
                <CancelIcon 
                onClick={ clearInput } >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.242" height="14.243" viewBox="0 0 14.242 14.243"><g transform="translate(5.665 4.121)"><line y1="10" x2="10" transform="translate(-3.543 -2)" fill="none" stroke="#20272e" strokeLinecap="round" strokeWidth="3"/><line x2="10" y2="10" transform="translate(-3.543 -2)" fill="none" stroke="#20272e" strokeLinecap="round" strokeWidth="3"/></g></svg>
                </CancelIcon>
            </TranslatorHeader>
            <InputContainer>
                <Input 
                type="text"
                ref={ inputElement }
                value={ input }
                onChange={ handleStateChanges }
                name="textarea"
                rows="1"
                maxLength="250">
                    { input }
                </Input>
            </InputContainer>
            <OutputContainer>
                <LanguageHeading>Planco</LanguageHeading>
                <Output>
                    <p>{ output }</p>
                </Output>
            </OutputContainer>
            <TranslateFooter>
                <CopyCTA
                onClick={ () => copyOutput(output) }>copy</CopyCTA>
                <InputCount>{ count } / 250</InputCount>
            </TranslateFooter>
        </ContentWrapper>
    </TranslateContainer>
    </>
  )
}
