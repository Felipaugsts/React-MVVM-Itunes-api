import { useState } from "react";
import { FetchArtist } from "../../../Domain/FetchArtist";

export default function ProductListViewModel() {
  const [error, setError] = useState("");
  const [artists, setArtist] = useState([]);

  async function getArtist(artista) {
    const { result, error } = await FetchArtist(artista);
    setError(error);
    setArtist(result);
  }
  return {
    error,
    getArtist,
    artists,
  };
}
