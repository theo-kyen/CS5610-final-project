import React from "react";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./user";
import EditProfile from "./EditProfile";

const Profile = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserProfile />} />
        <Route path="edit" element={<EditProfile />} />
      </Routes>
    </div>
  );
};

export default Profile;
