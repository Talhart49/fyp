import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Main from '../AdminMain';

const Dashboard = () => {
  return (
    <div>
      <Main />
      <div className='details'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
