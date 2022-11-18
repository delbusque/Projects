import React from 'react'
import { createContext, useContext, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig.js'
import { useState } from "react";

const userContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
        });

        return () => {
            unsubscribe();
        };
    }, [])

    return (
        <userContext.Provider value={{ createUser, user, loginUser, logoutUser }}>
            {children}
        </userContext.Provider>
    )
};

export const UserAuthContext = () => useContext(userContext);