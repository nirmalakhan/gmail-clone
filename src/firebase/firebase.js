import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "@firebase/auth";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFySgswPoewrOlDqovJ5V9OpW1iZwVTVA",
  authDomain: "clone-yt-76bd2.firebaseapp.com",
  projectId: "clone-yt-76bd2",
  storageBucket: "clone-yt-76bd2.appspot.com",
  messagingSenderId: "663681266535",
  appId: "1:663681266535:web:cf3479077268f8c10fb5c2",
  measurementId: "G-L6GP6K9P55",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
