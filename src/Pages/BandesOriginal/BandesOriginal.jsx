import React from "react";
import "./bandesOriginal.css";
import { Link } from "react-router-dom";

export default function BandesOriginal() {
  return (
    <>
      <div className="card_container mt-5 m-4">
        <div className="row text-center align-items-center justify-content-center g-4">
          <div className="zoom col-lg-3 mt-3">
            <div className="card-categorie">
              <img
                src="./assets/images/vinyle.png"
                className="card-img-top-categorie"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title-singer">Imagine Dragon's</h5>
                <h6 className="card-text-music ">Bones</h6>
                <h6 className="card-text-price">15€00</h6>
                <Link to="/details">
                  <a href="/" className="button-arrow--black mt-2">
                    Détails
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
