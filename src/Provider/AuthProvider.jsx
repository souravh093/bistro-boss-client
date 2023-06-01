import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser) {
        axios.post('http://localhost:5000/jwt', {email: currentUser.email})
          .then(data => {
            console.log(data)
          })
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignInUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (name, url) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url
    })
  }

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  }
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleSignInUser,
    updateUserProfile,
    logoutUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
