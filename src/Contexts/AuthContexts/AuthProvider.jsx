import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/Firebase.config";


export const AuthContest = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState([]);

    //  Create User 
     const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)
     }

    //  User Login
    const userLogin = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
    }
    // User SingOut
    const userSingOut = () => {
      return signOut(auth);
    }

    // Active User 
    useEffect( () => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser => {
        console.log(currentUser);
        setUser(currentUser);
      }));
      return () => {
        return unSubscribe();
      }
    }, [])

  const authInfo = { 
     user,
     loading,
     createUser,
     userLogin,
     userSingOut
     };
  return (
    <AuthContest.Provider value={authInfo}>{children}</AuthContest.Provider>
  );
};

export default AuthProvider;
