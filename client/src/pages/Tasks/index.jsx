import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';

import useTasks from '../../hooks/useTasks';
import apiClient from '../../utils/axios';

const Tasks = () => {
  return (
    <>
      <div className="flex w-full justify-between">
        <h1 className="text-4xl font-bold">Tasks</h1>
        <CreateTaskButton />
      </div>
      <TasksList />
    </>
  );
};

const Card = ({
  onClick = '#',
  title = '',
  description = '',
  onDelete,
  ...props
}) => (
  <div
    className="mx-auto overflow-hidden rounded-xl bg-white shadow-md"
    {...props}
  >
    <div className="md:flex">
      <div className="md:flex-shrink-0"></div>
      <div className="p-8">
        <div className="flex justify-between">
          <Link
            to={onClick}
            className="mt-1 block text-lg font-medium leading-tight text-gray-800 hover:underline"
          >
            {title}
          </Link>
          <button
            className="mt-1 block text-lg font-medium leading-tight text-gray-800 hover:underline"
            onClick={onDelete}
          >
            <CrossIcon />
          </button>
        </div>
        <p className="mt-2 text-gray-500">{description}</p>
      </div>
    </div>
  </div>
);

const CrossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
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

export const TasksList = ({ user }) => {
  const { tasks: hookTasks, isLoadingTasks, setTasks } = useTasks();

  const tasks = useMemo(() => {
    if (user) {
      return hookTasks.filter(task => task.assignedTo === user.email);
    }
    return hookTasks;
  }, [user, hookTasks]);

  if (isLoadingTasks) {
    return <Loader />;
  }

  const onDeleteHandler = id => {
    apiClient.delete(`/api/tasks/${id}`).then(() => {
      apiClient.get('/api/tasks').then(data => setTasks(data));
    });
  };

  return tasks.length ? (
    <ul className="mt-12 grid grid-cols-3 gap-10">
      {tasks.map(task => (
        <Card
          title={task.title}
          description={task.description}
          key={task.id}
          onClick={`/tasks/${task.id}`}
          onDelete={() => onDeleteHandler(task.id)}
        />
      ))}
    </ul>
  ) : (
    <p className="mt-12">No tasks found</p>
  );
};

export default Tasks;
