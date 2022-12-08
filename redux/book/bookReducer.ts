import bookTypes from "./bookTypes";

const initialState = {
    numOfBooks: 10
}

function bookReducer(state = initialState, action: any) {
    switch (action.type) {
        case bookTypes.ADD_BOOK:
            return {
                ...state,
                numOfBooks: state.numOfBooks + 1
            };
        case bookTypes.BUY_BOOK:
            return {
                ...state,
                numOfBooks: state.numOfBooks - 1
            };
        default:
            return state;
    }
}

export default bookReducer;