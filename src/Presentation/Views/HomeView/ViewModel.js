import { useState } from "react";
import { FetchArtist } from "../../../Domain/FetchArtist";
import { useDispatch, useSelector } from "react-redux";
import {
  loading,
  startLoading,
  stopLoading,
} from "../../../Data/Store/slices/userSlice";

export default function ProductListViewModel() {
  const [error, setError] = useState("");
  const [artists, setArtist] = useState([]);
  const [searchEvent, setSearch] = useState("");
  const [currentPage, setPage] = useState(1);

  const postsPerPage = 30;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentArtists = artists.slice(indexOfFirstPost, indexOfLastPost);

  const dispatch = useDispatch();
  const isLoading = useSelector(loading);

  async function getArtist(artista) {
    dispatch(startLoading());
    const { result, error } = await FetchArtist(artista);
    setError(error);
    setArtist(result);
    dispatch(stopLoading());
  }

  function searchChange(event) {
    setSearch(event.target.value);
  }

  function startSearch(e) {
    if (e.key === "Enter") {
      dispatch(startLoading());
      getArtist(searchEvent);
    }
  }

  function paginate(pageNumber) {
    setPage(pageNumber);
    window.scrollTo(0, 0);
  }

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
