import { useState } from "react";
import { FetchArtist } from "../../../Domain/FetchArtist";

export default function ProductListViewModel() {
  const [error, setError] = useState("");
  const [artists, setArtist] = useState([]);
  const [searchEvent, setSearch] = useState("");
  const [isLoading, setLoader] = useState(false);
  const [currentPage, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(30);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentArtists = artists.slice(indexOfFirstPost, indexOfLastPost);
  


  async function getArtist(artista) {
    const { result, error } = await FetchArtist(artista);
    setError(error);
    setArtist(result);
    setLoader(false);
  }

  function searchChange(event) {
    setSearch(event.target.value);
  }

  function startSearch(e) {
     if (e.key === "Enter") {
       setLoader(true)
       getArtist(searchEvent);
     }
  }

  function paginate(pageNumber) {
        setPage(pageNumber);
        window.scrollTo(0, 0);
      };

  return {
    error,
    artists,
    getArtist,
    currentArtists,
    startSearch,
    searchChange,
    isLoading,
    postsPerPage,
    paginate,
    currentPage,
  };
}
