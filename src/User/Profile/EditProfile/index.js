import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../../../Nav";

const EditProfile = () => {
  const navigate = useNavigate();

  function saveChanges() {
    navigate("/profile");
  }

  return (
    <div>
      <Nav />
      <div className="ms-3 mt-2">
        <h2>Edit Profile</h2>
        <div className="mb-2">
          <label htmlFor="edit-username" className="form-label mb-0">
            User Name
          </label>
          <input
            type="text"
            id="edit-username"
            className="form-control"
            placeholder={`User Name`}
            style={{ width: "40%", maxWidth: "250px" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="edit-email" className="form-label mb-0">
            Email Address
          </label>
          <input
            type="email"
            id="edit-email"
            className="form-control"
            placeholder={`name@domain.com`}
            style={{ width: "40%", maxWidth: "250px" }}
          />
        </div>
        <div>
          <Link to="/profile" className="btn btn-danger me-1">
            Cancel
          </Link>
          <button className="btn btn-success" onClick={saveChanges}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
