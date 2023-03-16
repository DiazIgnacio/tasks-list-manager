import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Label, Input, Button } from '../../components';
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <Label>
        Email:
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Password:
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </Label>
      <Button variant="filled" type="submit">
        Signup
      </Button>
      <Button variant="outlined" onClick={() => navigate('/login')}>
        Back
      </Button>
    </form>
  );
};

export default Signup;
