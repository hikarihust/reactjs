import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { firebaseApp } from './firebase';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './reducers/index';

import {actLogin} from './actions/index';

const store = createStore(
	appReducers, /* preloadedState, */
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

firebaseApp.auth().onAuthStateChanged(function(user) {
	if (user) {
		// User is signed in.
		let userInfo = {
			email: user.email,
			uid: user.uid
		}

		store.dispatch(actLogin(userInfo));
	} else {
	  	// User is signed out.
	  	console.log('signed out.');
	}
});
console.log(store.getState());
ReactDOM.render(
	<Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
