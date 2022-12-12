import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { setCookie, deleteCookie } from "../../Helpers/cookieHelper";
import doFetch from "../../Helpers/fetchHelpers";
import useFetch from "../../hooks/useFetch";
import "./connexion.css";

export default function Connexion() {
  const { setAuth } = useContext(AuthContext); // ? utilise un use context
  const navigate = useNavigate();
  const [valid, setValid] = useState({ email: false, mot_de_passe: false });

  const validForm = () => {
    const isValid = { email: false, mot_de_passe: false };
    const exampleInputEmail1 = document.getElementById("exampleInputEmail1"); // ? selectionne l'input email
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // ? créer un regex
    if (emailPattern.test(exampleInputEmail1?.value)) {
      // ? on test l'email avec le regex pattern
      isValid.email = true; // ? on set la validation d'mail a true
    }
    const exampleInputPassword1 = document.getElementById(
      "exampleInputmotDePasse1"
    );
    const mot_de_passePattern = /^(?=.*[A-Z]).{6,}$/;
    if (mot_de_passePattern.test(exampleInputPassword1?.value)) {
      isValid.mot_de_passe = true;
    }
    setValid(isValid);
    return isValid.email === true && isValid.mot_de_passe === true; // ? return true si le mdp et l'email sont vrai
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ? empeche les evenements par défaut
    const formData = new FormData(e.target);
    const jsonData = Object.fromEntries(formData.entries());
    console.log(jsonData);

    if (!validForm(jsonData)) {
      // ? si les données du form ne sont pas valide on return
      return;
    }

    const { data } = await doFetch("auth/connexion", {
      // ? je fait une requete à mon back
      method: "POST",
      body: JSON.stringify(jsonData), // ? retourne les données  dans un tableau associatif
    });

    if (data?.data?.result) {
      // ? si le resultat de la requete est vrai
      setAuth({ role: data.data.role, id: data.data.id }); // ? set l'utilisateur
      setCookie("vinyle_remenber", data.data.token, {
        // ? stoke ds les cookies le token
        "max-age": 60 * 60 * 24,
      });
      navigate("/compte"); // ? on redirige l'utilisateur
    } else {
      setAuth({ role: 0, id: 0 });
      deleteCookie("vinyle_remenber");
    }
  };

  return (
    <div className="container">
      <div className="login-form mt-4">
        <div className="row justify-content-center">
          <div className=" col-md-6 bg-dark text-white rounded-3">
            <div className="row px-3 mb-4">
              <div className="top-part d-flex align-items-center">
                <div className="text me-3">
                  <h5>Connectez-vous</h5>
                </div>
              </div>
            </div>

            <div className="row px-3 mb-4">
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlfor="exampleInputEmail1" className="form-label">
                    Email
                    <i
                      className={"text-danger" + (valid.email ? " d-none" : "")}
                    >
                      *
                    </i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control rounded-pill"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlfor="exampleInputmotDePasse1"
                    className="form-label"
                  >
                    Mot de passe
                    <i
                      className={
                        "text-danger" + (valid.password ? " d-none" : "")
                      }
                    >
                      *
                    </i>
                  </label>
                  <input
                    type="mot-de-passe"
                    name="mot_de_passe"
                    className="form-control rounded-pill"
                    id="exampleInputmotDePasse1"
                  />
                  <i
                    className={
                      "text-danger" + (valid.password ? " d-none" : "")
                    }
                  >
                    * 6 letters including a capital letter
                  </i>
                </div>
                <div className="mb-3 form-check">
                  <div className="forgot-or-remenber d-flex justify-content-between">
                    <div className="left">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" for="exampleCheck1">
                        Remenber
                      </label>
                    </div>
                    <div className="right">
                      <p>
                        <a href="/">Oublie de mot de passe</a>
                      </p>
                    </div>
                  </div>
                </div>

                <button type="submit" className="login-mdp">
                  Connexion
                </button>
              </form>
            </div>

            <div className="row mb-4 px-3">
              <small className="font-weight-bold">
                Je n'ai pas de compte ?{" "}
                <Link to="/inscription">
                  <a className="text-danger" href="/">
                    Enregistrer
                  </a>
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
