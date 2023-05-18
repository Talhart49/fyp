import React from 'react';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Topbar from '../../scenes/global/Topbar';
import Sidebar from '../../scenes/global/Sidebar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from '../../theme';

const NDashboard = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='AppD'>
          <Sidebar isSidebar={isSidebar} />
          <main className='MainD'>
            <Topbar setIsSidebar={setIsSidebar} />
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default NDashboard;
