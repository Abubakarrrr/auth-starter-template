// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-fcd50.firebaseapp.com",
  projectId: "mern-auth-fcd50",
  storageBucket: "mern-auth-fcd50.appspot.com",
  messagingSenderId: "625307019747",
  appId: "1:625307019747:web:de47e51fd038e98e4418d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);