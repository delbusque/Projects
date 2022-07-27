import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCYqVgpbtVNTA_iJ2-OPdm1xqibkLo9zoU",
    authDomain: "ajsmits-2606e.firebaseapp.com",
    databaseURL: "https://ajsmits-2606e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ajsmits-2606e",
    storageBucket: "ajsmits-2606e.appspot.com",
    messagingSenderId: "675366364255",
    appId: "1:675366364255:web:0d231edf12fbcecc8167ea"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);