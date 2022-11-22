import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import OTP from './pages/OTP';
import AdminDashboard from './components/AdminDashboard';
import AdminMainContent from './components/AdminMainContent';

function App() {
  const user = localStorage.getItem('token');
  return (
    <Routes>
      <Route path='/' exact element={<Landing />} />
      <Route path='/signup' exact element={<Signup />} />
      <Route path='/login' exact element={<Login />} />
      <Route
        path='/login'
        exact
        element={<Navigate replace to='/Dashboard' />}
      />

      {user && (
        <Route path='/Dashboard' element={<Dashboard />}>
          <Route path='/Dashboard/Profile' element={<Profile />} />
        </Route>
      )}
      <Route path='/OTP' element={<OTP />} />
      {user && (
        <Route path='/Admin_Dashboard' element={<AdminDashboard />}>
          <Route
            path='/Admin_Dashboard/AdminMainContent'
            element={<AdminMainContent />}
          />
        </Route>
      )}
    </Routes>
  );
}

export default App;
