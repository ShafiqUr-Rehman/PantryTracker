// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "inventory-ms-790cd.firebaseapp.com",
  projectId: "inventory-ms-790cd",
  storageBucket: "inventory-ms-790cd.appspot.com",
  messagingSenderId: "144939630903",
  appId: "1:144939630903:web:71a7c5a4ee321714fa1ab2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
