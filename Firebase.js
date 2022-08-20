import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBP9GB69-EvypznbQWRBIyA-jaPXYh_U2A",
  authDomain: "fitmee-b4c73.firebaseapp.com",
  projectId: "fitmee-b4c73",
  storageBucket: "fitmee-b4c73.appspot.com",
  messagingSenderId: "565635119333",
  appId: "1:565635119333:web:941cd3f6b938188844fc0c",
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
