import Header from '../../parts/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
const ViewGuide = () => {
  return (
    <div className='AppD'>
      <Header />
      <main className='MainD'>
        <Outlet />
      </main>
    </div>
  );
};

export default ViewGuide;
