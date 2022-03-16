// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCV7AtvVL21TzAtAlpeNkWYzXQ7w3sG1Do",
  authDomain: "disclone-c88bb.firebaseapp.com",
  projectId: "disclone-c88bb",
  storageBucket: "disclone-c88bb.appspot.com",
  messagingSenderId: "989054962781",
  appId: "1:989054962781:web:fc0b5e77d0de2b0e6851b4",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, db };
