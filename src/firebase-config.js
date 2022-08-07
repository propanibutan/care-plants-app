import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDR-E44OZysTS0uUBu8ZlBwRANHR5g-E1o",
    authDomain: "plant-care-app-de665.firebaseapp.com",
    projectId: "plant-care-app-de665",
    storageBucket: "plant-care-app-de665.appspot.com",
    messagingSenderId: "545078212091",
    appId: "1:545078212091:web:601c3c955eb2f88705875e",
    measurementId: "G-B56NXEVLK1"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore();