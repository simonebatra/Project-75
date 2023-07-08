import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBuJ-rX-JEJUyy2rNfQfGHAaatoUCqYyz4",
  authDomain: "e-ride-app-95b19.firebaseapp.com",
  projectId: "e-ride-app-95b19",
  storageBucket: "e-ride-app-95b19.appspot.com",
  messagingSenderId: "716139279419",
  appId: "1:716139279419:web:4384a558d0fa04ff0d581e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
