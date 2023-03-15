import React from 'react';

import { useAuthContext } from '../../contexts/AuthContext';
import useTasks from '../../hooks/useTasks';

import { CreateTaskButton, TasksList } from '../Tasks';

const MyTasks = () => {
  const { tasks, isLoadingTasks } = useTasks();
  const { user } = useAuthContext();

  const filteredTasks = tasks.filter(task => task.userId === user.id);
  return (
    <>
      <div className="flex w-full justify-between">
        <h1 className="text-4xl font-bold">Tasks</h1>
        <CreateTaskButton />
      </div>
      <TasksList tasks={filteredTasks} isLoading={isLoadingTasks} />
    </>
  );
};

export default MyTasks;
