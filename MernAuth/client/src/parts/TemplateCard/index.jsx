import React, { useState, useEffect } from 'react';
import './index.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';

function Index({ data }) {
  const navigate = useNavigate();

  const [stars, setStars] = useState({
    FP: 5,
    FS: 5,
    IB: 5,
    GB: 5,
    DP: 5,
    OM: 5,
    AG: 5,
    PP: 5,
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
    } else if (data.name === 'Gradient Blog') {
      const res = await axios.get(
        `http://localhost:8080/api/feedback/${data.name}`
      );
      setStars({
        ...stars,
        GB: res.data.average,
      });
    } else if (data.name === 'Developer Portfolio') {
      const res = await axios.get(
        `http://localhost:8080/api/feedback/${data.name}`
      );
      setStars({
        ...stars,
        DP: res.data.average,
      });
    } else if (data.name === 'My Online Meal') {
      const res = await axios.get(
        `http://localhost:8080/api/feedback/${data.name}`
      );
      setStars({
        ...stars,
        OM: res.data.average,
      });
    } else if (data.name === 'Agglomerate') {
      const res = await axios.get(
        `http://localhost:8080/api/feedback/${data.name}`
      );
      setStars({
        ...stars,
        AG: res.data.average,
      });
    } else if (data.name === 'Professional Portfolio') {
      const res = await axios.get(
        `http://localhost:8080/api/feedback/${data.name}`
      );
      setStars({
        ...stars,
        PP: res.data.average,
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
    } else if (data.name === 'Gradient Blog') {
      setFinal(stars.GB);
    } else if (data.name === 'Developer Portfolio') {
      setFinal(stars.DP);
    } else if (data.name === 'My Online Meal') {
      setFinal(stars.OM);
    } else if (data.name === 'Agglomerate') {
      setFinal(stars.AG);
    } else if (data.name === 'Professional Portfolio') {
      setFinal(stars.PP);
    }
  }, [stars]);

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
