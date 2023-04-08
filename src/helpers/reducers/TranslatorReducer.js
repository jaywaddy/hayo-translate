export const ACTION = {
    CALC_PLANCO_CASE: "calcPlancoCase",
    GENERATE_OUTPUT: "generateOutput",
    RESET: "reset"
}

export const initState = {
    inputValue: "",
    outputValue: "",
    charCount: 0,
    charCases: [],
    height: "auto"
}

export default (state, action) => {
    switch (action.type) {
        case ACTION.GENERATE_OUTPUT : // TODO
            return {
                inputValue: action.payload.textArea.current.value,
                outputValue: action.payload.output,
                charCount: action.payload.textArea.current.value.length,
                charCases:  action.payload.character
                            ? [...state.charCases, true]
                            : [...state.charCases, false],
                height: action.payload.textArea.current.scrollHeight + "px"
            }
        case ACTION.RESET: // TODO
            return { 
                inputValue: "", 
                outputValue: "",
                charCount: 0,
                charCases: [],
                height: "auto"
            }
        case ACTION.CALC_PLANCO_CASE:
            return (planco, inputString) => {
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
                        // ? plancoOutput += character.toUpperCase()
                        // : plancoOutput += character;
                        ? dispatch({ outputValue: state.outputValue + character.toUpperCase() })
                        : dispatch({ outputValue: state.outputValue + character })
                });
                // return plancoOutput;
                return state.outputValue;
            }
        default:
            return state;
    }
}
