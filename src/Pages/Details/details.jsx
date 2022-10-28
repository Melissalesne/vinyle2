import React from "react";
import "./details.css";
import { Link } from "react-router-dom";

export default function details() {
  return (
    <div className="detail_container m-4">
      <div className="row">
        <div className="col-md-4 mt-2">
          <img src="./assets/images/imagin.png" className="img-fluid" alt="" />
        </div>
        <div className="col-md-4 my-auto">
          <h5 className="card-detail-singer">Imagine Dragon's</h5>
          <h6 className="card-text-detail">Bones</h6>
          <h6 className="card-detail-price">15€00</h6>
          <hr />
          <p className="detail-desc">
            Soleo saepe ante oculos ponere, idque libenter crebris usurpare
            sermonibus, omnis nostrorum imperatorum, omnis exterarum gentium
            potentissimorumque populorum, omnis clarissimorum regum res gestas,
            cum tuis nec contentionum magnitudine nec numero proeliorum nec
            varietate regionum nec celeritate conficiendi nec dissimilitudine
            bellorum posse conferri; nec vero disiunctissimas terras citius
            passibus cuiusquam potuisse peragrari, quam tuis non dicam cursibus,
            sed victoriis lustratae sunt.
          </p>
          <Link to="/panier">
            <a href="/" className="button-arrow--black mt-2">
              Panier
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
