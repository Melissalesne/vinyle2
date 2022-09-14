import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./Pages/Accueil/Acceuil";
import Nouveautes from "./Pages/Nouveautes/Nouveautes";
import Ventes from "./Pages/Top-ventes/Ventes";
import Genres from "./Pages/Genres/Genres";
import PopRock from "./Pages/PopRock/PopRock";
import Soul from "./Pages/Soul/Soul";
import JazzBlues from "./Pages/JazzBlues/JazzBlues";
import ChansonFrancaises from "./Pages/ChansonFrancaises/ChansonsFrancaise";
import Classique from "./Pages/Classique/Classique";
import BandesOriginal from "./Pages/BandesOriginal/BandesOriginal";
import Histoire from "./Pages/histoireDuVinyle/histoire";
import Connexion from "./Pages/Connexion/Connexion";
import Panier from "./Pages/Panier/Panier";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/nouveautes" element={<Nouveautes />} />
          <Route path="/ventes" element={<Ventes />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/popRock" element={<PopRock />} />
          <Route path="/soul" element={<Soul />} />
          <Route path="/jazzBlues" element={<JazzBlues />} />
          <Route path="/chansonFrancaises" element={<ChansonFrancaises />} />
          <Route path="/classique" element={<Classique />} />
          <Route path="/bandesOriginal" element={<BandesOriginal />} />
          <Route path="/histoire" element={<Histoire />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/panier" element={<Panier />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
