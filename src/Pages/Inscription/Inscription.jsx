import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./inscription.css";
import React, { useState } from "react";
import doFetch from "../../Helpers/fetchHelpers";

export default function Inscription() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formInvalid = (errors) => console.log("Errors", errors); // ? si les données du form ne sont pas valid
  const navigate = useNavigate();

  const [msg, setMsg] = useState(""); // ? je sais pas

  const formSubmit = async (formData) => {
    const { data } = await doFetch("auth/register", {
      // ? je fait une requete à mon back
      method: "POST",
      body: JSON.stringify(formData), // ? retourne les données  dans un tableau associatif
    });
    console.log(data);
    setMsg(data.message);
    navigate("/connexion"); // ? on redirige le user
  };

  return (
    <div>
      <div className="container">
        <div className="form mt-5  ">
          <div className=" row justify-content-center">
            <div className=" bgForm col-md-6 bg-dark  text-white rounded-3">
              <div className="row px-3 mb-1">
                <div className="top-part d-flex align-items-center">
                  <div className="text me-3">
                    <h5>Créer votre compte</h5>
                  </div>
                </div>
              </div>

              <div
                className="row px-3 mb-4"
                onSubmit={handleSubmit(formSubmit, formInvalid)}
              >
                <form>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col">
                        <label htmlFor="nom-input" className="form-label">
                          Votre nom
                          <i className={"text-danger"}>
                            {errors.nom ? " *" : " "}
                          </i>
                        </label>
                        <input
                          id="name-imput"
                          type="text"
                          className="form-control rounded-pill"
                          {...register("nom", {
                            required: true,
                            minLength: 3,
                          })}
                        />
                        <i className={"text-danger d-block"}>
                          {errors.nom ? "* at least 3 chars" : " "}{" "}
                        </i>
                      </div>
                      <div className="col">
                        <label htmlFor="prenom-input" className="form-label">
                          Votre prénom{" "}
                          <i className={"text-danger"}>
                            {errors.prenom ? " *" : " "}
                          </i>
                        </label>
                        <input
                          id="prenom-input"
                          type="text"
                          className="form-control rounded-pill"
                          {...register("prenom", {
                            required: true,
                            minLength: 3,
                          })}
                        />
                        <i className={"text-danger d-block"}>
                          {errors.prenom ? "* at least 3 chars" : " "}
                        </i>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label">
                      votre numéro de téléphone
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      {...register("numeroDeTelephone", {
                        required: false,
                        minLength: 3,
                      })}
                      id="exampleInputPhone"
                      aria-describedby="PhoneHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputVille" className="form-label">
                      ville
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      {...register("ville", {
                        required: false,
                        minLength: 3,
                      })}
                      id="exampleInputVille"
                      aria-describedby="VilleHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputCodePostal"
                      className="form-label"
                    >
                      Code postal
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      {...register("codePostal", {
                        required: false,
                        minLength: 3,
                      })}
                      id="exampleInputCodePostal"
                      aria-describedby="CodePostalHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPays" className="form-label">
                      Pays
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      {...register("pays", {
                        required: false,
                        minLength: 3,
                      })}
                      id="exampleInputPays"
                      aria-describedby="PaysHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      votre email
                    </label>
                    <i className={"text-danger"}>{errors.email ? " *" : " "}</i>
                    <input
                      type="email"
                      className="form-control rounded-pill"
                      {...register("email", {
                        required: true,
                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                      })}
                    />
                    <i className={"text-danger d-block"}>
                      {errors.email ? "* must be a valid email address" : " "}
                    </i>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      className="form-control rounded-pill"
                      {...register("motDePasse", {
                        required: false,
                        minLength: 3,
                      })}
                      id="exampleInputPassword1"
                    />
                  </div>
                  <button type="submit" className="enregistrer-button">
                    Enregistrer
                  </button>
                </form>
                <div className="text-primary">{msg}</div>
              </div>

              <div className="row px-3 mb-4">
                <small className="font-weight-bold">
                  Vous avez déjà un compte ?{" "}
                  <Link to="/connexion">
                    <span className="identifier">S'identifier</span>
                  </Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
