import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Carousel from "../../Component/Carousel/Carousel";
import Recherche from "../../Component/form/recherche";
import Category from "../../Component/CategoryCards/Category";
import Informations from "../../Component/informations/Informations";
import Footer from "../../Component/Footer/Footer";
import "./acceuil.css";

export default function Acceuil() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Recherche />
      <Category />
      <Informations />
      <Footer />
    </div>
  );
}
