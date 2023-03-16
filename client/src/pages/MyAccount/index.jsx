import React, { useEffect, useState } from 'react';

import { Label, Input, Button } from '../../components';
import { useAuthContext } from '../../contexts/AuthContext';
import apiClient from '../../utils/axios';

const MyAccount = () => {
  const { user } = useAuthContext();
  const [values, setValues] = useState({
    email: user?.email,
    password: '',
  });

  useEffect(() => {
    setValues({ password: '', email: user?.email });
  }, [user?.email]);

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitHandler = async e => {
    e.preventDefault();

    const { email, password } = values;

    try {
      await apiClient.patch(`/api/user/${user.id}`, {
        email,
        password,
      });
      alert('Account updated successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="space-y-8" onSubmit={onSubmitHandler}>
      <Label>
        Email:
        <Input
          type="email"
          name="email"
          value={values.email}
          onChange={onChangeHandler}
          required
        />
      </Label>
      <Label>
        Password:
        <Input
          type="password"
          name="password"
          value={values.password}
          onChange={onChangeHandler}
          required
        />
      </Label>
      <Button variant="filled" type="submit">
        Update
      </Button>
    </form>
  );
};

export default MyAccount;
