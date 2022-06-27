// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPF2oZwwlfJgT6Tnomxe-bY64l8z8DrbA",
  authDomain: "map-intergate.firebaseapp.com",
  projectId: "map-intergate",
  storageBucket: "map-intergate.appspot.com",
  messagingSenderId: "872847041485",
  appId: "1:872847041485:web:a52d16a052c9fef8561a84",
  measurementId: "G-0PBRM8Q5P5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth