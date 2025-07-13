// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBda_LB7ZdGy8T1Ni42TFH9Y9m5beesO6Q",
  authDomain: "profix-0419.firebaseapp.com",
  projectId: "profix-0419",
  storageBucket: "profix-0419.firebasestorage.app",
  messagingSenderId: "920404689640",
  appId: "1:920404689640:web:7d7ab51be61558798fff5d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
