import React from 'react';
import './index.css';
import Sidebar from '../../parts/Sidebar';
import Header from '../../parts/Header';
import TutorialContent from '../../parts/TutorialContent';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const LearnHTML = () => {
  return (
    <div>
      <Header />

      <div className='details'>
        <Outlet />
      </div>
      {/* <Sidebar
       />
      <TutorialContent /> */}
    </div>
  );
};

export default LearnHTML;
