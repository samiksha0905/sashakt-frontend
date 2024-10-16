import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !age) {
      setMessage('Please fill in all fields.');
      return;
    }
    if (age < 8) {
      setMessage('You must be at least 13 years old to use this service.');
      return;
    }
    // Perform login logic here
    console.log(`Username: ${username}, Age: ${age}`);
  };

  return (
    <div className="app-container">
      <div className="form-container">
       
        <form onSubmit={handleSubmit}>
          {message && <p className="error-message">{message}</p>}
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
          <br />
          <Link to="/s2">
          <input type="submit" value="Login" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;