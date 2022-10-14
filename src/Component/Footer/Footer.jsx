import React from "react";
import "./footer.css";

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
            <li>
              <a href="/" className="text-decoration-none">
                Nouveautés
              </a>
            </li>
            <li>
              <a href="/" className="text-decoration-none">
                Top-ventes
              </a>
            </li>
            <li>
              <a href="/" className="text-decoration-none">
                Genres
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-2">
          <ul className="list">
            <li className=" my-2 a-list">Services clients</li>
            <li>
              <a href="/" className="text-decoration-none">
                C.G.V
              </a>
            </li>
            <li>
              <a href="/" className="text-decoration-none">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="/" className="text-decoration-none">
                Politiques de confidentialités
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-2">
          <ul className="list">
            <li className=" my-2 a-list">Compte</li>
            <li>
              <a href="/" className="text-decoration-none">
                Se connecter
              </a>
            </li>
            <li>
              <a href="/" className="text-decoration-none">
                S'inscrire
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-2">
          <li className=" my-2 a-list ">Suivez nous</li>
          <ul className="list d-flex align-item-center justify-content-center">
            <li>
              <a href="/" className="text-dark">
                <i className="fa-brands fa-facebook me-2 fa-1x"></i>
              </a>
            </li>
            <li>
              <a href="/" className="text-dark">
                <i className="fa-brands fa-twitter mx-2 fa-1x"></i>
              </a>
            </li>
            <li>
              <a href="/" className="text-dark">
                <i className="fa-brands fa-instagram mx-2 fa-1x"></i>
              </a>
            </li>
            <li>
              <a href="/" className="text-dark">
                <i className="fa-brands fa-linkedin mx-2 fa-1x"></i>
              </a>
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
