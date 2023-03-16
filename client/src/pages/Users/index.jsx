import React from 'react';

import useUsers from '../../hooks/useUsers';
import Loader from '../../components/Loader';

const Users = () => {
  const { isLoadingUsers, users } = useUsers();

  return (
    <>
      <h1 className="text-4xl font-bold">Users</h1>
      <UsersList users={users} isLoading={isLoadingUsers} />
    </>
  );
};

const UsersList = ({ users, isLoading }) => {
  if (isLoading) {
    return <Loader />;
  }

  return users.length ? (
    <ul className="mt-12 grid grid-cols-3 gap-10">
      {users.map(user => {
        const name = user?.firstName + ' ' + user?.lastName;
        return (
          <li key={user.id}>
            {name && <h2 className="text-xl font-bold">{name}</h2>}
            <p className="mt-2">{user.email}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p className="mt-12">No users found</p>
  );
};

export default Users;
