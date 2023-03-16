import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Loader, Card } from '../../components';
import useTasks from '../../hooks/useTasks';
import apiClient from '../../utils/axios';

const Tasks = () => {
  return (
    <>
      <div className="flex w-full justify-between">
        <h1 className="text-4xl font-bold">Aufgaben</h1>
        <CreateTaskButton />
      </div>
      <TasksList />
    </>
  );
};

export const CreateTaskButton = () => {
  return (
    <Link to="/create-task">
      <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white transition-all hover:bg-blue-700">
        Aufgabe erstellen
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
    <p className="mt-12">Keine Aufgaben gefunden</p>
  );
};

export default Tasks;
