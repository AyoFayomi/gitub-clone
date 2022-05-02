// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa4QkXFzeEX9N7OMkP6uZMMy3Xt7xBaN0",
  authDomain: "gitauth-87448.firebaseapp.com",
  projectId: "gitauth-87448",
  storageBucket: "gitauth-87448.appspot.com",
  messagingSenderId: "451734254370",
  appId: "1:451734254370:web:c2fb64143bb0d10b206b7b",
  measurementId: "G-R65JRVKBBN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
