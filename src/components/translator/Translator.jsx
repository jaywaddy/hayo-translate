import { render } from "@testing-library/react";
import React, { useEffect, useRef, useReducer, useState } from "react";

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

// Helpers
import reducer, { ACTION, initState } from "../../helpers/reducers/TranslatorReducer";

export default function Translator() {
    const [state, dispatch] = useReducer(reducer, initState);
    const textAreaRef = useRef();
    const plancoText = useRef();

    const PlancoOutput = () => {
        let outputString = "";

        state.inputValue.split(/(\W+|\s)/).map(inputTerm => {
            let counter = 0;
            
            const calcPlancoCase = (planco, inputString) => {
                let plancoOutput = "";

                // Return the case values for each character for every term
                const getCase = target => {
                    let cases = [];

                    target.split("").map(character => {
                        // dispatch({ type: ACTION.GENERATE_OUTPUT, payload: { character: character } })
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
                        // ? dispatch({ outputValue: state.outputValue + character.toUpperCase() })
                        // : dispatch({ outputValue: state.outputValue + character })
                });
                return plancoOutput;
            }
            // dispatch(ACTION.CALC_PLANCO_CASE)

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
                <ClearButton onClick={() => dispatch(ACTION.RESET)}/>
            </Header>
            <Input 
            type="text"
            ref={ textAreaRef }
            value={ state.inputValue }
            onChange={ () => dispatch({
                type: ACTION.GENERATE_OUTPUT,
                payload: {
                    textArea: textAreaRef,
                    output: plancoText.current.textContent
                }
            }) }
            name="textarea"
            rows="1"
            maxLength="250"
            >
                { state.inputValue }
            </Input>
            <Divider />
            <span>Planco</span>
            <Output>
                <p ref={ plancoText }>
                    <PlancoOutput />
                </p>
            </Output>
            <Footer>
                <CopyButton value={ state.outputValue }>copy</CopyButton>
                <span>{ state.charCount } / 250</span>
            </Footer>
        </Container>
    );
}
