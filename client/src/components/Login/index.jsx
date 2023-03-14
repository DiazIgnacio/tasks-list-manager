import React, { useState } from 'react';

import { useAuthContext } from '../../contexts/AuthContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import apiClient from '../../utils/axios';

const Login = () => {
  const { login, isLoggedIn } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  if (isLoggedIn) return <Navigate to="/" replace />;

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await apiClient.post('/api/login', {
        email,
        password,
      });
      navigate('/');
      response.token && login(response.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
      <br />
      <Link to="/signup">Sign Up</Link>
    </form>
  );
};

export default Login;
