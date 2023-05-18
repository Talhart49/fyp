import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Main from '../Main';

import { useTheme } from '@mui/material';
import { tokens } from '../../theme';

import ParticlesBackground from '../../Particles';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div
      style={{
        backgroundColor: colors.primary[500],
      }}>
      <Main />
      <ParticlesBackground />
      <div className='details'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
