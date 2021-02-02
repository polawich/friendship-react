import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyBB5W2g6QNmF2E4lLcVHl37ShnY2IzvTSk",
    authDomain: "friendshipg-61.firebaseapp.com",
    projectId: "friendshipg-61",
    storageBucket: "friendshipg-61.appspot.com",
    messagingSenderId: "509151427350",
    appId: "1:509151427350:web:fd19f1404aa6945beaee37",
    measurementId: "G-EHM7V2898E"
 
});

var db = firebaseApp.firestore();

export { db };