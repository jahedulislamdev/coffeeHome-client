import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { AuthContext } from './CreateContext';
import app from './../Firebase/firebase_config';
const AuthProvider = ({ children }) => {

   // Initialize Firebase Authentication and get a reference to the service
   const auth = getAuth(app)
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);


   // login with email and password
   const userLogin = async (email, password) => {
      setLoading(true);
      return await signInWithEmailAndPassword(auth, email, password)
   }

   // register with email and password
   const userRegister = async (email, password) => {
      setLoading(true);
      return await createUserWithEmailAndPassword(auth, email, password)
   }
   // logout
   const userLogout = () => {
      setLoading(true);
      signOut(auth)
         .then(() => {
            setUser(null)
            setLoading(false)
         })
         .catch(err => {
            console.error(err.message)
         })
   }
   const data = { userLogin, userRegister, user, loading, setUser, setLoading, userLogout }
   return (
      <AuthContext.Provider value={data}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;