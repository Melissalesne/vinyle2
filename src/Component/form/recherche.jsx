import React from "react";
import { useState, useEffect } from "react";

const CLIENT_ID = "35bde3d071a9460a9bc6ebe4e30a1966";
const CLIENT_SECRET = "4b756862742d43aba7606dd361ece67f";

export default function Recherche() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  // const [albums, setAlbums] = useState([]);

  useEffect(() => {
    //? API Access Token

    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => console.log(data.access_token));
  }, []);

  // ? Search

  async function search() {
    console.log("Search for " + searchInput); //? exemple: Imagine Dragon's

    //? Obtenir une demande en utilisant la recherche pour obtenir l'identifiant de l'artiste
    const searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    const artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    console.log("Artist ID is " + artistID);

    //?  Obtenez une demande avec l'ID d'artiste récupérez tous les albums de cet artiste
    const albums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=album&market=US&limit=20",
      searchParameters
    );
  }

  // ? Afficher ces albums à l'utilisateur
  return (
    <>
      <div className="box1 m-3">
        <input
          placeholder="Je recherche artiste, label..."
          type="input"
          onKeyPress={(event) => {
            if (event.key == "Enter") {
              search();
            }
          }}
          onChange={(event) => setSearchInput(event.target.value)}
        />

        <i className="fas fa-search" onClick={search}></i>
      </div>
    </>
  );
}
