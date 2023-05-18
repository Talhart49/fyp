import React, { useState, useEffect } from 'react';
import './index.css';
import portfolioImg from '../../images/PortfolioWeb.jpg';
import FoodSiteImg from '../../images/FoodSite.jpg';
import iBlog from '../../images/iblog.jpg';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { useSelector, useDispatch } from 'react-redux';

import { provideCode } from '../../redux/Recommndaetion/Reccomend_Slice';

import { useTheme } from '@mui/material';
import { tokens } from '../../theme';

// import ParticlesBackground from '../ParticlesBackground';

import ParticlesBackground from '../../Particles';

function Index() {
  const userEmail = localStorage.getItem('email');
  const dispatch = useDispatch();

  const Websites = useSelector((state) => state.Reccomend.Websites);

  const [img, setImg] = useState('../../images/PortfolioWeb.jpg');
  const [templates, setTemplates] = useState([]);
  const [trending, setTrending] = useState([]);
  const [recommended, setRecommended] = useState([]);

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const base_url = 'http://localhost:8080/api/usersTemplate/recommended/';

      try {
        // Iterate over the IDs and send HTTP requests
        const fetchRequests = Websites.map(async (id) => {
          const url = base_url + id;
          const response = await axios.get(url);
          return response.data[0];
        });

        // Wait for all requests to complete
        const requestResults = await Promise.all(fetchRequests);
        setRecommended(requestResults);
        console.log(requestResults);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();

    displayTemplates();
    getTrending();
  }, [Websites]);

  const displayTemplates = async () => {
    const res = await axios.get('http://localhost:8080/api/usersTemplate');
    setTemplates(res.data);
    console.log(res.data);
  };

  const handleTrending = async (id) => {
    await axios
      .put('http://localhost:8080/api/usersTemplate/' + id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTrending = async () => {
    await axios
      .get('http://localhost:8080/api/usersTemplate/t/ending')
      .then((res) => {
        setTrending(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div>
      {recommended.length > 0 && (
        <h2 className='THeading'>Reccomended Templates</h2>
      )}
      <div className='myTemplates'>
        {recommended &&
          recommended.map((key) => {
            return (
              <div>
                <div className='template-card'>
                  <div className='card' onMouseEnter={() => {}}>
                    <div className='imgbox'>
                      <img src={`data:image/png;base64,${key.image}`} />{' '}
                    </div>

                    <div class='content'>
                      <h2>{key.templateName}</h2>
                      <p>{key.templateDescription}</p>
                      <p
                        style={{
                          textAlign: 'right',
                          marginTop: '20px',
                          marginBottom: '20px',
                          fontSize: '1.2rem',
                        }}>
                        {moment(key.dateCreated).fromNow()}...
                      </p>

                      <Button
                        variant='contained'
                        color='primary'
                        size='small'
                        style={{ marginRight: '10px' }}>
                        <CopyToClipboard text={key.templateCode}>
                          <span>Copy to clipboard</span>
                        </CopyToClipboard>
                      </Button>
                      <Button
                        variant='contained'
                        color='primary'
                        size='small'
                        style={{ marginRight: '10px' }}
                        onClick={() => {
                          dispatch(provideCode(key.templateCode));
                          navigate('/Preview');
                        }}
                        component={Link}
                        to='/Preview'>
                        Preview
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <h2 className='THeading'>Trending Templates</h2>

      <div className='myTemplates'>
        {trending.map((key) => {
          return (
            <div>
              <div className='template-card'>
                <div className='card' onMouseEnter={() => {}}>
                  <div className='imgbox'>
                    <img src={`data:image/png;base64,${key.image}`} />{' '}
                  </div>

                  <div class='content'>
                    <h2>{key.templateName}</h2>
                    <p>{key.templateDescription}</p>
                    <p
                      style={{
                        textAlign: 'right',
                        marginTop: '20px',
                        marginBottom: '20px',
                        fontSize: '1.2rem',
                      }}>
                      {moment(key.dateCreated).fromNow()}...
                    </p>

                    <Button
                      variant='contained'
                      color='primary'
                      size='small'
                      style={{ marginRight: '10px' }}>
                      <CopyToClipboard text={key.templateCode}>
                        <span>Copy to clipboard</span>
                      </CopyToClipboard>
                    </Button>
                    <Button
                      variant='contained'
                      color='primary'
                      size='small'
                      style={{ marginRight: '10px' }}
                      onClick={() => {
                        dispatch(provideCode(key.templateCode));
                        navigate('/Preview');
                      }}
                      component={Link}
                      to='/Preview'>
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className='THeading'>Public Templates</h2>
      <div className='myTemplates'>
        {templates.map((key) => {
          return (
            <div>
              <div className='template-card'>
                <div className='card' onMouseEnter={() => {}}>
                  <div className='imgbox'>
                    <img src={`data:image/png;base64,${key.image}`} />{' '}
                  </div>

                  <div class='content'>
                    <h2>{key.templateName}</h2>
                    <p>{key.templateDescription}</p>
                    <p
                      style={{
                        textAlign: 'right',
                        marginTop: '20px',
                        marginBottom: '20px',
                        fontSize: '1.2rem',
                      }}>
                      {moment(key.dateCreated).fromNow()}...
                    </p>

                    <Button
                      variant='contained'
                      color='primary'
                      size='small'
                      style={{ marginRight: '10px' }}>
                      <CopyToClipboard text={key.templateCode}>
                        <span>Copy to clipboard</span>
                      </CopyToClipboard>
                    </Button>
                    <Button
                      variant='contained'
                      color='primary'
                      size='small'
                      style={{ marginRight: '10px' }}
                      onClick={() => {
                        dispatch(provideCode(key.templateCode));
                        navigate('/Preview');
                        handleTrending(key._id);
                      }}
                      component={Link}
                      to='/Preview'>
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
