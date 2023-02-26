// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAghFXsCYuzKxNMO8fFOgXz-V0Ix9yRpbY",
  authDomain: "publisher-bc3e0.firebaseapp.com",
  projectId: "publisher-bc3e0",
  storageBucket: "publisher-bc3e0.appspot.com",
  messagingSenderId: "598431257953",
  appId: "1:598431257953:web:32a4e5d87a51b2d5d2a120",
  measurementId: "G-36C2VLFS26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export {db}