import React, { useEffect } from "react";
import ViewModel from "./ViewModel";

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
      {console.log("artist controller", artists)}
    </div>
  );
}
