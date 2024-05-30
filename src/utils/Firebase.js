// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPewALPGsv55rmk-itjRm5OrA7_etwsaw",
  authDomain: "netflix-gpt-6666.firebaseapp.com",
  projectId: "netflix-gpt-6666",
  storageBucket: "netflix-gpt-6666.appspot.com",
  messagingSenderId: "16754544883",
  appId: "1:16754544883:web:b57275bd908ebb9709a786",
  measurementId: "G-PFWZ2NM9PP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
