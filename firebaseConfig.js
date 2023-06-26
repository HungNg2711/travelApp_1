// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDrOn7AlB6iLZCCnW1-ZbZQe4ynPvTkj0",
  authDomain: "travelapp-44adb.firebaseapp.com",
  projectId: "travelapp-44adb",
  storageBucket: "travelapp-44adb.appspot.com",
  messagingSenderId: "987219972588",
  appId: "1:987219972588:web:683aef238b469a3793f0c9",
  measurementId: "G-4ZNVLCN84P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app);
export const FIRESTORE_DB = getFirestore(app);
export {collection, addDoc};