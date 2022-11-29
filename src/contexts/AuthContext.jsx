import React from "react";
import { createContext, useState } from "react";

const AuthContext = createContext(); //? créer un context pour stoker le rôle de l'utilisateur

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ role: 0 });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
