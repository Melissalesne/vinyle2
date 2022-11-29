import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./inscription.css";

export default function Inscription() {
  return (
    <body>
      <div className="container">
        <div className="form mt-5">
          <div className=" row justify-content-center">
            <div className=" bgForm col-md-6 bg-dark  text-white rounded-3">
              <div className="row px-3 mb-4">
                <div className="top-part d-flex align-items-center">
                  <div className="text me-3">
                    <h5>Créer votre compte</h5>
                  </div>
                </div>
              </div>

              <div className="row px-3 mb-4">
                <form>
                  <div class="mb-3">
                    <div class="row">
                      <div class="col">
                        <label className="form-label">Votre nom</label>
                        <input
                          type="text"
                          class="form-control rounded-pill"
                          placeholder=" votre nom"
                          aria-label="First name"
                        />
                      </div>
                      <div class="col">
                        <label className="form-label">Votre prénom</label>
                        <input
                          type="text"
                          class="form-control rounded-pill"
                          placeholder=" votre prénom"
                          aria-label="Last name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPhone" class="form-label">
                      votre numéro de téléphone
                    </label>
                    <input
                      type="text"
                      class="form-control rounded-pill"
                      id="exampleInputPhone"
                      aria-describedby="PhoneHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      votre email
                    </label>
                    <input
                      type="email"
                      class="form-control rounded-pill"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control rounded-pill"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <button type="submit" class="enregistrer-button">
                    Enregistrer
                  </button>
                </form>
              </div>

              <div className="row px-3 mb-4">
                <small className="font-weight-bold">
                  Vous avez déjà un compte ?{" "}
                  <Link to="/connexion">
                    <a className="text-danger" href="/connexion">
                      S'identifier
                    </a>
                  </Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
