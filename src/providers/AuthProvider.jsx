import React, { createContext } from 'react'
import { getAuth } from "firebase/auth";


export const AuthContext = createContext(null)

const auth = getAuth(app);

export const AuthProvider = ({ children }) => {
    const authInfo={}
    return (
        <AuthContext.Provider value={authInfo}>{ children}</AuthContext.Provider>
  )
}
