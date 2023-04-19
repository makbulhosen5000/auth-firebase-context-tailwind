import React, { createContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from '../assets/Firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);
    }
    const logOut = () =>{
      return signOut(auth);
    }
    const userInfo = {
      user,
      loading,
      createUser,
      signIn,
      signInWithGoogle,
      logOut,
    };
    
    //observe auth state change
    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        console.log("user state change", currentUser);
        setUser(currentUser);
        setLoading(false);
      });
      return()=>{
        unsubscribe()
      }
    },[])

    
    
    return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;