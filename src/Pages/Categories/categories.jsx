import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Categories() {
  const { search } = useParams();
  return (
    <div>
      {search}
      <div className="card_container mt-5 m-4">
        <div className="row text-center align-items-center justify-content-center g-4">
          <div className="zoom col-lg-3 mt-3">
            <div className="card-categorie">
              <img src="" className="card-img-top-categorie" alt="..." />
              <div className="card-body">
                <h5 className="card-title-singer"></h5>
                <h6 className="card-text-music "></h6>
                <h6 className="card-text-price"></h6>
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
    </div>
  );
}
