import * as databaseService from '../services/databaseService.js';

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    updateProfile
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBF9GZ_NtJAAfqKN_DvRuHDOPKKAN5x3ro",
    authDomain: "crypto-portfolio-spa.firebaseapp.com",
    projectId: "crypto-portfolio-spa",
    storageBucket: "crypto-portfolio-spa.appspot.com",
    messagingSenderId: "109783084386",
    appId: "1:109783084386:web:4585b9dbc9547dbbeb503b",
    measurementId: "G-YQZG565G52"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export const update = (data, ctx) => {
    updateProfile(auth.currentUser, {
        displayName: data
    }).then(() => {}).catch((error) => {
        // An error occurred
        // ...
    });
}

export const logout = (ctx) => {
    signOut(auth).then(() => {
        // Sign-out successful.
        localStorage.removeItem('auth');
        ctx.page.redirect('/');
    }).catch((error) => {
        // An error happened.
    })


}

export const login = (ctx, email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            localStorage.setItem('auth', JSON.stringify(userCredential.user));
            ctx.page.redirect('/portfolio');

        })
        .catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)

            if (errorCode == 'auth/wrong-password') {
                alert('Please check your Password !')
                return;
            }
            if (errorCode == 'auth/user-not-found') {
                alert('Please check your Email !')
                return;
            }
        });
}

export const register = (ctx, email, password) => {

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            localStorage.setItem('auth', JSON.stringify(userCredential.user));
            databaseService.newUserData(userCredential.user.email, userCredential.user.uid)
            ctx.page.redirect('/portfolio');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export const getUser = () => {
    let user = localStorage.getItem('auth');

    if (user) {
        return JSON.parse(user)
    }
}

export function isUser() {
    let user = localStorage.getItem('auth');

    if (user) {
        return true;
    }
};