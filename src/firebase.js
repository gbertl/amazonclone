import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPc_Y_DcpiCTzpJgEAQNO9XW1CgqRpA-4",
  authDomain: "clone-1e474.firebaseapp.com",
  projectId: "clone-1e474",
  storageBucket: "clone-1e474.appspot.com",
  messagingSenderId: "1025808940534",
  appId: "1:1025808940534:web:dac9402ecb00815f5b5bd7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
