import React, { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const gitProvider = new GithubAuthProvider();
  const firebaseConfig = {
    apiKey: "AIzaSyDPKAfLmY73kLyCvZEocSpqmb3FQ09vLSw",
    authDomain: "assignment-10-49ecd.firebaseapp.com",
    projectId: "assignment-10-49ecd",
    storageBucket: "assignment-10-49ecd.appspot.com",
    messagingSenderId: "349947936161",
    appId: "1:349947936161:web:25643e01fce99e50ce5fe0"
  };
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const registerUser = (email, password, photoUrl, name) => {
    return createUserWithEmailAndPassword(auth, email, password, name)
      .then((userCredential) => {
        return updateProfile(userCredential.user, {
          photoURL: photoUrl,
          displayName: name,
        })
          .then(() => {
            return userCredential;
          })
          .catch((error) => {
            throw error;
          });
      })
      .catch((error) => {
        throw error;
      });
  };
  const loginUser1 = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return userCredential;
      })
      .catch((error) => {
        throw error;
      });
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const gitLogin = () => {
    return signInWithPopup(auth, gitProvider);
  };
  const logout = () => {
    return auth
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        throw error;
      });
  };
  const updateProfileData = (displayName, email, photoURL) => {
    const currentUserData = auth.currentUser;
    const profileUpdates = {};
    if (displayName) profileUpdates.displayName = displayName;
    if (photoURL) profileUpdates.photoURL = photoURL;
    if (email) profileUpdates.email = email;

    return updateProfile(currentUserData, profileUpdates)
      .then(() => {
        setUser(getAuth().currentUser);
        return getAuth().currentUser;
      })
      .catch((error) => {
        throw error;
      });
  };

  const authInfo = {
    registerUser,
    loginUser,
    user,
    setUser,
    googleLogin,
    gitLogin,
    updateProfileData,
    logout,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
