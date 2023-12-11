import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav.js";
import * as client from "./client.js";

const Signin = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await client.signin(credentials);
      navigate("/profile");
    } catch (e) {
      setError(e.response?.data?.message || "An error occurred during sign in. Please try again.");
    }
  };
  

  // Inline CSS for styling
  const styles = {
    formContainer: {
      maxWidth: "400px",
      margin: "20px auto",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    button: {
      width: "100%",
      padding: "10px",
      borderRadius: "4px",
      border: "none",
      backgroundColor: "#007bff",
      color: "white",
      cursor: "pointer",
    },
    error: {
      color: "red",
      marginBottom: "10px",
    },
  };

  return (
    <div>
      <Nav />
      <div style={styles.formContainer}>
        <h2>Sign In</h2>
        {error && <div style={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
