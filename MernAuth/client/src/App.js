import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
import Landing from './components/Landing';

function App() {
  const user = localStorage.getItem('token');
  return (
    <Routes>
      <Route path='/' exact element={<Landing />} />
      {user && <Route path='/Main' exact element={<Main />} />}
      <Route path='/signup' exact element={<Signup />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/login' exact element={<Navigate replace to='/Main' />} />
    </Routes>
  );
}

export default App;
