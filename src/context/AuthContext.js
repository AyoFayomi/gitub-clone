import { createContext, useContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged ,
} from "firebase/auth";
import { auth } from "../config/firebase-config"

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null)


  const githubSignIn = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => { 
      unsubscribe();
    }
  }, [])
  return <AuthContext.Provider value={{githubSignIn, user}}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
