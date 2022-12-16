import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { getCookie } from "../Helpers/cookieHelper";

const AuthContext = createContext(); //? créer un context pour stoker le rôle de l'utilisateur

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ role: 0 });

  useEffect(() => {
    fetch("http://vr-api/connexion", {
      //? on récupére les cookies
      credentials: "include",
      headers: {
        Authorization: getCookie("vinyle_remenber"),
      },
    }).then((resp) => console.log(resp));
    fetch("http://vr-api/auth/check", {
      credentials: "include",
      headers: {
        Authorization: getCookie("vinyle_remenber"), // ?set la valeur de Authorization
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.data.result) {
          // ? si le résultat de la requete est vrai
          setAuth({ role: +json.data.role }); // ? set l'utilisateur
        } else {
          setAuth({ role: 0 }); // ? sinon le user redevient un visiteur
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
