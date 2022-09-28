import { fetchArtist } from "../Data/Repository/Repository";

export async function FetchArtist(artist) {
  return await fetchArtist(artist);
}
