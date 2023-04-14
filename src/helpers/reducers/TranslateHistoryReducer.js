export const ACTION = {
    GET_USER_INPUT: "getUserInput",
    GENERATE_OUTPUT: "generateOutput",
    GENERATE_TIME_STAMP: "generateTimeStamp",
    SET_IS_PINNED: "setIsPinned",
    UPDATE_TEXTAREA_HEIGHT: "updateTextAreaHeight",
    RESET: "reset"
}

export const initialState = {
    id: 0,
    inputValue: "",
    outputValue: "",
    charCount: 0,
    timeStamp: 0,
    isPinned: false,
    textAreaHeight: "auto"
}

export default (state, action) => {
    switch (action.type) {
        case ACTION.GENERATE_OUTPUT:
            return {
                ...state,
                id: action.payload.id,
                inputValue: action.payload.inputValue,
                outputValue: action.payload.outputValue,
                charCount: action.payload.charCount,
                textAreaHeight: action.payload.textAreaHeight
            }
        case ACTION.GENERATE_TIME_STAMP:
            // TODO: Set up time stamp locig.
            return {
                ...state,
                timeStamp: `${action.payload.timeStamp} sec ago` 
            }
        case ACTION.SET_IS_PINNED:
            return {
                ...state,
                isPinned: action.payload.isPinned
            }
        case ACTION.RESET: // TODO
            return initialState;
        default:
            throw new Error();

    }
}
