import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXiZ2ot_iREz9SKEINAjDvgYBhVWALVgQ",
  authDomain: "filtration-system.firebaseapp.com",
  databaseURL: "https://filtration-system.firebaseio.com",
  projectId: "filtration-system",
  storageBucket: "filtration-system.appspot.com",
  messagingSenderId: "201879750118",
  appId: "1:201879750118:web:b0eb185e2531724e5a8227",
  measurementId: "G-SQC6XZPVY1"
};

// Initialising firebase
firebase.initializeApp(firebaseConfig);

// Exporting connection to database as a variable
export const firestore = firebase.firestore();

export default firebase;
