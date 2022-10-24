import { render } from "@testing-library/react";
import React from "react";

// Helpers
import Data from "../../helpers/scripts/data";

// Components
import ClearButton from "../clearButton/ClearButton";
import CopyButton from "../copyButton/CopyButton";

// Styles
import {
    Output,
    Divider
} from "./TranslatorStyles";

import {
    ContentContainer as Container,
    ContentHeader as Header,
    ContentFooter as Footer,
    Input
} from "../../helpers/styles/GlobalStyle";

export default function Translator({ setHistory }) {
    const [input, setInput] = React.useState("");
    const [output, setOutput] = React.useState("");
    const [count, setCount] = React.useState(0);

    const textareaRef = React.useRef();

    React.useEffect(() => {
        setInput(textareaRef.current.value);
        setOutput(getOutputString);
        setCount(textareaRef.current.textLength);

        // Textarea auto-wrap
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
        
        if (input === "") {
            setInput("");
            setOutput("");
            setCount(0);
    
            // Reset textarea height
            textareaRef.current.style.height = "auto";
        }
    }, [input]);

    // React.useEffect(() => {
    //     setTimeout(() => {
    //         console.log("Update History");
    //         setHistory(history => [...history, {
    //             eng: input,
    //             plc: output
    //         }]);
    //     }, 5000);
    // }, []);


    const getOutputString = () => {
        const userInput = textareaRef.current.value.split(/(\W+|\s)/);
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
        <Container>
            <Header>
                <span>English</span>
                <ClearButton setInput={ setInput }/>
            </Header>
            <Input 
            type="text"
            ref={ textareaRef }
            value={ input }
            onChange={ () => setInput(textareaRef.current.value) }
            name="textarea"
            rows="1"
            maxLength="250">
                { input }
            </Input>
            <Divider />
            <span>Planco</span>
            <Output>
                <p>{ output }</p>
            </Output>
            <Footer>
                <CopyButton value={ output }>copy</CopyButton>
                <span>{ count } / 250</span>
            </Footer>
        </Container>
    );
}
