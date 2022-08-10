// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCjUsG18FowlxKHEso7eg8Wh1VbQKpzcvE",
  authDomain: "clone-c6973.firebaseapp.com",
  projectId: "clone-c6973",
  storageBucket: "clone-c6973.appspot.com",
  messagingSenderId: "762293959190",
  appId: "1:762293959190:web:b11b96a3a2e60539f95337",
  measurementId: "G-TSF9RPHPTB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
