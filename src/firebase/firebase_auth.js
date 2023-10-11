// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVTI30WmBenplBbXbVKbV4AYwctlZhg1o",
    authDomain: "movies-app-react-native-a4528.firebaseapp.com",
    projectId: "movies-app-react-native-a4528",
    storageBucket: "movies-app-react-native-a4528.appspot.com",
    messagingSenderId: "990312863976",
    appId: "1:990312863976:web:fb56f021aa9b159dea515d"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth();