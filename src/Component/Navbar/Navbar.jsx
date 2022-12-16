import { NavLink } from "react-router-dom";
import Recherche from "../form/Recherche";
import "./navbar.css";
import { AuthContext } from "../../contexts/AuthContext";
import { setCookie, deleteCookie } from "../../Helpers/cookieHelper";
import React, { useContext } from "react";

export default function Navbar() {
  const { setAuth } = useContext(AuthContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg p-3">
        <div className="container-fluid">
          <NavLink to="/">
            <img src="./assets/images/vinyleremenber2.png"></img>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mt-3 mb-lg-0">
              <NavLink to="/nouveautes">
                <li className="nav-item ">
                  <div className="nav-link text-white fs-4" aria-current="page">
                    Nouveautés
                  </div>
                </li>
              </NavLink>
              <NavLink to="/ventes">
                <li className="nav-item">
                  <div className="nav-link text-white fs-4">Top-Ventes</div>
                </li>
              </NavLink>
              <NavLink to="/genres">
                <li className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle text-white fs-4"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Genres
                  </div>

                  <ul className="dropdown-menu">
                    <NavLink to="/popRock">
                      <li>
                        <div className="dropdown-item fs-5">Pop-Rock</div>
                      </li>
                    </NavLink>
                    <NavLink to="/soul">
                      <li>
                        <div className="dropdown-item fs-5">Soul</div>
                      </li>
                    </NavLink>
                    <NavLink to="/jazzBlues">
                      <li>
                        <div className="dropdown-item fs-5 ">Jazz&Blues</div>
                      </li>
                    </NavLink>
                    <NavLink to="/chansonFrancaises">
                      <li>
                        <div className="dropdown-item fs-5 ">
                          Chansons-Françaises
                        </div>
                      </li>
                    </NavLink>
                    <NavLink to="/classique">
                      <li>
                        <div className="dropdown-item fs-5">Classique</div>
                      </li>
                    </NavLink>
                    <NavLink to="/bandesOriginal">
                      <li>
                        <div className="dropdown-item fs-5 ">
                          Bandes originale
                        </div>
                      </li>
                    </NavLink>
                    <NavLink to="/reggae">
                      <li>
                        <div className="dropdown-item fs-5 ">Reggae</div>
                      </li>
                    </NavLink>
                    <NavLink to="/electro">
                      <li>
                        <div className="dropdown-item fs-5 ">Eléctro</div>
                      </li>
                    </NavLink>
                  </ul>
                </li>
              </NavLink>
            </ul>
            <Recherche />
            <ul className="navbar-nav ml-auto mt-3">
              {
                <NavLink
                  to="/"
                  onClick={(e) => {
                    setAuth({ role: 0, id: 0 });
                    deleteCookie("vinyle_remenber");
                  }}
                >
                  <li className="nav-item">
                    <div className="nav-link text-white fs-4">
                      <span>Deconnexion</span>
                      <i className="fa-solid fa-right-from-bracket p-2"></i>
                    </div>
                  </li>
                </NavLink>
              }
              {
                <NavLink to="/connexion">
                  <li className="nav-item">
                    <div className="nav-link text-white fs-4">
                      <span>Compte</span>
                      <i className="fa-solid fa-user p-2"></i>
                    </div>
                  </li>
                </NavLink>
              }
              <NavLink to="/panier">
                <li className="nav-item">
                  <div className="nav-link text-white fs-4">
                    <span> panier</span>
                    <i className="fa-solid fa-cart-shopping p-2"></i>
                  </div>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
