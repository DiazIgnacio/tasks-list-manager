import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
  const { logout } = useAuthContext();
  return (
    <nav>
      <Link to="/my-account">My Account</Link>
      <Link to="/users">Users</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/my-tasks">My Tasks</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;
