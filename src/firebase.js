// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEjYfFOayrDMnooUEcj3btaorufmVc3S8",
  authDomain: "reactspa-app.firebaseapp.com",
  projectId: "reactspa-app",
  storageBucket: "reactspa-app.appspot.com",
  messagingSenderId: "508675746937",
  appId: "1:508675746937:web:cdbf44437deb16363038a8",
  measurementId: "G-CBZGMG60GQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
