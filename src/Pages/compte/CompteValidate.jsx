import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import doFetch from "../../Helpers/fetchHelpers";
import useFetch from "../../hooks/useFetch";

import "./compteValidate.css";

function CompteValidate() {
  const { token } = useParams();
  const navigate = useNavigate();

  const validate = useFetch("auth/validate", {
    method: "POST",
    body: JSON.stringify({ token }),
  });
  const data = validate?.data?.data;
  // console.log(data);
  const { loading, error } = validate;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formInvalid = (errors) => console.log("Errors", errors); //? si le form n'est pas valide, j'envoie un msg d'erreur

  const formSubmit = async (FormData) => {
    //? une fois le fomulaire soumi et que l'utilisateur aura rentré ses données
    Object.assign(FormData, data);
    const { data: created } = await doFetch("auth/create", {
      // ? je fais une requete à mon back, qui me renverra les données
      method: "POST",
      body: JSON.stringify(FormData),
    });
    if (created.result) {
      // ? si les résultat sont correcte
      navigate("/compte"); //? je redirige le user vers la page compte
    }
  };

  const validPw = () => {
    // ? on vérifie si le MDP est valide
    return (
      document.getElementById("pass-input").value === // ? si la valeur du MDP et égale a la confirmation du MDP
      document.getElementById("confirm-input").value
    );
  };
  if (loading) {
    return "Veuillez patienter ..."; // ? on lance un loading
  }
  if (!data?.result) {
    // ? si les données entré ne correspondent pas

    return "Votre inscription n'a pas pu être validée, envoyez une nouvelle demande"; //? on return un message
  }

  return (
    <>
      {data?.result && (
        <div className="container">
          <div className="login-form mt-5 p-4">
            <div className="row justify-content-center">
              <div className=" col-md-6 bg-dark text-white rounded-3">
                <div className="row px-3 mb-4">
                  <div className="top-part d-flex align-items-center">
                    <div className="text me-3"></div>
                  </div>
                </div>

                <div className="row px-3 mb-4">
                  <form
                    onSubmit={handleSubmit(formSubmit, formInvalid)}
                    noValidate
                  >
                    <div className="mb-3">
                      <label htmlFor="pass-input" className="form-label">
                        Mot de passe
                        <i className={"text-danger"}>
                          {errors.pass ? " *" : " "}
                        </i>
                      </label>
                      <input
                        type="password"
                        {...register("pass", {
                          required: true,
                          regex: /^(?=.*[A-Z]).{6,}$/,
                        })}
                        // name="mot_de_passe"
                        className="form-control rounded-pill"
                        id="pass-input"
                      />
                      <i className={"text-danger d-block"}>
                        {errors.pass
                          ? "* at least 6 letters including a capital letter"
                          : " "}
                      </i>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="confirm-input" className="form-label">
                        Confirm{" "}
                        <i className={"text-danger"}>
                          {errors.confirm ? " *" : " "}
                        </i>
                      </label>
                      <input
                        id="confirm-input"
                        type="password"
                        {...register("confirm", {
                          required: true,
                          regex: /^(?=.*[A-Z]).{6,}$/,
                          validate: validPw,
                        })}
                        placeholder="confirm please"
                        className="form-control"
                      />
                      <i className={"text-danger d-block"}>
                        {errors.confirm
                          ? "* must be the same as entered password"
                          : " "}
                      </i>
                    </div>

                    <button type="submit" className="login-mdp">
                      Connexion
                    </button>
                  </form>
                </div>

                {/* <div className="row mb-4 px-3">
                  <small className="font-weight-bold">
                    Je n'ai pas de compte ?{" "}
                    <Link to="/inscription">
                      <span className="enregistrer">Enregistrer</span>
                    </Link>
                  </small>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CompteValidate;
