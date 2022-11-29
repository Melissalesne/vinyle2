import React from "react";
import "./panier.css";

export default function Panier() {
  return (
    <div className="container">
      <h1 className="panier mt-5">Panier</h1>
      <p className="intitule ">
        Retrouvez l'ensemble des produits que vous avez ajouté à votre panier
      </p>

      <br />
      <hr />

      <div className="table-responsive">
        <table class="table ">
          <thead>
            <tr>
              <th scope="col">Produit</th>
              <th scope="col"></th>
              <th scope="col">Quantité</th>
              <th scope="col">Prix</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <img
                  src="./assets/images/imagin.png"
                  className="panier-img"
                  alt=""
                />
              </th>
              <td>Imagine Dragon's</td>
              <td>1</td>
              <td>25€00</td>
              <td>25€00</td>
            </tr>
          </tbody>
        </table>

        <div className="text-end">
          <b>Total de mon panier :</b>
          <br />
          <div class="form-check d-flex">
            <input
              class="form-check-input "
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>
          <button type="button" class="btn btn-dark mt-4">
            Valider mon panier
          </button>
        </div>
      </div>
    </div>
  );
}
