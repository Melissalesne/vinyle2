import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Carousel from "../../Component/Carousel/Carousel";
import Category from "../../Component/CategoryCards/Category";
import Footer from "../../Component/Footer/Footer";

export default function Acceuil() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Category />
      <Footer />
    </div>
  );
}
