import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav";
import SearchBar from "../Home/SearchBar";
import search from "./client";
import * as client from "../User/client.js";
import { useSelector, useDispatch } from "react-redux";
import { updateUserSongs } from "../reducers/userReducer.js";
import { setResults } from "../reducers/searchReducer.js";
import { useParams } from "react-router";
import { FaCirclePlus, FaCircleCheck } from "react-icons/fa6";

const Search = () => {
  const query = useParams()["*"];
  const results = useSelector((state) => state.searchReducer.results);
  const account = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let songs = [];

  function checkIfLiked(song) {
    if (account) {
      account.likedSongs.forEach((s) => {
        if (s.id == song.id) {
          return true;
        }
      });
    }
    return false;
  }

  async function addSong(song) {
    if (account) {
      const newSong = {
        title: song.title,
        id: song.id,
        cover: song["album"]["cover_medium"],
        artist: song["artist"]["name"],
        duration: song.duration,
      };
      if (!checkIfLiked(newSong)) {
        dispatch(updateUserSongs([...account.likedSongs, newSong]));
        await client.updateUser(account);
        console.log(account.likedSongs);
      }
    } else {
      navigate("/signin");
    }
  }

  useEffect(() => {
    if (account) {
      songs = account.likedSongs;
    }
  }, []);
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
                  <div>
                    <label className="me-2" href={`#`} style={{ fontSize: 14 }}>
                      {song.title}
                    </label>
                    <FaCirclePlus
                      className="text-primary"
                      onClick={() => addSong(song)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
