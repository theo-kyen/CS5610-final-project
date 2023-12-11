import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserSongs, addSong, deleteSong } from "../reducers/userReducer.js"; // assuming addSong and deleteSong actions are defined

const Songs = ({ inProfile }) => {
  const account = useSelector((state) => state.userReducer.user);
  const [songs, setSongs] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (account) {
      setSongs(account.likedSongs);
    }
  }, [account]); // added account as a dependency

  const durationToMin = (duration) => {
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
  };

  const handleAddSong = () => {
    // Placeholder function for adding a song
    // Replace with actual implementation
    const newSong = {/* new song details */};
    dispatch(addSong(newSong));
  };

  const handleDeleteSong = (songId) => {
    dispatch(deleteSong(songId));
  };

  return (
    <div className={`d-flex flex-column ${inProfile ? "w-50 mt-3" : "align-items-center"}`}>
      <h2>Liked Songs</h2>
      {songs && songs.length > 0 ? (
        <table className="table table-secondary table-striped-columns text-center">
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Duration</th>
              {inProfile && <th>Delete</th>}
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
                    <button onClick={() => handleDeleteSong(song.id)}>Delete</button>
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
        <button className="btn btn-primary w-25" onClick={handleAddSong}>
          Add Songs
        </button>
      )}
    </div>
  );
};

export default Songs;
