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
import UsersA from './components/UsersA';
import TemplatesA from './components/TemplatesA';
import HTMLGuidesA from './components/HTMLGuidesA';
import AddHTML from './components/AddHTML';
import UpdateHTMLG from './components/UpdateHTMLG';

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
          <Route path='/Admin_Dashboard/Users' element={<UsersA />} />
          <Route path='/Admin_Dashboard/Templates' element={<TemplatesA />} />
          <Route
            path='/Admin_Dashboard/HTML_Guides'
            element={<HTMLGuidesA />}
          />
          <Route path='/Admin_Dashboard/JS_Guides' element={<HTMLGuidesA />} />
          <Route path='/Admin_Dashboard/CSS_Guides' element={<HTMLGuidesA />} />
          <Route path='/Admin_Dashboard/Add_HTML' element={<AddHTML />} />
          <Route
            path='/Admin_Dashboard/Update_HTML'
            element={<UpdateHTMLG />}
          />
        </Route>
      )}
    </Routes>
  );
}

export default App;
