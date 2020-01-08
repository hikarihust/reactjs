import * as types from './../constants/ActionTypes';

let defaultState = { id: '', name: '', level: 0 };

const itemSelected = (state = defaultState, action) => {
    switch(action.type) {
        case types.SELECTED_ITEM:
            return action.item;
        default:
            return state;
    }
} 

export default itemSelected;