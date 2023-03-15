import { Outlet, Route, Routes } from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';
import { Login, Signup, Tasks, MyAccount, Users, MyTasks } from './components';

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/users" element={<Users />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/my-tasks" element={<MyTasks />} />
      </Route>

      <Route element={<Container />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

const Container = ({ children }) => (
  <div className="container grid place-items-center w-full h-screen">
    {children ? children : <Outlet />}
  </div>
);

export default App;
