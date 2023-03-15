import { useEffect, useState } from 'react';
import apiClient from '../utils/axios';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    apiClient.get('/api/tasks').then(setTasks);
  }, []);

  return tasks;
};

export default useTasks;
