// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnbC7ARgn7y2Uew6R03rQfaHEIaw3pH8o",
  authDomain: "netflix-gpt-96.firebaseapp.com",
  projectId: "netflix-gpt-96",
  storageBucket: "netflix-gpt-96.appspot.com",
  messagingSenderId: "339842596597",
  appId: "1:339842596597:web:cd8b55ca0bf77db3d48fbc",
  measurementId: "G-LHZMQKS87P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
