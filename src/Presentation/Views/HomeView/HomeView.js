import React, { useEffect } from "react";
import ViewModel from "./ViewModel";
import ArtistList from "../../Components/Cards/ArtistList";

export default function ProductList() {
  const { artists, getArtist } = ViewModel();

  useEffect(() => {
    getArtist("michael")
  }, []);

  return (
    <div className="page">
      <div>
        <h2>Artists</h2>
      </div>
      <div style={{
        width: "100vw",
      }}>
        <ArtistList data={artists} />
      </div>
    </div>
  );
}
