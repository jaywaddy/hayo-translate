export const ACTION = {
    USER_HISTORY: "userHistory",
    PINNED_HISTORY: "pinnedHistory"
}

export default (state, action) => {
    switch (action.type) {
        case ACTION.USER_HISTORY:
            return { ...state, userHistory: action.payload }
        case ACTION.PINNED_HISTORY:
            return { ...state, pinnedHistory: action.payload }
        default:
            throw new Error();
    }
}