import React from "react";
import { NavLink } from "react-router-dom";
import Recherche from "../form/Recherche";
import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar   navbar-expand-lg p-3">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink to="/nouveautes">
                <li className="nav-item ">
                  <a
                    className="nav-link text-white fs-4"
                    aria-current="page"
                    href="/"
                  >
                    Nouveautés
                  </a>
                </li>
              </NavLink>
              <NavLink to="/ventes">
                <li className="nav-item">
                  <a className="nav-link text-white fs-4" href="/">
                    Top-Ventes
                  </a>
                </li>
              </NavLink>
              <NavLink to="/genres">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white fs-4"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Genres
                  </a>

                  <ul className="dropdown-menu">
                    <NavLink to="/popRock">
                      <li>
                        <a className="dropdown-item fs-5" href="/">
                          Pop-Rock
                        </a>
                      </li>
                    </NavLink>
                    <NavLink to="/soul">
                      <li>
                        <a className="dropdown-item fs-5" href="/">
                          Soul
                        </a>
                      </li>
                    </NavLink>
                    <NavLink to="/jazzBlues">
                      <li>
                        <a className="dropdown-item fs-5 " href="/">
                          Jazz&Blues
                        </a>
                      </li>
                    </NavLink>
                    <NavLink to="/chansonFrancaises">
                      <li>
                        <a className="dropdown-item fs-5 " href="/">
                          Chansons-Françaises
                        </a>
                      </li>
                    </NavLink>
                    <NavLink to="/classique">
                      <li>
                        <a className="dropdown-item fs-5" href="/">
                          Classique
                        </a>
                      </li>
                    </NavLink>
                    <NavLink to="/bandesOriginal">
                      <li>
                        <a className="dropdown-item fs-5 " href="/">
                          Bandes originale
                        </a>
                      </li>
                    </NavLink>
                    <NavLink to="/reggae">
                      <li>
                        <a className="dropdown-item fs-5 " href="/">
                          Reggae
                        </a>
                      </li>
                    </NavLink>
                    <NavLink to="/electro">
                      <li>
                        <a className="dropdown-item fs-5 " href="/">
                          Eléctro
                        </a>
                      </li>
                    </NavLink>
                  </ul>
                </li>
              </NavLink>
            </ul>
            <Recherche />
            <ul className="navbar-nav ml-auto">
              {
                <NavLink to="/connexion">
                  <li className="nav-item">
                    <a className="nav-link text-white fs-4" href="/">
                      <span>Compte</span>
                      <i className="fa-solid fa-user p-2"></i>
                    </a>
                  </li>
                </NavLink>
              }
              <NavLink to="/panier">
                <li className="nav-item">
                  <a className="nav-link text-white fs-4" href="/">
                    <span> panier</span>
                    <i className="fa-solid fa-cart-shopping p-2"></i>
                  </a>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
