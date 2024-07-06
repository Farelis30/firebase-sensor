// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaWC1khzrLWcrrrLCajHJrOPE3UzgYXjE",
  authDomain: "project-uas-iot-79827.firebaseapp.com",
  databaseURL:
    "https://project-uas-iot-79827-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-uas-iot-79827",
  storageBucket: "project-uas-iot-79827.appspot.com",
  messagingSenderId: "969281042562",
  appId: "1:969281042562:web:8e3642942e3cf72d945c9b",
  measurementId: "G-DR1XB8ZL0B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
