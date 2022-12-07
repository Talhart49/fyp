import React from 'react';
import Header from '../../parts/Header';
import { Outlet } from 'react-router-dom';
import ContentHTML from '../../parts/ContentHTML';

const index = () => {
  return (
    <div>
      <Header />

      <div className='details'>
        <Outlet />
      </div>
    </div>
  );
};

export default index;
