import React from "react";
import Nav from "../Nav";
import SearchBar from "./SearchBar.js";
import Songs from "../User/songs.js";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="mb-4">
          <div className="text-center">
            <h1 className="mb-0">Music App</h1>
            <label>find all your favorite music</label>
          </div>
          <SearchBar placeholder={"search for an artist or album..."} />
        </div>
        <Songs />
      </div>
    </div>
  );
};

export default Home;
