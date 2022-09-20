import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";

export default function NoNavbarScreen() {
  return (
    <div>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
