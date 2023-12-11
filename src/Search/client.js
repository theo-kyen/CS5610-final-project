import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
const SEARCH_API = `${BASE_API}/api/search`;
export const USERS_API = `${BASE_API}/api/users`;

const request = axios.create({
  withCredentials: true,
  // other configurations if needed
});


export default async function search(query) {
  const response = await axios.get(`${SEARCH_API}/${query}`);
  return response.data;
}

export const addSong = async (song) => {
  const response = await request.post(`${USERS_API}/addsong`, song);
  return response.data;
};

export const deleteSong = async (songId) => {
  const response = await request.delete(`${USERS_API}/deletesong/${songId}`);
  return response.data;
};
