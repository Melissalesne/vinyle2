import React from "react";
import "./carousel.css";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./assets/images/header.jpg"
              className="d-block w-100"
              alt="..."
            />

            <div className="carousel-caption">
              <h1 className="title-carousel">
                Bienvenue dans votre boutique Vinyle Remenber
              </h1>
              <Link to="/histoire">
                <button type="button" className="btn btn-dark p-2 fs-4 mt-2">
                  Découvrir
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./assets/images/nouveaute1.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h1 className="title-carousel">
                Nouveautés ça vient d'arrivées dans votre boutique.
              </h1>
              <Link to="/nouveautes">
                <button type="button" className="btn btn-dark p-2 fs-4 mt-2">
                  Découvrir
                </button>
              </Link>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="./assets/images/vente.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h1 className="title-carousel">
                Top ventes des vinyles les plus vendus en 2022.
              </h1>
              <Link to="/ventes">
                <button
                  type="button"
                  className="btn btn-dark mt-3 p-2 fs-4 mt-2"
                >
                  Découvrir
                </button>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
