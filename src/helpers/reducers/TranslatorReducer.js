export const ACTION = {
    GET_USER_INPUT: "getUserInput",
    GENERATE_OUTPUT: "generateOutput",
    UPDATE_TEXTAREA_HEIGHT: "updateTextAreaHeight",
    RESET: "reset"
}

export const initialState = {
    inputValue: "",
    outputValue: "",
    charCount: 0,
    textAreaHeight: "auto"
}

export default (state, action) => {
    switch (action.type) {
        case ACTION.GENERATE_OUTPUT: // TODO
            return {
                ...state,
                inputValue: action.payload.inputValue,
                outputValue: action.payload.outputValue,
                charCount: action.payload.charCount,
                textAreaHeight: action.payload.textAreaHeight
            }
        case ACTION.RESET: // TODO
            return initialState;
        default:
            throw new Error;

    }
}
