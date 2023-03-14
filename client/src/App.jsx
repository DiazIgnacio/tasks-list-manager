import { Route, Routes } from 'react-router-dom';

import { useAuthContext } from './contexts/AuthContext';
import Login from './components/Login';

import PrivateRoutes from './PrivateRoutes';

import './css/App.css';
import Signup from './components/Signup';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  const { logout } = useAuthContext();
  return (
    <>
      <h1>Home</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default App;
