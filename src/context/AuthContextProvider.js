import React, { useContext, createContext } from 'react';
import {auth, googleProvider} from "../utils/firebaseUtil"

// Create context for authentication data
const AuthContext = createContext();

// Define a function to get data from Auth context 
export function useAuth() {
    return useContext(AuthContext)
}

const AuthContextProvider = () => {
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email,password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email,password)
    }
    
    return (
        <div>
            
        </div>
    )
}

export default AuthContextProvider;
