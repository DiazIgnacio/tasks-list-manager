import { useEffect, useState } from 'react';

import apiClient from '../utils/axios';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);

  useEffect(() => {
    apiClient.get('/api/tasks').then(response => {
      setTasks(response);
      setIsLoadingTasks(false);
    });
  }, []);

  return { tasks, isLoadingTasks, setTasks };
};

export default useTasks;
