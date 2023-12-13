import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as client from "./client.js";
import { updateUserSongs } from "../reducers/userReducer.js";

const Songs = ({ inProfile }) => {
  const account = useSelector((state) => state.userReducer.user);
  const [songs, setSongs] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function durationToMin(duration) {
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  }

  async function deleteSong(id) {
    setSongs(songs.filter((song) => song.id !== id));
    dispatch(updateUserSongs(songs));
    await client.updateUser(account);
  }

  useEffect(() => {
    if (account) {
      setSongs(account.likedSongs);
    }
  }, [account]);

  return (
    <div
      className={`d-flex flex-column ${
        inProfile ? "w-50 mt-3" : "align-items-center"
      } 
      }`}
    >
      <h2>Liked Songs</h2>
      {songs && songs.length > 0 ? (
        <table className="table table-secondary table-striped-columns text-center">
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => (
              <tr key={song.id}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{durationToMin(song.duration)}</td>
                {inProfile && (
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteSong(song.id)}
                    >
                      X
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No liked songs</p>
      )}
      {inProfile && (
        <button
          className="btn btn-primary w-25"
          onClick={() => {
            navigate("/home");
          }}
        >
          Add Songs
        </button>
      )}
    </div>
  );
};

export default Songs;
