import React from "react";
import { Link } from "react-router-dom";
import "./inscription.css";

export default function Inscription() {
  return (
    <div className="container">
      <div className="form mt-5">
        <div className=" row">
          <div className="col-md-6 shadow bg-body rounded">
            <img
              className="img-fluid"
              src="./assets/images/register.png"
              alt=""
            />
          </div>
          <div className="col-md-6 bg-dark text-white rounded-2">
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
                        class="form-control"
                        placeholder=" votre nom"
                        aria-label="First name"
                      />
                    </div>
                    <div class="col">
                      <label className="form-label">Votre prénom</label>
                      <input
                        type="text"
                        class="form-control"
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
                    type="number"
                    class="form-control"
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
                    class="form-control"
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
                    class="form-control"
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
  );
}
