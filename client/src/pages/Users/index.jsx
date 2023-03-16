import React from 'react';

import useUsers from '../../hooks/useUsers';
import Loader from '../../components/Loader';
import { Card } from '../../components';

const Users = () => {
  const { isLoadingUsers, users } = useUsers();

  return (
    <>
      <h1 className="text-4xl font-bold">Benutzer</h1>
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
        return <Card key={user.id} title={name} description={user.email} />;
      })}
    </ul>
  ) : (
    <p className="mt-12">Keine Benutzer gefunden</p>
  );
};

export default Users;
