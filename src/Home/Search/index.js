import { React, useState, useEffect } from "react";
import Nav from "../../Nav";
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
  }, []);

  return (
    <div>
      <Nav />
      <h2 className="ms-2 mt-2">Search Results for '{query}'</h2>
      <div>
        {results.data && results.data.map((song) => {
          <p>{song.title}</p>
        })}
      </div>
    </div>
  );
};

export default Search;
