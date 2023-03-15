import React, { useEffect, useState } from 'react';
import apiClient from '../../utils/axios';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    apiClient.get('/api/tasks').then(setTasks);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold">Tasks</h1>
      <ul>{tasks && tasks.map(task => <li key={task.id}>{task.title}</li>)}</ul>
    </>
  );
};

export default Tasks;
