import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { getCookie } from "../Helpers/cookieHelper";

const AuthContext = createContext(); //? créer un context pour stoker le rôle de l'utilisateur

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ role: 0 });

  useEffect(() => {
    fetch("http://vr-api/auth/check", {
      credentials: "include",
      headers: {
        Authorization: getCookie("vinyle_remenber"),
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.data.result) {
          setAuth({ role: +json.data.role });
        } else {
          setAuth({ role: 0 });
          document.cookie = `vr-api=null;max-age=0`;
        }
      });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
