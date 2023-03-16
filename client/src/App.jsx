import { Outlet, Route, Routes } from 'react-router-dom';

import { PrivateRoutes } from './components';
import {
  Login,
  Signup,
  Tasks,
  MyAccount,
  Users,
  MyTasks,
  CreateTask,
} from './pages';

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/users" element={<Users />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/my-tasks" element={<MyTasks />} />
        <Route path="/create-task" element={<CreateTask />} />
      </Route>

      <Route element={<Container />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

const Container = ({ children }) => (
  <div className="container mx-auto grid h-screen w-full place-items-center">
    {children ? children : <Outlet />}
  </div>
);

export default App;
