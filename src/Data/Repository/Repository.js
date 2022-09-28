import { fetch } from "../Network/Datasource";

export async function fetchArtist(artist) {
  const { result, error } = await fetch(artist);
  return { result, error };
}