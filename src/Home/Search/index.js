import { React, useState, useEffect } from "react";
import Nav from "../../Nav";
import SearchBar from "../SearchBar";
import search from "./client";
import { setResults } from "../../reducers/searchReducer";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

const Search = () => {
  const query = useParams()["*"];
  const results = useSelector((state) => state.searchReducer.results);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getResults() {
      const results = await search(query);
      dispatch(setResults(results));
    }
    getResults();
  }, [query]);
  return (
    <div>
      <Nav />
      <div className="text-center">
        <h2 className="ms-3 mt-2">Search Results for '{query}'</h2>
        <div className="d-flex justify-content-center">
          <SearchBar placeholder={"search for another artist or album..."} />
        </div>
        <div className="ms-0 mt-3 ">
          <div className="row row-cols-5">
            {results.data &&
              results.data.map((song, index) => (
                <div key={index} className="mb-3 text-center">
                  <img
                    src={song["album"]["cover_medium"]}
                    className="border border-black"
                  />
                  <br />
                  <a href={`#`}>{song.title}</a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
