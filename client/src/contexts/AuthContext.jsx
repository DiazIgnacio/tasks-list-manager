import { createContext, useContext, useState, useEffect } from 'react';
import { redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext({
  isLoggedIn: false,

  login: token => {},
  logout: () => {},

  authToken: null,
  setAuthToken: () => {},

  user: null,
  setUser: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = token => {
    setIsLoggedIn(true);
    setToken(token);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      login(storedToken);
      redirect('/');
    }
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (token) {
      const decodedToken = jwt_decode(token);
      setUser(decodedToken);
    }

    token
      ? !storedToken && localStorage.setItem('token', token)
      : storedToken && localStorage.removeItem('token');
  }, [token]);

  const contextValue = {
    isLoggedIn,

    authToken: token,
    setAuthToken: setToken,

    login,
    logout,

    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
