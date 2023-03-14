import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

const Home = () => {
  const { logout, user } = useAuthContext();
  return (
    <>
      <h1>Welcome {user?.email}</h1>
      <button onClick={logout}>Logout</button>
      <Link to="/tasks">Tasks</Link>
    </>
  );
};

export default Home;
