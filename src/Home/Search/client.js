import axios from "axios";
const SEARCH_URL = "http://localhost:4000/api/search";

export default async function search(query) {
  const response = await axios.get(`${SEARCH_URL}/${query}`);
  return response.data;
}
