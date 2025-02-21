
import { createStore } from 'redux';

const initialState = {
    availableTimes: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return { ...state, availableTimes: action.payload };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
