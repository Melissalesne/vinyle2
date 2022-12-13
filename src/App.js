import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Acceuil from "./Pages/Accueil/Acceuil";
import BaseScreen from "./Pages/baseScreen";
import React, { Suspense } from "react";
// import Connexion from "./Pages/Connexion/Connexion";
// import Inscription from "./Pages/Inscription/Inscription";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import Compte from "./Pages/Compte";
import Admin from "./Pages/Admin";
import { deleteCookie } from "./Helpers/cookieHelper";

const Nouveautes = React.lazy(() => import("./Pages/Nouveautes/Nouveautes"));
const Inscription = React.lazy(() => import("./Pages/Inscription/Inscription"));
const Connexion = React.lazy(() => import("./Pages/Connexion/Connexion"));
const Ventes = React.lazy(() => import("./Pages/Top-ventes/Ventes"));
const Genres = React.lazy(() => import("./Pages/Genres/Genres"));
const PopRock = React.lazy(() => import("./Pages/PopRock/PopRock"));
const Soul = React.lazy(() => import("./Pages/Soul/Soul"));
const JazzBlues = React.lazy(() => import("./Pages/JazzBlues/JazzBlues"));
const ChansonFrancaises = React.lazy(() =>
  import("./Pages/ChansonFrancaises/ChansonsFrancaise")
);
const Classique = React.lazy(() => import("./Pages/Classique/Classique"));
const BandesOriginal = React.lazy(() =>
  import("./Pages/BandesOriginal/BandesOriginal")
);
const Reggae = React.lazy(() => import("./Pages/Reggae/Reggae"));
const Electro = React.lazy(() => import("./Pages/Electro/Electro"));
const Categories = React.lazy(() => import("./Pages/Categories/categories"));
const Histoire = React.lazy(() => import("./Pages/histoireDuVinyle/histoire"));
const Panier = React.lazy(() => import("./Pages/Panier/Panier"));
const Details = React.lazy(() => import("./Pages/Details/details"));

function App() {
  const { auth, setAuth } = useContext(AuthContext);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseScreen />}>
            <Route
              index
              element={
                <Suspense fallback={<span>chargement</span>}>
                  <Acceuil />
                </Suspense>
              }
            />
            <Route
              path="/nouveautes"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  <Nouveautes />
                </Suspense>
              }
            />
            <Route
              path="/ventes"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  <Ventes />
                </Suspense>
              }
            />
            <Route
              path="/genres"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  <Genres />
                </Suspense>
              }
            />
            <Route
              path="/popRock"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  <PopRock />
                </Suspense>
              }
            />
            <Route
              path="/soul"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  <Soul />
                </Suspense>
              }
            />
            <Route
              path="/jazzBlues"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  <JazzBlues />
                </Suspense>
              }
            />
            <Route
              path="/chansonFrancaises"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  <ChansonFrancaises />
                </Suspense>
              }
            />
            <Route
              path="/classique"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  {" "}
                  <Classique />
                </Suspense>
              }
            />
            <Route
              path="/bandesOriginal"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  <BandesOriginal />
                </Suspense>
              }
            />
            <Route
              path="/reggae"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  <Reggae />
                </Suspense>
              }
            />
            <Route
              path="/electro"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  <Electro />
                </Suspense>
              }
            />
            <Route
              path="/categories/:search"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  <Categories />
                </Suspense>
              }
            />
            <Route
              path="/histoire"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  <Histoire />
                </Suspense>
              }
            />
            <Route
              path="/panier"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  <Panier />
                </Suspense>
              }
            />
            <Route
              path="/details"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  <Details />
                </Suspense>
              }
            />

            {/* {auth.role > 0 && (
              <Route
                path="/compte"
                element={
                  <Suspense fallback={<span>Chargement</span>}>
                    <Compte />
                  </Suspense>
                }
              />
            )}
            {auth.role === 3 && (
              <Route
                path="/admin"
                element={
                  <Suspense fallback={<span>Chargement</span>}>
                    <Admin />
                  </Suspense>
                }
              />
            )} */}

            <Route
              path="/inscription"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  <Inscription />
                </Suspense>
              }
            />

            <Route
              path="/connexion"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  <Connexion />
                </Suspense>
              }
            />
          </Route>

          {/* <Route path="/" element={<NoNavbarScreen />}> */}

          {/* </Route> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
