import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "evos-78ecd.firebaseapp.com",
  projectId: "evos-78ecd",
  storageBucket: "evos-78ecd.firebasestorage.app",
  messagingSenderId: "683940439777",
  appId: "1:683940439777:web:72759b38b2976f87d679a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}

