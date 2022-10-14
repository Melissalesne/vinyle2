import React from "react";
import "./information.css";

export default function Informations() {
  return (
    <div className="section-infos">
      <div className="bloc container-fluid pb-3 ">
        <div className="row d-flex justify-content-center">
          <div className="container-box col-lg-3 col-md-6 d-flex flex-column justify-content-center align-items-center ">
            <img
              className="img-infos"
              src="./assets/images/commande.png"
              alt="commande icon"
            />
            <h4 className="title_info text-center text-dark fs-3">Commande</h4>
            <p>
              Après votre achat, les commandes sont préparées
              <br /> avec soins par notre équipe dans les plus bref délais.
            </p>
          </div>

          <div className="container-box  col-lg-3 col-md-6 d-flex flex-column justify-content-center align-items-center ">
            <img
              className="img-infos "
              src="./assets/images/paiement.png"
              alt="paiement icon"
            />
            <h4 className=" title_info text-center text-dark fs-3">Paiement</h4>
            <p>
              Commandez en toute sérénité. Nous utilisons le <br />
              système 3D secure avec vérification d'identités <br />
              par l'envoie d'un code par sms.
            </p>
          </div>

          <div className="container-box col-lg-3 col-md-6 d-flex flex-column justify-content-center align-items-center ">
            <img
              className="img-infos"
              src="./assets/images/livraison.png"
              alt="livraison icon"
            />
            <h4 className="title_info text-center text-dark fs-3">Livraison</h4>
            <p>
              Chez Vinyle Remenber la livraison est gratuites.
              <br />
              Et les produits sont envoyés par transporteur en 24H !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
