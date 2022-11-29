import React from "react";
import Carousel from "../../Component/Carousel/Carousel";
import Category from "../../Component/CategoryCards/Category";
import Informations from "../../Component/informations/Informations";
import "./acceuil.css";

export default function Acceuil() {
  return (
    <div>
      <Carousel />
      <Category />
      <Informations />
    </div>
  );
}
