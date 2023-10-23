
const initialState = {
    tab: 0
};

export const TabReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "TAB":
            return {
                ...state,
                tab: action.payload
            };
        default:
            return state;
    }
};

export default TabReducer;
