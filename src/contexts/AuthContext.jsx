import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { getCookie } from "../Helpers/cookieHelper";

const AuthContext = createContext(); //? créer un context pour stoker le rôle de l'utilisateur

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ role: 0 }); // ? on va créer un state, et on defini le role à 0(visiteur)

  useEffect(() => {
    // ? on fait appel a l'api avec useEffect
    fetch("http://vr-api/connexion", {
      credentials: "include",
      headers: {
        Authorization: getCookie("vinyle_remenber"), // ?set la valeur de Authorization(donne la valeur du cookie)
      },
    }).then((resp) => console.log(resp));

    fetch("http://vr-api/auth/check", {
      credentials: "include",
      headers: {
        Authorization: getCookie("vinyle_remenber"), // ? on ajoute  en option credentials "include" ainsi qu'un header de type Authorization contenant le token
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.data.result) {
          // ? si le résultat de la requete est vrai
          setAuth({ role: +json.data.role }); // ? Nous venons re-renseigner le rôle
        } else {
          setAuth({ role: 0 }); // ? sinon on effectue un logout
          document.cookie = `vr-api=null;max-age=0`;
        }
      });
  }, []);
  // ? dans AuthContext, on passe l'objet dans la value // ? qui va retourrner l'AuthContext
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {" "}
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
