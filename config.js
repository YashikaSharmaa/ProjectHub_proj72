import firebase from 'firebase';
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyCVgffmgtm3Pxdqxm46ZAt84M2IBqLwk54",
  authDomain: "storyhub-5f1fc.firebaseapp.com",
  databaseURL: "https://storyhub-5f1fc.firebaseio.com",
  projectId: "storyhub-5f1fc",
  storageBucket: "storyhub-5f1fc.appspot.com",
  messagingSenderId: "690761381106",
  appId: "1:690761381106:web:3debf30425db315d7ccc6b"
});

var db = firebase.firestore()
export default db