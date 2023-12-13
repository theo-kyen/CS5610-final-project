import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FaCircleUser } from "react-icons/fa6";
import Nav from "../../Nav";
import Songs from "../songs";
import * as client from "../client.js";

const ExternalProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [songs, setSongs] = useState([]);

  function durationToMin(duration) {
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  }

  async function getUser(id) {
    const acc = await client.findUserById(id);
    setUser(acc);
    setSongs(acc.likedSongs);
  }

  useEffect(() => {
    getUser(userId);
  }, [userId]);

  return (
    <div>
      <Nav />
      <div className="mt-3 mx-3">
        <FaCircleUser style={{ width: "100px", height: "100px" }} />
        <h2>{user.username}</h2>
        <h4>
          {user.firstName} {user.lastName}
        </h4>
        <div className="mb-3">
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
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No liked songs</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExternalProfile;
