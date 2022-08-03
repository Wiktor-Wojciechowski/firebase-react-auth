// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBi9iRNY62Su1nsoGmkT0lKw1lWkmxonnM",
    authDomain: "test-5d546.firebaseapp.com",
    projectId: "test-5d546",
    storageBucket: "test-5d546.appspot.com",
    messagingSenderId: "340811498540",
    appId: "1:340811498540:web:0902a14601674bca86bd89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app