import React, { useState } from 'react';

import { useAuthContext } from '../../contexts/AuthContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import apiClient from '../../utils/axios';

const Login = () => {
  const { login, isLoggedIn } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  if (isLoggedIn) return <Navigate to="/my-tasks" replace />;

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await apiClient.post('/api/login', {
        email,
        password,
      });
      navigate('/my-tasks');
      response.token && login(response.token);
    } catch (error) {
      console.error(error);
    }
  };

  const labelClassnames = 'block text-sm font-medium text-gray-700';
  const inputClassnames =
    'mt-2 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm';
  const loginButtonClassnames =
    'block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <label className={labelClassnames}>
        Email:
        <input
          type="email"
          value={email}
          className={inputClassnames}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label className={labelClassnames}>
        Password:
        <input
          type="password"
          value={password}
          className={inputClassnames}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button
        type="submit"
        className={loginButtonClassnames + ' bg-blue-400 text-white'}
      >
        Login
      </button>
      <Link to="/signup" className="block">
        <button className={loginButtonClassnames}>Sign Up</button>
      </Link>
    </form>
  );
};

export default Login;
