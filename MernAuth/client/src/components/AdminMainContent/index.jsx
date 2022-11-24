import React, { PureComponent, useState, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import TemplatesGraph from '../../parts/TemplatesGraph';
import EarningsGraph from '../../parts/EarningsGraph';

const index = () => {
  return (
    <div>
      <Typography variant='h4' sx={{ flexGrow: 1 }} component='div'>
        Dashboard
      </Typography>
      <TemplatesGraph />
      <EarningsGraph />
      <Typography variant='h4' sx={{ flexGrow: 1 }} component='div'>
        Templates
      </Typography>
    </div>
  );
};

export default index;
