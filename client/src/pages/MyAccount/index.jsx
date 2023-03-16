import React, { useEffect, useMemo, useState } from 'react';

import { Label, Input, Button } from '../../components';
import { useAuthContext } from '../../contexts/AuthContext';
import apiClient from '../../utils/axios';

const MyAccount = () => {
  const { user } = useAuthContext();

  const initialValues = useMemo(
    () => ({
      email: user?.email,
      password: '',
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
    }),
    [user]
  );
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    setValues(initialValues);
    return () => {
      setValues(initialValues);
    };
  }, [initialValues]);

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitHandler = async e => {
    e.preventDefault();

    try {
      await apiClient.patch(`/api/users/${user.id}`, values);
      alert('Account updated successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="space-y-8" onSubmit={onSubmitHandler}>
      <Label>
        First Name:
        <Input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={onChangeHandler}
        />
      </Label>
      <Label>
        Last Name:
        <Input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={onChangeHandler}
        />
      </Label>
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
