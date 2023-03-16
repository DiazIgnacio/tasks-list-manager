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

const Card = ({ to = '#', title = '', description = '', ...props }) => (
  <div
    className="mx-auto overflow-hidden rounded-xl bg-white shadow-md"
    {...props}
  >
    <div className="md:flex">
      <div className="md:flex-shrink-0"></div>
      <div className="p-8">
        <Link
          to={to}
          className="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
        >
          {title}
        </Link>
        <p className="mt-2 text-gray-500">{description}</p>
      </div>
    </div>
  </div>
);

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
        <Card
          title={task.title}
          description={task.description}
          key={task.id}
          to={`/tasks/${task.id}`}
        />
      ))}
    </ul>
  ) : (
    <p className="mt-12">No tasks found</p>
  );
};

export default Tasks;
