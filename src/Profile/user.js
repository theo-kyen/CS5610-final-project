import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import { FaCircleUser } from "react-icons/fa6";

const UserProfile = () => {
  return (
    <div>
      <Nav />
      <div className=" mt-3 ms-3">
        <FaCircleUser style={{ width: "100px", height: "100px" }} />
        <h2>User Name</h2>
        <div className="mb-3">
          <h4 className="mb-0">Stats</h4>
          <p className="m-0">Liked Songs: 0</p>
          <p className="m-0">Favorite Artists: 0</p>
          <a href="#">Playlists</a>
        </div>
        <Link to="/profile/edit" className="btn btn-primary">Edit Profile</Link>
      </div>
    </div>
  );
};

export default UserProfile;
