import firebase from "firebase/app";
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyACb6_xSxIPAPyuxtgqnri_pDwhzwMEkAg",
    authDomain: "the-movie-database-34a4a.firebaseapp.com",
    projectId: "the-movie-database-34a4a",
    storageBucket: "the-movie-database-34a4a.appspot.com",
    messagingSenderId: "449534094325",
    appId: "1:449534094325:web:266cda3fb3d77e5b400ebc"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

