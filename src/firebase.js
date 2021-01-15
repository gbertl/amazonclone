import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAjNh2B3PmUiXVIsGp8-YmBTTXpKqXpFdQ',
  authDomain: 'challenge-bf363.firebaseapp.com',
  projectId: 'challenge-bf363',
  storageBucket: 'challenge-bf363.appspot.com',
  messagingSenderId: '847872087417',
  appId: '1:847872087417:web:ad82e28702db84bdf94ba8',
  measurementId: 'G-H648M3BGL7',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
