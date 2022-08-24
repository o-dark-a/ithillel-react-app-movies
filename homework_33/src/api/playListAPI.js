import axios from "axios";

const playlistConfig = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {},
});

export async function getAllSongs() {
  const { data } = await playlistConfig.get("/songs");
  return data;
}
