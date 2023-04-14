export const ACTION = {
    HISTORY: "history",
    PINNED_HISTORY: "pinnedHistory"
}

export const initialState = {
    history: [],
    pinnedHistory: []
}

export default (state, action) => {
    switch (action.type) {
        case ACTION.HISTORY:
            return {
                ...state,
                history: [action.payload.history, ...state.history]
            }
        case ACTION.PINNED_HISTORY:
            return {
                ...state,
                pinnedHistory: [action.payload.pinnedHistory, ...state.pinnedHistory]
            }
        default:
            throw new Error();
    }
}