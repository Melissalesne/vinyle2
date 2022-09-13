import React from "react";
import "./category.css";

export default function Category() {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img
              src="./assets/images/rock.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Pop Rock</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src="./assets/images/soul.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Soul</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src="./assets/images/jazz.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Blue&Jazz</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src="./assets/images/varieter.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Chansons Françaises</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src="./assets/images/classique.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Classique</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src="./assets/images/jazz.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Blue&Jazz</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
