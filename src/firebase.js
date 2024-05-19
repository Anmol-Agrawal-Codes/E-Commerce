// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBhAegntn0T7a7t9LEc66sbwpjeAV9wR0",
  authDomain: "shopsy-86758.firebaseapp.com",
  projectId: "shopsy-86758",
  storageBucket: "shopsy-86758.appspot.com",
  messagingSenderId: "53112352521",
  appId: "1:53112352521:web:8a606dd249113da41d2dd8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app)