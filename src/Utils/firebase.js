// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGY64n5otu9db3WVw8e11oISGn-OUF57o",
  authDomain: "netflixgpt-1052a.firebaseapp.com",
  projectId: "netflixgpt-1052a",
  storageBucket: "netflixgpt-1052a.appspot.com",
  messagingSenderId: "492511078057",
  appId: "1:492511078057:web:8cc2a0dfedee3ccc2f2bb8",
  measurementId: "G-Q0BJ814X44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();