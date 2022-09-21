import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="main_footer pt-4">
      <div className="main_container ">
        <div className="row">
          <div className="col-md-3">
            <h4>Catégories</h4>
            <hr />
            <ul className="list">
              <li>Nouveautés</li>
              <li>Top-ventes</li>
              <li>Genres</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Services client</h4>
            <hr />
            <ul className="list">
              <li>C.G.V</li>
              <li>Mentions légales</li>
              <li>Politiques de confidentialités</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Compte</h4>
            <hr />
            <ul className="list">
              <li>Se connecter</li>
              <li>S'inscrire</li>
            </ul>
          </div>

          <div className="col-md-3">
            <img src="./assets/images/vinyleremenber2.png" />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <p className="bg-dark py-2 px-3 text-white">Nos actualités sur</p>
            <div>
              <i class="fa-brands fa-2x me-2 fa-facebook"></i>
              <i class="fa-brands fa-2x me-2 fa-twitter"></i>
              <i class="fa-brands fa-2x me-2 fa-instagram"></i>
              <i class="fa-brands fa-2x me-2 fa-linkedin"></i>
            </div>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src="./assets/images/visa.png" alt="" />
            <img
              className="img-fluid"
              src="./assets/images/paypal.png"
              alt=""
            />
            <img className="img-fluid" src="./assets/images/card2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="copyright bg-dark">
        <div class="2nd_container mt-5">
          <div className="row">
            <div className=" col-md-12  mt-2">
              <p className=" para text-white">
                &copy;2022 - tous droit réservés
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
