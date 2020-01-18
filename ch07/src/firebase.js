import * as firebase from "firebase/app";

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

require('firebase/database');
// firebase.database().ref('tasks/' + 'asaefefe').set({
//     id: 4,
//     name: 'fix 123'
// });

var starCountRef = firebase.database().ref('tasks/' + '/asaefefe');
starCountRef.on('value', (snapshot) => {
    console.log(snapshot.val());
});
