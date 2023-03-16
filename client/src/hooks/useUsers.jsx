import { useEffect, useState } from 'react';

import apiClient from '../utils/axios';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);

  useEffect(() => {
    apiClient.get('/api/users').then(response => {
      setUsers(response);
      setIsLoadingUsers(false);
    });
  }, []);

  return { users, isLoadingUsers };
};

export default useUsers;
