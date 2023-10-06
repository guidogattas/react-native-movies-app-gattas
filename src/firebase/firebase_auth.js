// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZzVVDtxFQXqeXxijRKV5ldkvLjxzTq3s",
    authDomain: "ecommerce-75695.firebaseapp.com",
    databaseURL: "https://ecommerce-75695-default-rtdb.firebaseio.com",
    projectId: "ecommerce-75695",
    storageBucket: "ecommerce-75695.appspot.com",
    messagingSenderId: "975945357295",
    appId: "1:975945357295:web:8e88b50f4e56ca7d0d881a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firebase_auth = getAuth();