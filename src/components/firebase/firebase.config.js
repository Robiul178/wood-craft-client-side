// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHMoosGKMksKvu6k8-PnHFOp4kZFCXuBk",
    authDomain: "wood-wonders-cdcbc.firebaseapp.com",
    projectId: "wood-wonders-cdcbc",
    storageBucket: "wood-wonders-cdcbc.appspot.com",
    messagingSenderId: "674426091851",
    appId: "1:674426091851:web:0b686379a1a2b0e84310ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;