import React, { useState } from 'react';
import Nav from '../Nav.js';

const Signup = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    confirmUsername: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the confirmations match
    if (credentials.username !== credentials.confirmUsername) {
      setError('Usernames do not match.');
      return;
    }
    if (credentials.password !== credentials.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Backend API call to submit the credentials
    try {
      console.log('Submitting', credentials);
      // Your API call here
      // Handle successful signup (e.g., show a success message)
      setError('');
    } catch (error) {
      setError('An error occurred. Please try again.'); // Update with actual error message
    }
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  };

  const buttonStyle = {
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  };

  const errorStyle = {
    color: 'red',
    textAlign: 'center',
    margin: '10px 0',
  };



  return (
    <div>
      <Nav />
      <div className="mt-2 ms-3">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} /* Add your form styling here */>
          {error && <div /* Add your error styling here */>{error}</div>}
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            required
            /* Add your input styling here */
          />
          <input
            type="text"
            id="confirmUsername"
            name="confirmUsername"
            placeholder="Confirm Username"
            value={credentials.confirmUsername}
            onChange={handleChange}
            required
            /* Add your input styling here */
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
            /* Add your input styling here */
          />
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={credentials.confirmPassword}
            onChange={handleChange}
            required
            /* Add your input styling here */
          />
          <button type="submit" /* Add your button styling here */>Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

