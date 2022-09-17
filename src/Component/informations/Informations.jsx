import React from "react";
import "./information.css";

export default function Informations() {
  return (
    <div className="section-infos">
      <div class="bloc container-fluid p-5 mt-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-4 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <img
              class="img-infos"
              src="./assets/images/commande.png"
              alt="commande icon"
            />
            <h4 class="text-center text-white fs-3">Commande</h4>
            <p>
              Après votre achat, les commandes sont préparées
              <br /> avec soins par notre équipe dans les plus bref délais.
            </p>
          </div>

          <div class="col-lg-4 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <img
              class="img-infos"
              src="./assets/images/livraison.png"
              alt="livraison icon"
            />
            <h4 class="text-center text-white fs-3">Livraison</h4>
            <p>
              Chez Vinyle Remenber la livraison est gratuites.
              <br />
              Et les produits sont envoyés par transporteur en 24H !
            </p>
          </div>

          <div class="col-lg-4 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <img
              class="img-infos"
              src="./assets/images/paiement.png"
              alt="paiement icon"
            />
            <h2 class="text-center text-white fs-3">Paiement</h2>
            <p>
              Commandez en toute sérénité. Nous utilisons le système 3D
              <br /> secure avec vérification d'identités par l'envoie d'un code
              par sms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
