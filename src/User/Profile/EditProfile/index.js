import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../../../Nav";
import * as client from "../../client.js";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../../reducers/userReducer.js";

const EditProfile = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState("");
  const account = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(account);
      dispatch(updateUser(credentials));
      await client.updateUser(account);
      console.log(account);
      navigate("/profile");
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  const styles = {
    input: { width: "40%", maxWidth: "250px" },
    error: {
      color: "red",
      marginBottom: "10px",
    },
  };

  return (
    <div>
      <Nav />
      <div className="ms-3 mt-2">
        <h2>Edit Profile</h2>
        {error && <div style={styles.error}>{error}</div>}
        <div className="mb-2">
          <label htmlFor="username" className="form-label mb-0">
            User Name
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="form-label mb-0">
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="firstname" className="form-label mb-0">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstName"
            className="form-control"
            placeholder="First Name"
            value={credentials.firstName}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label mb-0">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastName"
            className="form-control"
            placeholder="Last Name"
            value={credentials.lastName}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div>
          <Link to="/profile" className="btn btn-danger me-1">
            Cancel
          </Link>
          <button className="btn btn-success" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
