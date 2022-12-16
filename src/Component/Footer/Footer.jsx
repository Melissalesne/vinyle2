import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="main_footer text-dark p-3">
      <div className="row justify-content-around text-center margin-auto ">
        <div className="col-md-2 mt-5 mb-4 ">
          <img src="./assets/images/privacy.png" alt="" />
          <img src="./assets/images/mastercard.png" alt="" />
          <img src="./assets/images/visa.png" alt="" />
          <img src="./assets/images/paypal.png" alt="" />
        </div>

        <div className="col-md-2">
          <ul className="list">
            <li className=" my-2 a-list">Catégories</li>
            <NavLink to="/nouveautes">
              <li>
                <div className="text-decoration-none">Nouveautés</div>
              </li>
            </NavLink>
            <NavLink to="/ventes">
              <li>
                <div className="text-decoration-none">Top-ventes</div>
              </li>
            </NavLink>
            <NavLink to="/">
              <li>
                <div className="text-decoration-none">Genres</div>
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="col-md-2">
          <ul className="list">
            <li className=" my-2 a-list">Services clients</li>

            <NavLink to="/">
              <li>
                <div className="text-decoration-none">C.G.V</div>
              </li>
            </NavLink>
            <NavLink to="/">
              <li>
                <div className="text-decoration-none">Mentions légales</div>
              </li>
            </NavLink>
            <NavLink to="/">
              <li>
                <div className="text-decoration-none">
                  Politiques de confidentialités
                </div>
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="col-md-2">
          <ul className="list">
            <li className=" my-2 a-list">Compte</li>
            <NavLink to="/connexion">
              <li>
                <div className="text-decoration-none">Se connecter</div>
              </li>
            </NavLink>
            <NavLink to="/connexion">
              <li>
                <div className="text-decoration-none">S'inscrire</div>
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="col-md-2">
          <li className=" my-2 a-list ">Suivez nous</li>
          <ul className="list d-flex align-item-center justify-content-center">
            <li>
              <div className="text-dark">
                <i className="fa-brands fa-facebook me-2 fa-1x"></i>
              </div>
            </li>
            <li>
              <div className="text-dark">
                <i className="fa-brands fa-twitter mx-2 fa-1x"></i>
              </div>
            </li>
            <li>
              <div className="text-dark">
                <i className="fa-brands fa-instagram mx-2 fa-1x"></i>
              </div>
            </li>
            <li>
              <div className="text-dark">
                <i className="fa-brands fa-linkedin mx-2 fa-1x"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr />

      <div className="row">
        <div className="col-12 pt-2">
          <p className="footer-para fs-5">
            &copy; 2022 Vinyle Remenber - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
