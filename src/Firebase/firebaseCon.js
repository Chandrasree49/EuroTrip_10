// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPKAfLmY73kLyCvZEocSpqmb3FQ09vLSw",
  authDomain: "assignment-10-49ecd.firebaseapp.com",
  projectId: "assignment-10-49ecd",
  storageBucket: "assignment-10-49ecd.appspot.com",
  messagingSenderId: "349947936161",
  appId: "1:349947936161:web:25643e01fce99e50ce5fe0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;