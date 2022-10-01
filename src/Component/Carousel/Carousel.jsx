import React from "react";
import "./carousel.css";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="./assets/images/header.jpg"
              class="d-block w-100"
              alt="..."
            />

            <div class="carousel-caption">
              <h1>Bienvenue dans votre boutique Vinyle Remenber</h1>
              <button type="button" className="btn btn-dark p-2 fs-4 mt-2">
                Découvrir
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="./assets/images/nouveaute.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption">
              <h1>Nouveautés ça vient d'arrivées dans votre boutique.</h1>
              <Link to="/nouveautes">
                <button type="button" className="btn btn-dark p-2 fs-4 mt-2">
                  Découvrir
                </button>
              </Link>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="./assets/images/vente.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption">
              <h1>Top ventes des vinyles les plus vendus en 2022.</h1>
              <button type="button" className="btn btn-dark mt-3 p-2 fs-4 mt-2">
                Découvrir
              </button>
            </div>
          </div>
        </div>
        {/* <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
  );
}
