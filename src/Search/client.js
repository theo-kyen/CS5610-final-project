import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
const SEARCH_API = `${BASE_API}/api/search`;

export default async function search(query) {
  const response = await axios.get(`${SEARCH_API}/${query}`);
  return response.data;
}
