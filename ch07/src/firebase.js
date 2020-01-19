import * as firebase from "firebase/app";
require('firebase/database');

const firebaseConfig = {
    apiKey: "AIzaSyB26187NLv85CHHeXmQDPGvHQ3hWzsqwW4",
    authDomain: "reactjs-d2869.firebaseapp.com",
    databaseURL: "https://reactjs-d2869.firebaseio.com",
    projectId: "reactjs-d2869",
    storageBucket: "reactjs-d2869.appspot.com",
    messagingSenderId: "655013396913",
    appId: "1:655013396913:web:fec201446d22b0004dbd90",
    measurementId: "G-PL80BNS1FL"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const tasksRef    = firebase.database().ref("tasks");
