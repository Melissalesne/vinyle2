import React from "react";
import { NavLink } from "react-router-dom";
import "./category.css";

export default function Category() {
  return (
    <>
      <h2 className="titre_category text-center">
        Découvrez nos catégories de vinyles
      </h2>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-4 g-3 ">
          <div className="col">
            <div className="card">
              <img
                src="./assets/images/rock.jpg"
                className="card-img-top"
                alt="..."
              />
              <NavLink to="/popRock">
                <div className="card-body box">
                  <h5 className="card-title text">Pop Rock</h5>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="./assets/images/soul.jpg"
                className="card-img-top"
                alt="..."
              />
              <NavLink to="/soul">
                <div className="card-body box">
                  <h5 className="card-title text">Soul</h5>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="./assets/images/jazz.jpg"
                className="card-img-top"
                alt="..."
              />
              <NavLink to="/jazzBlues">
                <div className="card-body box">
                  <h5 className="card-title text">Blue&Jazz</h5>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="./assets/images/varieter1.jpg"
                className="card-img-top"
                alt="..."
              />
              <NavLink to="/chansonFrancaises">
                <div className="card-body box">
                  <h5 className="card-title text">Chansons Françaises</h5>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="./assets/images/classique.jpg"
                className="card-img-top"
                alt="..."
              />
              <NavLink to="/classique">
                <div className="card-body box">
                  <h5 className="card-title text">Classique</h5>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="./assets/images/film.jpg"
                className="card-img-top"
                alt="..."
              />
              <NavLink to="/bandesOriginal">
                <div className="card-body box">
                  <h5 className="card-title text">Bandes original</h5>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="./assets/images/reggae.jpg"
                className="card-img-top"
                alt="..."
              />
              <NavLink to="/reggae">
                <div className="card-body box">
                  <h5 className="card-title text">Reggae</h5>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="./assets/images/electro.jpg"
                className="card-img-top"
                alt="..."
              />
              <NavLink to="/electro">
                <div className="card-body box">
                  <h5 className="card-title text">Eléctro</h5>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
