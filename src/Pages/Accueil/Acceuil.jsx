import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Carousel from "../../Component/Carousel/Carousel";
import Category from "../../Component/CategoryCards/Category";

export default function Acceuil() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Category />
    </div>
  );
}
