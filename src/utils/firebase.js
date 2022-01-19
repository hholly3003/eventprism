// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqAeCjOYaqU9zOOiAJII0jsNN2s0F55b4",
    authDomain: "eventprism-10a0d.firebaseapp.com",
    projectId: "eventprism-10a0d",
    storageBucket: "eventprism-10a0d.appspot.com",
    messagingSenderId: "770286239071",
    appId: "1:770286239071:web:380bdbe8df631a9887caea",
    measurementId: "G-FDF8GK6HGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Getting the db from firebase
const db = getFirestore();

export default db