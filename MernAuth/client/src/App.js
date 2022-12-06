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
import CSSGuidesA from './components/CSSGuidesA';
import JSGuidesA from './components/JSGuidesA';

import AddHTML from './components/AddHTML';
import AddCSS from './components/AddCSS';
import AddJS from './components/AddJS';

import UpdateHTMLG from './components/UpdateHTMLG';
import UpdateCSSG from './components/UpdateCSSG';
import UpdateJSG from './components/UpdateJSG';

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
        element={<Navigate replace to='/dashboard' />}
      />

      {user && (
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='/dashboard/Profile' element={<Profile />} />
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
          <Route path='/Admin_Dashboard/JS_Guides' element={<JSGuidesA />} />
          <Route path='/Admin_Dashboard/CSS_Guides' element={<CSSGuidesA />} />
          <Route path='/Admin_Dashboard/Add_HTML' element={<AddHTML />} />
          <Route path='/Admin_Dashboard/Add_CSS' element={<AddCSS />} />
          <Route path='/Admin_Dashboard/Add_JS' element={<AddJS />} />

          <Route
            path='/Admin_Dashboard/Update_HTML'
            element={<UpdateHTMLG />}
          />
          <Route path='/Admin_Dashboard/Update_CSS' element={<UpdateCSSG />} />
          <Route path='/Admin_Dashboard/Update_JS' element={<UpdateJSG />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
