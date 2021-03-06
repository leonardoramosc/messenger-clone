import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDlhkFwDGL4prqA-oOqKWx42n1HdQZUkXQ",
  authDomain: "messenger-b106a.firebaseapp.com",
  projectId: "messenger-b106a",
  storageBucket: "messenger-b106a.appspot.com",
  messagingSenderId: "36129170155",
  appId: "1:36129170155:web:53b5ff410b7333903614ae"
});

const db = firebaseApp.firestore();

export default db;