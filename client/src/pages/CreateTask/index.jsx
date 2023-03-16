import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Input, Label } from '../../components';
import apiClient from '../../utils/axios';

const CreateTask = () => {
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();
  const { id } = useParams();

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitHandler = async e => {
    e.preventDefault();

    try {
      id
        ? await apiClient.put(`/api/tasks/${id}`, values)
        : await apiClient.post('/api/tasks', values);
      navigate('/my-tasks');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    id && apiClient.get(`/api/tasks/${id}`).then(data => setValues(data));
  }, [id]);

  useEffect(() => {
    return () => setValues(initialValues);
  }, []);

  return (
    <form onSubmit={onSubmitHandler} className="space-y-8">
      <Label>
        Title:
        <Input
          type="text"
          placeholder="title"
          name="title"
          value={values.title}
          onChange={onChangeHandler}
          required
        />
      </Label>
      <Label>
        Description:
        <Input
          multiline
          type="text"
          placeholder="description"
          name="description"
          value={values.description}
          onChange={onChangeHandler}
          required
        />
      </Label>
      <Label>
        Due Date:
        <Input
          type="date"
          name="dueDate"
          value={values.dueDate}
          onChange={onChangeHandler}
        />
      </Label>
      <Label>
        Assigned To:
        <Input
          type="text"
          placeholder="assigned to"
          name="assignedTo"
          value={values.assignedTo}
          onChange={onChangeHandler}
        />
      </Label>
      <Label>
        Is Completed:
        <Input
          type="checkbox"
          className="ml-5 inline w-auto"
          name="isCompleted"
          value={values.isCompleted}
          onChange={onChangeHandler}
        />
      </Label>
      <Label>
        Items:
        <Input
          type="text"
          placeholder="items"
          name="items"
          value={values.items}
          onChange={onChangeHandler}
        />
      </Label>
      <Button variant="filled" type="submit">
        {id ? 'Update Task' : 'Create Task'}
      </Button>
    </form>
  );
};

const initialValues = {
  title: '',
  description: '',
  dueDate: '',
  assignedTo: '',
  isCompleted: false,
  items: '',
};

export default CreateTask;
