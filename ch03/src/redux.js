import { createStore } from 'redux'
import appReducers from './reducers'
import { actCloseForm, actOpenForm, actToggleForm, actSort } from './actions'

const store = createStore(
    appReducers, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

// const store = createStore(appReducers);
console.log("Init: ", store.getState());

store.subscribe(() => console.log(store.getState()))

// Action close_form
store.dispatch(actCloseForm());
console.log('close_form', store.getState());

// Action open_form
store.dispatch(actOpenForm());
console.log('open_form', store.getState());

// Action toggle_form
store.dispatch(actToggleForm());
console.log('toggle_form', store.getState());

// CHANGE SORT
store.dispatch(actSort('level', 'desc'));
console.log("SORT_ITEM: ", store.getState());
export default store;