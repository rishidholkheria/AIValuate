// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaUOIYPKEkmGLrqsZdMRPG4z621uxoGtE",
  authDomain: "aivaluate-9f8af.firebaseapp.com",
  projectId: "aivaluate-9f8af",
  storageBucket: "aivaluate-9f8af.firebasestorage.app",
  messagingSenderId: "50349223082",
  appId: "1:50349223082:web:ad2d85d33bab78a626f4d3",
  measurementId: "G-0CVRMBWDF8",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
