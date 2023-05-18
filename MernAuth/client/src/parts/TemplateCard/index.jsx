import React, { useState, useEffect } from 'react';
import './index.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';

function Index({ data }) {
  const navigate = useNavigate();

  const [stars, setStars] = useState({
    FP: 3,
    FS: 5,
    IB: 3,
  });

  const [final, setFinal] = useState();

  const getStars = async () => {
    if (data.name === 'Futuristic Portfolio') {
      const res = await axios.get(
        `http://localhost:8080/api/feedback/${data.name}`
      );
      setStars({
        ...stars,
        FP: res.data.average,
      });
    } else if (data.name === 'FoodSite') {
      const res = await axios.get(
        `http://localhost:8080/api/feedback/${data.name}`
      );
      setStars({
        ...stars,
        FS: res.data.average,
      });
    } else if (data.name === 'iBlog') {
      const res = await axios.get(
        `http://localhost:8080/api/feedback/${data.name}`
      );
      setStars({
        ...stars,
        IB: res.data.average,
      });
    }
  };

  useEffect(() => {
    getStars();
    if (data.name === 'Futuristic Portfolio') {
      setFinal(stars.FP);
    } else if (data.name === 'FoodSite') {
      setFinal(stars.FS);
    } else if (data.name === 'iBlog') {
      setFinal(stars.IB);
    }
  }, [data]);

  console.log(final);

  return (
    <div>
      <div className='template-card'>
        <div className='card'>
          <div className='imgbox'>
            <img src={data.image} />
          </div>

          <div class='content'>
            <h2>{data.name}</h2>
            <p
              style={{
                fontSize: '15px',
                color: 'gray',
                marginTop: '10px',
                marginBottom: '0',
              }}>
              {data.description.substring(0, 120)}...
            </p>
            {getStars && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '26px',
                  marginTop: '0',
                  marginBottom: '5px',
                  padding: '0',
                }}>
                <StarRatingComponent name='rate1' starCount={5} value={final} />
              </div>
            )}

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
