// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB65r8zyqLvmKFja-23cmHXs1MlaJ43hmQ",
    authDomain: "eventprism-d0a40.firebaseapp.com",
    projectId: "eventprism-d0a40",
    storageBucket: "eventprism-d0a40.appspot.com",
    messagingSenderId: "29217795495",
    appId: "1:29217795495:web:65c6120b7a69b3dee01a82",
    measurementId: "G-PQDTG9ZWY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Getting the db from firebase
const db = getFirestore();
// Getting authentication function from firebase
export const auth = getAuth(app)

export default db