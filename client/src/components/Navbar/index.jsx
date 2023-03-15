import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
  const { logout } = useAuthContext();
  return (
    <nav className="bg-gray-800 text-white px-8 py-4 border-b-2 w-full z-50 mb-8">
      <ul className="flex justify-between items-center">
        <li className="ml-4">
          <Link to="/my-account" className="hover:text-blue-500 transition-all">
            My Account
          </Link>
        </li>
        <li className="ml-4">
          <Link to="/users" className="hover:text-blue-500 transition-all">
            Users
          </Link>
        </li>
        <li className="ml-4">
          <Link to="/tasks" className="hover:text-blue-500 transition-all">
            Tasks
          </Link>
        </li>
        <li className="ml-4">
          <Link to="/my-tasks" className="hover:text-blue-500 transition-all">
            My Tasks
          </Link>
        </li>

        <button onClick={logout}>Logout</button>
      </ul>
    </nav>
  );
};

export default Navbar;
