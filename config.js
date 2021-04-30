import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyCifF4ky5dL9nLp1Bm9nmoqVjUOuX2Nsko",
    authDomain: "booksanta-f0cd8.firebaseapp.com",
    projectId: "booksanta-f0cd8",
    storageBucket: "booksanta-f0cd8.appspot.com",
    messagingSenderId: "727315719105",
    appId: "1:727315719105:web:53365735095c03c3fd0540"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();