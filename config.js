import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDvEoJaz9AAtR7yE0LIVU9-5GqEA69y6l0",
    authDomain: "e-ride-stage-4-47b0b.firebaseapp.com",
    projectId: "e-ride-stage-4-47b0b",
    storageBucket: "e-ride-stage-4-47b0b.appspot.com",
    messagingSenderId: "1055929620642",
    appId: "1:1055929620642:web:cfe9983cbc39f5fb0b5ffb"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
