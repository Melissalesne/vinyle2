import React from "react";
import { Link } from "react-router-dom";
import "./connexion.css";

export default function Connexion() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jsonData = Object.fromEntries(formData.entries());
    console.log(jsonData);

    fetch("http://vr-api/auth/connexion", {
      method: "POST",
      body: JSON.stringify(jsonData),
    })
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
      });
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
                <div class="mb-3">
                  <label htmlfor="exampleInputEmail1" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    class="form-control rounded-pill"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label htmlfor="exampleInputPassword1" class="form-label">
                    Mot de passe
                  </label>
                  <input
                    type="mot-de-passe"
                    name="mot_de_passe"
                    class="form-control rounded-pill"
                    id="exampleInputmotDePasse1"
                  />
                </div>
                <div class="mb-3 form-check">
                  <div className="forgot-or-remenber d-flex justify-content-between">
                    <div className="left">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1">
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
                  <a class="text-danger" href="/">
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
