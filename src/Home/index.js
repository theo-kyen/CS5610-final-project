import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import { setQuery } from "../reducers/searchReducer.js";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const query = useSelector((state) => state.searchReducer.query);
  const dispatch = useDispatch();

  return (
    <div>
      <Nav />
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="mb-0">Music App</h1>
          <label>find all your favorite music</label>
        </div>
        <div className="d-flex mt-2">
          <input
            type="search"
            className="form-control me-2"
            placeholder="search for an artist or album..."
            style={{ width: 300 }}
            onChange={(e) => {
              e.preventDefault();
              dispatch(setQuery(e.target.value));
            }}
          />
          <Link
            to={`/search/${query}`}
            className="btn btn-primary"
          >
            search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
