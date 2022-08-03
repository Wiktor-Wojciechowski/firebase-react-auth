import { createContext, useContext, useState, useEffect } from "react";
import React from 'react'

import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";


//creating context
const AuthContext = createContext();


//exporting context to use in other components
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    //loading is needed for elements to wait until the currentUser is set
    const [loading, setLoading] = useState(true)


    const two = 2;
    //these functions are available in other components
    //after importing context (useAuth)
    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            //after user is set, stop loading
            setLoading(false)
        })

        return unsubscribe
    }, [])


    //these variables are available in other 
    //components after importing context (useAuth)
    const value = {
        currentUser,
        two,
        signup,
        login,
        logout
    }
    //to use the vars and funcs in other components
    // const { var/funcName } = useAuth()
    //the name of the var/func is to be the same
    return (
        <AuthContext.Provider value={value}>
            {/* !IMPORTANT! only render elements after this one is loaded */}
            {!loading && children}
        </AuthContext.Provider>
    )
}
