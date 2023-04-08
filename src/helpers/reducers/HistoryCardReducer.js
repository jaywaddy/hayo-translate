export const ACTION = {
    ID: "id",
    INPUT: "input",
    OUTPUT: "output",
    TIME_STAMP: "timeStamp",
    IS_PINNED: "isPinned"
}

export default (state, action) => {
    switch(action.type) {
        // History Cards
        case ACTION.ID:
            return { ...state, id: Date.now() };
        case ACTION.INPUT:
            return { ...state, eng: action.payload }
        case ACTION.OUTPUT:
            return { ...state, plc: action.payload }
        case ACTION.TIME_STAMP:
            return { ...state, timeStamp: action.payload }
        case ACTION.IS_PINNED:
            return { ...state, isPinned: true }
        default:
            throw new Error();
    }
}