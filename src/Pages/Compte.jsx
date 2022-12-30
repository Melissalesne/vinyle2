import { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { AuthContext } from "../contexts/AuthContext";
import "./compte.css";

function Compte() {
  const { auth } = useContext(AuthContext);
  const { data, loading, error, text } = useFetch("compte/" + auth.id);
  if (loading) return <div>Loading ...</div>;
  if (error) {
    console.log(error, text);
    return <div>Error ! </div>;
  }
  return (
    <div classNameName="profil-container mt-5">
      <h1 className="pro mt-3">Bienvenue sur votre espace personnel </h1>

      {data && data.email}

      <div className="services pb-3">
        <div className="container">
          <div className="pt-5">
            <h2 className="vc_custom_heading ico_header">Mon profil</h2>
            <hr />
            <div className=" p-pro row gx-2">
              <div className="col-md-3">
                <div className="investor-box text-center m-2">
                  <h2>Suivie de commandes</h2>
                  <i className=" fa-solid fa-truck-arrow-right fa-2x mt-3"></i>
                  <div className="flip-view">
                    <a href="#">
                      Lire plus <i className="fas fa-chevron-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="investor-box text-center m-2">
                  <h2>Mes derniers achats</h2>
                  <i className=" fa-solid fa-cart-shopping fa-2x mt-3"></i>
                  <div className="flip-view">
                    <a href="#">
                      Lire plus <i className="fas fa-chevron-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="investor-box text-center m-2">
                  <h2>Mes imformations</h2>
                  <i className=" fa-solid fa-user fa-2x mt-3"></i>
                  <div className="flip-view">
                    <a href="#">
                      Lire plus <i className="fas fa-chevron-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="investor-box text-center m-2">
                  <h2>Mes adresses</h2>
                  <i className=" fa-regular fa-envelope fa-2x mt-3"></i>
                  <div className="flip-view">
                    <a href="#">
                      Lire <i className="fas fa-chevron-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="investor-box text-center m-2">
                  <h2>Aides et services</h2>
                  <i className="fa-solid fa-users fa-2x mt-3"></i>
                  <div className="flip-view">
                    <a href="#">
                      Lire <i className="fas fa-chevron-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="investor-box text-center m-2">
                  <h2>Mes moyens de paiements</h2>
                  <i className="fa-solid fa-credit-card fa-2x mt-3"></i>
                  <div className="flip-view">
                    <a href="#">
                      Lire <i className="fas fa-chevron-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="investor-box text-center m-2">
                  <h2>Mes favoris</h2>
                  <i class="fa-solid fa-heart fa-2x mt-3"></i>
                  <div className="flip-view">
                    <a href="#">
                      Lire <i className="fas fa-chevron-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="investor-box text-center m-2">
                  <h2>Retour d'achats</h2>
                  <i class="fa-solid fa-rotate-left fa-2x mt-3"></i>
                  <div className="flip-view">
                    <a href="#">
                      Lire <i className="fas fa-chevron-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Compte;
