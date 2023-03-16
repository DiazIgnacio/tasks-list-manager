import React from 'react';

import { useAuthContext } from '../../contexts/AuthContext';

import { CreateTaskButton, TasksList } from '../Tasks';

const MyTasks = () => {
  const { user } = useAuthContext();

  return (
    <>
      <div className="flex w-full justify-between">
        <h1 className="text-4xl font-bold">Aufgaben</h1>
        <CreateTaskButton />
      </div>
      <TasksList user={user} />
    </>
  );
};

export default MyTasks;
