import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDewq8U_BYuu01lwgYYTYdvh6bxG8sB3Fc",
  authDomain: "cctv-4aa4c.firebaseapp.com",
  databaseURL: "https://cctv-4aa4c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cctv-4aa4c",
  storageBucket: "cctv-4aa4c.firebasestorage.app",
  messagingSenderId: "864560354333",
  appId: "1:864560354333:web:5664d82a983f025ba062f4",
  measurementId: "G-YZG0B4T82Z"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
