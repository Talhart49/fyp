import React, { PureComponent, useState, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import TemplatesGraph from '../../parts/TemplatesGraph';
import EarningsGraph from '../../parts/EarningsGraph';
import { Box } from '@mui/material';

const index = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%',
          margin: 'auto',
          padding: '1rem',
          paddingTop: '0',
          height: '100vh',
        }}>
        <TemplatesGraph />
        <EarningsGraph />
      </Box>
    </Box>
  );
};

export default index;
