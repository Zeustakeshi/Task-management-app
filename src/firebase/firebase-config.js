import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDUBHj9cBS0OR9AxTt99rHUl_Ez9yieL4A",
    authDomain: "task-management-a.firebaseapp.com",
    projectId: "task-management-a",
    storageBucket: "task-management-a.appspot.com",
    messagingSenderId: "764564231775",
    appId: "1:764564231775:web:d2c4a466ce71fe95446dea",
    measurementId: "G-M1MT6ZM0DH",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const ggProvider = new GoogleAuthProvider();
