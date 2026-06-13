import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";

import {
  getFirestore
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0PTu4Kja98QXmhjFYlBrRSHfXhM-4OGA",
  authDomain: "atlas-notes-74537.firebaseapp.com",
  projectId: "atlas-notes-74537",
  storageBucket: "atlas-notes-74537.firebasestorage.app",
  messagingSenderId: "175101656605",
  appId: "1:175101656605:web:d999b09d9ce540219fd0f4",
  measurementId: "G-N7C642MCFS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const googleProvider =
  new GoogleAuthProvider();