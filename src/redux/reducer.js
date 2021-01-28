const initialState = {
    sidebar: false
}

export const Action = {
    Types: {
        HANDLE_SIDEBAR: 'HANDLE_SIDEBAR'
    },
    Creators: {
        handleSidebar: (payload) => ({
            type: Action.Types.HANDLE_SIDEBAR,
            payload
        })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
        case Action.Types.HANDLE_SIDEBAR: {
            return {
                ...state,
                sidebar: action.payload
            }
        }
    }
}


export default reducer;