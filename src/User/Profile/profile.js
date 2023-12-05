import React from "react";
import Nav from "../../Nav.js";
import { FaCircleUser } from "react-icons/fa6";

const UserProfile = () => {
  return (
    <div>
      <Nav />
      <div className=" mt-3 ms-3">
        <FaCircleUser style={{ width: "100px", height: "100px" }} />
        <h2>User Name</h2>
      </div>
    </div>
  );
};

export default UserProfile;
