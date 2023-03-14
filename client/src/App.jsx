import { Route, Routes } from 'react-router-dom';

import { useAuthContext } from './contexts/AuthContext';
import Login from './components/Login';

import PrivateRoutes from './PrivateRoutes';

import './css/App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Home />} />
        </Route>

        <Route path='/login' element={<Login />} />
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
