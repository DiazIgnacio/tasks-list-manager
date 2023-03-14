import React, { useState } from 'react';

import axios from 'axios';
import { useAuthContext } from '../../contexts/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const API_URL = process.env.API_URL || 'http://localhost:8000';

const Login = () => {
  const { login, isLoggedIn } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  if (isLoggedIn) return <Navigate to='/' replace />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios
        .post(`${API_URL}/api/login`, {
          email,
          password,
        })
        .then((res) => {
          navigate('/');
          return res.data;
        });
      if (response.token) {
        login(response.token);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
