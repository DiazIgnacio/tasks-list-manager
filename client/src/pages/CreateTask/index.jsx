import React from 'react';

import { Input, Label } from '../../components';

const CreateTask = () => {
  const onSubmitHandler = e => {};
  return (
    <form onSubmit={onSubmitHandler} className="space-y-8">
      <Label>
        Title:
        <Input type="text" placeholder="title" />
      </Label>
      <Label>
        Description:
        <Input multiline type="text" placeholder="description" />
      </Label>
      <Label>
        Due Date: <Input type="date" />
      </Label>
      <Label>
        Assigned To:
        <Input type="text" placeholder="assigned to" />
      </Label>
      <Label>
        Is Completed:
        <Input type="checkbox" />
      </Label>
      <Label>
        Items:
        <Input type="text" placeholder="items" />
      </Label>
    </form>
  );
};

export default CreateTask;
