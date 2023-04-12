// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzWprgna-GA1HgK72wJbx6RrP1ATkMMls",
  authDomain: "firestore-crud-910b4.firebaseapp.com",
  projectId: "firestore-crud-910b4",
  storageBucket: "firestore-crud-910b4.appspot.com",
  messagingSenderId: "388312627127",
  appId: "1:388312627127:web:c7b851b3460c748ee05a32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);