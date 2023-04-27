import React, { useState } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
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

// import AddHTML from './components/AddHTML';
// import AddCSS from './components/AddCSS';
// import AddJS from './components/AddJS';

import UpdateHTMLG from './components/UpdateHTMLG';
import UpdateCSSG from './components/UpdateCSSG';
import UpdateJSG from './components/UpdateJSG';

import ViewHTMLA from './components/ViewHTMLA';
import TutorialContent from './parts/TutorialContent';
import ContentHTML from './parts/ContentHTML';

import Editor from './pages/Editor';

import ViewHTMLU from './components/ViewHTMLU';

import PaymentsU from './components/PaymentU';
import CardPayment from './components/PaymentU/CardPayment';

import TemplatesU from './pages/TemplatesU';
import FoodSite from './Templates/Foodsite01';
import FS1 from './Templates/Foodsite01/FS1';
import PortfolioWeb from './Templates/Portfolio01';
import P01 from './Templates/Portfolio01/P01';
import IBlog from './Templates/Blog01';
import B01 from './Templates/Blog01/B01';

import MyTemplate from './components/MyTemplates';

import DashboardContent from './components/DashBoardContent';

import Preview from './pages/PreviewTemplates';

import NDashboard from './components/NAdminDashboard';
import DashboardS from './scenes/dashboard';
import Users from './scenes/users';
import Invoices from './scenes/invoices';
import Templates from './scenes/allTemplates';
import Bar from './scenes/bar';
import Form from './scenes/form';
import Line from './scenes/line';
import Pie from './scenes/pie';
import Feedback from './scenes/feedback';
import Geography from './scenes/geography';

import HTMLGuides from './scenes/HTMLGuides';
import CSSGuides from './scenes/CSSGuides';
import JSGuides from './scenes/JSGuides';

import AddHTML from './scenes/AddHTML';
import AddCSS from './scenes/AddCSS';
import AddJS from './scenes/AddJS';

import UpdateHTML from './scenes/UpdateHTML';
import UpdateCSS from './scenes/UpdateCSS';
import UpdateJS from './scenes/UpdateJS';

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
          <Route path='/dashboard/MainContent' element={<DashboardContent />} />
          <Route path='/dashboard/Profile' element={<Profile />} />
          <Route path='/dashboard/Templates' element={<TemplatesU />} />
          <Route path='/dashboard/Templates/FoodSite' element={<FoodSite />} />
          <Route
            path='/dashboard/Templates/PortfolioWeb'
            element={<PortfolioWeb />}
          />
          <Route path='/dashboard/Templates/IBlog' element={<IBlog />} />
          <Route path='/dashboard/MyTemplates' element={<MyTemplate />} />
          <Route path='/dashboard/Payments' element={<PaymentsU />} />
          <Route path='/dashboard/Payments/Card' element={<CardPayment />} />
          <Route path='/dashboard/ViewHTML_U' element={<ViewHTMLU />}>
            <Route
              path='/dashboard/ViewHTML_U/:title'
              element={<ContentHTML />}
            />
            <Route
              path='/dashboard/ViewHTML_U/:title/Editor'
              element={<Editor />}
            />
          </Route>
        </Route>
      )}
      <Route path='/OTP' element={<OTP />} />

      {user && (
        <Route path='/dashboardAdmin' element={<NDashboard />}>
          <Route path='/dashboardAdmin/MainContent' element={<DashboardS />} />
          <Route path='/dashboardAdmin/Users' element={<Users />} />
          <Route path='/dashboardAdmin/Invoices' element={<Invoices />} />
          <Route path='/dashboardAdmin/Templates' element={<Templates />} />
          <Route path='/dashboardAdmin/Bar' element={<Bar />} />
          <Route path='/dashboardAdmin/Form' element={<Form />} />
          <Route path='/dashboardAdmin/Line' element={<Line />} />
          <Route path='/dashboardAdmin/Pie' element={<Pie />} />
          <Route path='/dashboardAdmin/Feedback' element={<Feedback />} />
          <Route path='/dashboardAdmin/Geography' element={<Geography />} />

          <Route path='/dashboardAdmin/html' element={<HTMLGuides />} />
          <Route path='/dashboardAdmin/css' element={<CSSGuides />} />
          <Route path='/dashboardAdmin/js' element={<JSGuides />} />

          <Route path='/dashboardAdmin/Add_HTML' element={<AddHTML />} />
          <Route path='/dashboardAdmin/Add_CSS' element={<AddCSS />} />
          <Route path='/dashboardAdmin/Add_JS' element={<AddJS />} />

          <Route path='/dashboardAdmin/Update_HTML' element={<UpdateHTML />} />
          <Route path='/dashboardAdmin/Update_CSS' element={<UpdateCSS />} />
          <Route path='/dashboardAdmin/Update_JS' element={<UpdateJS />} />
        </Route>
      )}

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

          <Route
            path='/Admin_Dashboard/TutorialContent'
            element={<TutorialContent />}
          />
          <Route path='/Admin_Dashboard/View_HTML' element={<ViewHTMLA />} />

          <Route
            path='/Admin_Dashboard/View_HTML/Editor'
            element={<Editor />}
          />
        </Route>
      )}
      <Route path='/dashboard/Templates/FoodSite/FS1' element={<FS1 />} />
      <Route path='/dashboard/Templates/PortfolioWeb/P01' element={<P01 />} />
      <Route path='/dashboard/Templates/IBlog/B01' element={<B01 />} />
      <Route path='/Preview' element={<Preview />} />
    </Routes>
  );
}

export default App;
