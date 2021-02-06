import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGgEn2tC33T5z22l-a4dMA8YzvzvK8eFY",
  authDomain: "todo-1f6b8.firebaseapp.com",
  databaseURL: "https://todo-1f6b8.firebaseio.com",
  projectId: "todo-1f6b8",
  storageBucket: "todo-1f6b8.appspot.com",
  messagingSenderId: "312122880060",
  appId: "1:312122880060:web:212db819d6f02981729339",
};
// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const authFire = firebase.auth;

const db = firebase.firestore;

export { authFire, db };
