import React, { useEffect } from "react";
import ViewModel from "./ViewModel";
import ArtistList from "../../Components/Cards/ArtistList";
import TextField from "../../Components/TextField/TextField";
import Pagination from "../../Components/Pagination/Pagination";

export default function ArtistPage() {
  const {
    startSearch,
    searchChange,
    currentArtists: displayedArtists,
    artists: allArtists,
    getArtist,
    isLoading,
    postsPerPage,
    paginate,
  } = ViewModel();

  useEffect(() => {
    getArtist("");
  }, []);

  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const hasArtists = displayedArtists.length > 0;
  const showArtists = !isLoading && hasArtists;

  return (
    <div className="page" style={pageStyle}>
      <div>
        <h2>Artists</h2>
      </div>
      <TextField searchChange={searchChange} keyDown={startSearch} />
      {isLoading ? (
        <div>Loading...</div>
      ) : showArtists ? (
        <div style={{ width: "90vw" }}>
          <ArtistList data={displayedArtists} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={allArtists.length}
            paginate={paginate}
          />
        </div>
      ) : (
        <h2>Nothing to show</h2>
      )}
    </div>
  );
}
