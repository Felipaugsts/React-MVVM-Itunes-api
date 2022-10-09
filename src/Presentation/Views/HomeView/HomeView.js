import React, { useEffect } from "react";
import ViewModel from "./ViewModel";
import ArtistList from "../../Components/Cards/ArtistList";
import TextField from "../../Components/TextField/TextField";
import Pagination from "../../Components/Pagination/Pagination";

export default function ProductList() {
  const {
    startSearch,
    searchChange,
    currentArtists,
    artists,
    getArtist,
    isLoading,
    postsPerPage,
    paginate,
  } = ViewModel();

  useEffect(() => {
    getArtist("");
  }, []);

  return (
    <div
      className="page"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h2>Artists</h2>
      </div>
      <TextField searchChange={searchChange} keyDown={startSearch} />
      {isLoading ? (
        <div>Loading ...</div>
      ) : currentArtists.length > 0 ? (
        <div style={{ width: "90vw" }}>
          <ArtistList data={currentArtists} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={artists.length}
            paginate={paginate}
          />
        </div>
      ) : (
        <h2>Nothing to show</h2>
      )}
    </div>
  );
}
