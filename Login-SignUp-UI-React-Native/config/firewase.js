// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth' 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsq8Mw1VV_LDRsN84qBB38ovg76UHk_2A",
  authDomain: "reactnative-loginform.firebaseapp.com",
  projectId: "reactnative-loginform",
  storageBucket: "reactnative-loginform.appspot.com",
  messagingSenderId: "262899221745",
  appId: "1:262899221745:web:75588fdac42ca8851e5550",
  measurementId: "G-02PVFEME4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)