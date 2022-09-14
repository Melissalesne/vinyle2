import React from "react";
import "./connexion.css";

export default function Connexion() {
  return (
    <div>
      <h1>Bienvenue sur la page Connexion</h1>

      <form>
        <div className="mb-3">
          <label for="exampleInputName1" className="form-label">
            Votre nom
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="nameHelp"
          />
          <div id="nameHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label for="exampleInputFirstname1" className="form-label">
            Votre prénom
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputFirstname1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Votre email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Votre mot de passe
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputConfirmPassword1" className="form-label">
            Confirmer votre mot de passe
          </label>
          <input
            type="Confirmpassword"
            className="form-control"
            id="exampleInputConfirmPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </form>
    </div>
  );
}
