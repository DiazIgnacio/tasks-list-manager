import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../utils/axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      apiClient.post('/api/signup', formData).then(() => navigate('/login'));
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
