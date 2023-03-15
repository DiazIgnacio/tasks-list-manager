import React, { useState } from 'react';

import { Link, Navigate, useNavigate } from 'react-router-dom';

import { Button, Input, Label } from '../../components';
import { useAuthContext } from '../../contexts/AuthContext';
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

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Label>
        Email:
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Label>
      <Label>
        Password:
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Label>
      <Button type="submit" variant="filled">
        Login
      </Button>
      <Link to="/signup" className="block">
        <Button>Sign Up</Button>
      </Link>
    </form>
  );
};

export default Login;
