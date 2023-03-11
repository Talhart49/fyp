import React from 'react';
import './index.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Index({ data }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className='template-card'>
        <div className='card'>
          <div className='imgbox'>
            <img src={data.image} />
          </div>

          <div class='content'>
            <h2>{data.name}</h2>
            <p>{data.description.substring(0, 120)}...</p>
            <Button
              variant='contained'
              color='primary'
              size='small'
              style={{ marginRight: '10px' }}>
              <a
                onClick={() => {
                  navigate(data.link);
                }}>
                Continue
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
