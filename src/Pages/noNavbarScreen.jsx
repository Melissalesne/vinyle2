import React from "react";
import { Outlet } from "react-router-dom";

export default function NoNavbarScreen() {
  return (
    <div>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
