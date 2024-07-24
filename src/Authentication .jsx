import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Authentication() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token || 'fake-jwt-token');
      navigate('/protected');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h3>Implement user authentication using JWT tokens or sessions, and create protected
routes that require authentication to access. Show understanding of authentication flow, storing
tokens securely, and redirecting users based on authentication status</h3>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
