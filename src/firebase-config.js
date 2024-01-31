// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
import {getDatabase} from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJNK1U1H13OEXfZ1FWVx2EPMR1FMoK3K8",
  authDomain: "login-2dc9c.firebaseapp.com",
  projectId: "login-2dc9c",
  storageBucket: "login-2dc9c.appspot.com",
  messagingSenderId: "836357774293",
  appId: "1:836357774293:web:7e3c9afdef7d7e51e87b5c",
  measurementId: "G-G4VLR7D07T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  auth= getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db=getDatabase(app)