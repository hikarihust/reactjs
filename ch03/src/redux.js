import { createStore } from 'redux'
import { actCloseForm, actOpenForm, actToggleForm } from './actions'

let defaultState = {
    items       : [],
    isShowForm  : true,
    strSearch   : '',
    orderBy     : 'name',
    orderDir    : 'asc',
    itemSelected: null
}

let appReducers = (state = defaultState, action) => {
    switch(action.type) {
        case 'close_form':
            state.isShowForm = false;
            return state;

        case 'open_form':
            state.isShowForm = true;
            return state;

        case 'toggle_form':
            state.isShowForm = !state.isShowForm;
            return state;

        default:
            return state;
    }
} 

const store = createStore(appReducers);
console.log("Init: ", store.getState());

// Action close_form
store.dispatch(actCloseForm());
console.log('close_form', store.getState());

// Action open_form
store.dispatch(actOpenForm());
console.log('open_form', store.getState());

// Action toggle_form
store.dispatch(actToggleForm());
console.log('toggle_form', store.getState());

export default store;