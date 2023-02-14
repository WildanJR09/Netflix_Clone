// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDOdIvHMQVeEPcicDuku62mhBU7CorAnoQ",
//   authDomain: "netflix-clone-nextjs-91eb3.firebaseapp.com",
//   projectId: "netflix-clone-nextjs-91eb3",
//   storageBucket: "netflix-clone-nextjs-91eb3.appspot.com",
//   messagingSenderId: "694172965831",
//   appId: "1:694172965831:web:8a5b7b55928bbd9d3757e2",
//   measurementId: "G-12FD59XFD9",
// };

const firebaseConfig = {
  apiKey: "AIzaSyD7DE0WqnPkmuN_cXBqfgp8-WDi7kfzfIk",
  authDomain: "netflix-clone-51a2a.firebaseapp.com",
  projectId: "netflix-clone-51a2a",
  storageBucket: "netflix-clone-51a2a.appspot.com",
  messagingSenderId: "474969663047",
  appId: "1:474969663047:web:0bb9250a6320eb421ef362",
  measurementId: "G-M3WC0X31XK"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
