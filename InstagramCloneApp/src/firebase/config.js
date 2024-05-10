// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDeF069KbuhjYUWK0CUKyTznn_KHIeXN8A",
    authDomain: "instagram-clone-a6c93.firebaseapp.com",
    projectId: "instagram-clone-a6c93",
    storageBucket: "instagram-clone-a6c93.appspot.com",
    messagingSenderId: "292452481218",
    appId: "1:292452481218:web:e480c09316e2b52a97635b",
    measurementId: "G-S7664CKZ2D"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase}