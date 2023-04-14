import { render } from "@testing-library/react";
import React, { useRef, useReducer, useEffect } from "react";

// Helpers
import Dictionary from "../../helpers/scripts/data";

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
import reducer, { ACTION, initialState } from "../../helpers/reducers/TranslateHistoryReducer";

export default ({ hisState, hisDispatch }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const textAreaRef = useRef();
    const plancoText = useRef();
    const historyPostInterval = 2000;
    const maxCharacterCount = 250;
    const localStorageHistory = JSON.parse(localStorage.getItem("history"));

    useEffect(() => {
        const timer = setTimeout(postToLocalStorage, historyPostInterval);
        textAreaRef.current.style.height = state.textAreaHeight;
        return () => clearTimeout(timer);
    }, [state.inputValue]);

    const postToLocalStorage = () => {
        if (state.charCount > 0
        & !hisState.history.some(prev => prev.inputValue === state.inputValue)
        // & localStorageHistory.some(target => target.inputValue === state.inputValue)
        ){
            hisDispatch({
                type: "history",
                payload: {
                    history: state
                }
            });
            localStorage.setItem("history", JSON.stringify(hisState.history)); // TODO: Add to hisstory, not replace
        }
    }

    const calcPlancoOutput = outputValue => {
        const newID = Date.now();
        // TODO: Determine plurals, and tenses.
        textAreaRef.current.value.split(/(\W+)/).forEach(target => {
            Dictionary.some(entry => entry.eng.toLowerCase() === target.toLowerCase())
                ? Dictionary.find(entry => {
                    target.toLowerCase() === entry.eng.toLowerCase() 
                        && (outputValue += copyInputCaseToOutput(
                            entry.plc,
                            target,
                            new String
                        ));
                    })
                : outputValue += target;
        });
        dispatch({
            type: ACTION.GENERATE_OUTPUT,
            payload: {
                id: newID,
                inputValue: textAreaRef.current.value,
                outputValue: outputValue,
                charCount: textAreaRef.current.value.length,
                textAreaHeight: textAreaRef.current.scrollHeight + "px"
            }
        });
        return state.outputValue;
    }

    const copyInputCaseToOutput = (input, target, output) => {
        input.split("").forEach((character, index) => {
            const isUpperCase = value => value === value.toUpperCase();
            isUpperCase(target)
                ? (output += character.toUpperCase())
                    : calcInputCase(target, new Array)[index]
                        ? output += character.toUpperCase()
                        : output += character;
        });
        return output;
    }

    const calcInputCase = (target, cases) => {
        target.split("").forEach(character => {
            return character === character.toLowerCase()
                ? cases.push(false) // Lowercase characters
                : cases.push(true); // Uppercase characters
        });
        return cases;
    }

    const handleClearText = () => {
        dispatch({ type: ACTION.RESET });
        textAreaRef.current.style.height = "auto";
    }

    return (
        <Container>
            <Header>
                <span>English</span>
                <ClearButton func={ handleClearText }/>
            </Header>
            <Input 
            type="text"
            ref={ textAreaRef }
            value={ state.inputValue }
            onChange={() => calcPlancoOutput(new String)}
            name="textarea"
            rows="1"
            maxLength={ maxCharacterCount }
            >
                { state.inputValue }
            </Input>
            <Divider />
            <span>Planco</span>
            <Output>
                <p ref={ plancoText }>
                { state.outputValue }
                </p>
            </Output>
            <Footer>
                <CopyButton value={ state.outputValue }>copy</CopyButton>
                <span>{ state.charCount } / { maxCharacterCount }</span>
            </Footer>
        </Container>
    );
}
