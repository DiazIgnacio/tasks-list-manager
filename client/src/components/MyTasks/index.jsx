import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import useTasks from '../../hooks/useTasks';
import { TasksList } from '../Tasks';

const MyTasks = () => {
  const { tasks, isLoadingTasks } = useTasks();
  const { user } = useAuthContext();

  const filteredTasks = tasks.filter(task => task.userId === user.id);
  return (
    <>
      <h1 className="text-4xl font-bold">Tasks</h1>
      <TasksList tasks={filteredTasks} isLoading={isLoadingTasks} />
    </>
  );
};

export default MyTasks;
