import React from "react";
import { Link } from "react-router-dom";
import { setQuery } from "../reducers/searchReducer.js";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = ({ placeholder }) => {
  const query = useSelector((state) => state.searchReducer.query);
  const dispatch = useDispatch();

  return (
    <div className="d-flex mt-2">
      <input
        type="search"
        className="form-control me-2"
        placeholder={placeholder}
        style={{ width: 300 }}
        onChange={(e) => {
          e.preventDefault();
          dispatch(setQuery(e.target.value));
        }}
      />
      <Link to={`/search/${query}`} className="btn btn-primary">
        search
      </Link>
    </div>
  );
};

export default SearchBar;
