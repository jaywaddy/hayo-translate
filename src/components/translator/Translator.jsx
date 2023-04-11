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
import reducer, { ACTION, initialState } from "../../helpers/reducers/TranslatorReducer";

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const textAreaRef = useRef();
    const plancoText = useRef();
    const maxCharacterCount = 250;

    useEffect(() => {
        textAreaRef.current.style.height = state.textAreaHeight;
        // TODO: Post history.
    }, [state.inputValue]);

    const calcPlancoOutput = outputValue => {
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

    const PlancoOutput = () => {
        return (
            <p ref={ plancoText }>
               { state.outputValue }
            </p>
        );
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
                <PlancoOutput />
            </Output>
            <Footer>
                <CopyButton value={ state.outputValue }>copy</CopyButton>
                <span>{ state.charCount } / { maxCharacterCount }</span>
            </Footer>
        </Container>
    );
}
