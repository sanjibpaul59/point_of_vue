import firebase from "firebase/app";

import "firebase/auth";

import 'firebase/database';

var firebaseConfig ={
    apiKey: "AIzaSyDRoeY7VGONgJNJ_QxN42WWUyuqFn1MLzM",
    authDomain: "bitfumes-login.firebaseapp.com",
    projectId: "bitfumes-login",
    storageBucket: "bitfumes-login.appspot.com",
    messagingSenderId: "1024604204144",
    appId: "1:1024604204144:web:7a0ac37d6c5452ec34d8b5"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const msgRefs = db.ref("chatting");

export default firebase;