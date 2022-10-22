import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const googleSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }
    const gitSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, gitProvider);
    }
    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signUp = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    }
    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoader(false);
        })

        return () => {
            unsubscribe();
        }

    }, []);

    const authInfo = {
        user,
        loader,
        googleSignIn,
        gitSignIn,
        logOut, signUp,
        signIn,
        userProfile,
        emailVerification,
        setLoader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;