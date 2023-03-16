import React from 'react';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
  const { logout } = useAuthContext();
  return (
    <nav className="z-50 mb-8 w-full border-b-2 bg-gray-800 px-8 py-4 text-white">
      <ul className="flex items-center justify-between">
        <li className="ml-4">
          <Link to="/my-account" className="transition-all hover:text-blue-500">
            Mein Konto
          </Link>
        </li>
        <li className="ml-4">
          <Link to="/users" className="transition-all hover:text-blue-500">
            Benutzer
          </Link>
        </li>
        <li className="ml-4">
          <Link to="/tasks" className="transition-all hover:text-blue-500">
            Aufgaben
          </Link>
        </li>
        <li className="ml-4">
          <Link to="/my-tasks" className="transition-all hover:text-blue-500">
            Meine Aufgaben
          </Link>
        </li>

        <button onClick={logout}>Abmeldung</button>
      </ul>
    </nav>
  );
};

export default Navbar;
