// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netflixclone-549ed.firebaseapp.com",
  projectId: "netflixclone-549ed",
  storageBucket: "netflixclone-549ed.firebasestorage.app",
  messagingSenderId: "777495796778",
  appId: "1:777495796778:web:ed59c62702ebb9d7987753",
  measurementId: "G-0KDDR7W42P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
