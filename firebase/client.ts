// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAiYRIRCio5dPvdU3s2OMdBK1GngJRJoUY",
    authDomain: "prepwise-19110.firebaseapp.com",
    projectId: "prepwise-19110",
    storageBucket: "prepwise-19110.firebasestorage.app",
    messagingSenderId: "363898456077",
    appId: "1:363898456077:web:d1d8110b309fe68cd7ed44",
    measurementId: "G-0VWK3SQFTL"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);