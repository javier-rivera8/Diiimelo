// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmraYwfYnY2263od_PInSYYAVPIDJaA2s",
  authDomain: "diiimelo.firebaseapp.com",
  projectId: "diiimelo",
  storageBucket: "diiimelo.appspot.com",
  messagingSenderId: "754738151350",
  appId: "1:754738151350:web:3e8195b9b2409beb63cb17",
  measurementId: "G-FCENZD8BEY"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
