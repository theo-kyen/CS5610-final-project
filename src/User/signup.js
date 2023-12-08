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

    if (credentials.username !== credentials.confirmUsername) {
      setError('Usernames do not match.');
      return;
    }
    if (credentials.password !== credentials.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      console.log('Submitting', credentials);
      // Your API call here
      setError('');
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  // Inline CSS for styling
  const styles = {
    formContainer: {
      maxWidth: '400px',
      margin: '20px auto',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      textAlign: 'center'
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc'
    },
    button: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer'
    },
    error: {
      color: 'red',
      marginBottom: '10px'
    }
  };

  return (
    <div>
      <Nav />
      <div style={styles.formContainer}>
        <h2>Sign Up</h2>
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
            type="text"
            id="confirmUsername"
            name="confirmUsername"
            placeholder="Confirm Username"
            value={credentials.confirmUsername}
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
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={credentials.confirmPassword}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

