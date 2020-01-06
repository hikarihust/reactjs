import * as types from './../constants/ActionTypes'
const defaultState = false;

const isShowForm = (state = defaultState, action) => {
    switch(action.type) {
        case types.CLOSE_FORM:
            state = false;
            return state;

        case types.OPEN_FORM:
            state = true;
            return state;

        case types.TOGGLE_FORM:
            state = !state;
            return state;

        default:
            return state;
    }
} 

export default isShowForm;