import firebase from 'firebase';
require('@firebase/firestore');
var firebaseConfig = {
    apiKey: "AIzaSyC-vMUvkoHLu5UWjwm6hSSzCMxZEmYYm1c",
    authDomain: "bartersystem-88570.firebaseapp.com",
    projectId: "bartersystem-88570",
    storageBucket: "bartersystem-88570.appspot.com",
    messagingSenderId: "690189758365",
    appId: "1:690189758365:web:77b787155d421f08c90974"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
