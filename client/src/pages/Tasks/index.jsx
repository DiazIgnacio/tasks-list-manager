import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';

import useTasks from '../../hooks/useTasks';

const Tasks = () => {
  const { tasks, isLoadingTasks } = useTasks();

  return (
    <>
      <div className="flex w-full justify-between">
        <h1 className="text-4xl font-bold">Tasks</h1>
        <CreateTaskButton />
      </div>
      <TasksList tasks={tasks} isLoading={isLoadingTasks} />
    </>
  );
};

export const CreateTaskButton = () => {
  return (
    <Link to="/create-task">
      <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white transition-all hover:bg-blue-700">
        Create Task
      </button>
    </Link>
  );
};

export const TasksList = ({ tasks, isLoading }) => {
  if (isLoading) {
    return <Loader />;
  }

  return tasks.length ? (
    <ul className="mt-12 grid grid-cols-3 gap-10">
      {tasks.map(task => (
        <li key={task.id}>
          <h2 className="text-xl font-bold">{task.title}</h2>
          <p>{task.description}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p className="mt-12">No tasks found</p>
  );
};

export default Tasks;
