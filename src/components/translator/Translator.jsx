import { render } from "@testing-library/react";
import React from "react";

// Helpers
import Data from '../../helpers/scripts/data';

// Components
import CancelButtonCTA from "../ctas/cancelButtonCTA/CancelButtonCTA";
import CopyCTA from "../ctas/copyCTA/CopyCTA";

// Styles
import {
    InputContainer, 
    OutputContainer,
    LanguageHeader,
    Input, 
    Output
} from "./TranslatorStyles";

import {
    ContentContainer as Container,
    ContentWrapper as Wrapper,
    ContentHeader as Header,
    ContentFooter as Footer
} from "../../helpers/styles/GlobalStyle";

export default function Translator() {
    const [input, setInput] = React.useState("");
    const [output, setOutput] = React.useState("");
    const [count, setCount] = React.useState(0);

    const textareaElement = React.useRef(null);

    const copyOutput = target => {
        navigator.clipboard.writeText(target);
    }

    const clearInput = () => {
        setInput("");
        setOutput("");
        setCount(0);

        // Reset textarea height
        textareaElement.current.style.height = "auto";
    }

    const handleStateChanges = event => {
        setInput(event.target.value);
        setOutput(getOutputString(event));
        setCount(event.target.textLength);

        // Textarea auto-wrap
        textareaElement.current.style.height = "auto";
        textareaElement.current.style.height = event.target.scrollHeight + "px";
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
        <Container>
            <Wrapper>
                <Header>
                    <LanguageHeader>
                        <span>English</span>
                    </LanguageHeader>
                    <CancelButtonCTA func={ clearInput }/>
                </Header>
                <InputContainer>
                    <Input 
                    type="text"
                    ref={ textareaElement }
                    value={ input }
                    onChange={ handleStateChanges }
                    name="textarea"
                    rows="1"
                    maxLength="250">
                        { input }
                    </Input>
                </InputContainer>
                <OutputContainer>
                    <LanguageHeader>
                        <span>Planco</span>
                    </LanguageHeader>
                    <Output>
                        <p>{ output }</p>
                    </Output>
                </OutputContainer>
                <Footer>
                    <CopyCTA value={ output }>copy</CopyCTA>
                    <span>{ count } / 250</span>
                </Footer>
            </Wrapper>
        </Container>
        </>
    );
}
