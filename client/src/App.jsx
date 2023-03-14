import { Route, Routes } from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';
import { Login, Home, Signup, Tasks } from './components';

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
