import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Navbar } from './components';

import { useAuthContext } from './contexts/AuthContext';

const PrivateRoutes = ({ children }) => {
  const { isLoggedIn } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  if (!isLoggedIn) return <Navigate to="/login" replace={true} />;

  return (
    <>
      <Navbar />
      {children ? children : <Outlet />}
    </>
  );
};

export default PrivateRoutes;
