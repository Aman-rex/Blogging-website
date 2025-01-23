// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogging-website-275fd.firebaseapp.com",
  projectId: "blogging-website-275fd",
  storageBucket: "blogging-website-275fd.firebasestorage.app",
  messagingSenderId: "831712403467",
  appId: "1:831712403467:web:0dd1b200ef77334ae5e70e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);