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

function Index() {
  const userEmail = localStorage.getItem('email');
  const dispatch = useDispatch();

  const Websites = useSelector((state) => state.Reccomend.Websites);

  const [img, setImg] = useState('../../images/PortfolioWeb.jpg');
  const [templates, setTemplates] = useState([]);
  const [trending, setTrending] = useState([]);

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleImage = (e) => {
    if (e == 'FoodSite Variation') {
      return FoodSiteImg;
    } else if (e == 'PortfolioWeb Variation') {
      return portfolioImg;
    } else if (e == 'iBlog Variation') {
      return iBlog;
    }
  };

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

  return (
    <div>
      {Websites && (
        <h2
          style={{
            textAlign: 'center',
            marginTop: '20px',
            marginBottom: '80px',
            fontSize: '1.9rem',
          }}>
          Reccomended Templates
        </h2>
      )}
      <div className='myTemplates'>
        {Websites &&
          Websites.map((key) => {
            return (
              <div className='template-card'>
                <div className='card'>
                  <h3>
                    <a target='_blank' rel='noreferrer' href={key}>
                      {key}
                    </a>
                  </h3>
                </div>
              </div>
            );
          })}
      </div>
      <h2
        onMouseEnter={getTrending}
        style={{
          textAlign: 'center',
          marginTop: '20px',
          marginBottom: '80px',
          fontSize: '1.9rem',
        }}>
        Trending Templates
      </h2>

      <div className='myTemplates'>
        {trending.map((key) => {
          return (
            <div>
              <div className='template-card'>
                <div className='card' onMouseEnter={() => {}}>
                  <div className='imgbox'>
                    <img src={handleImage(key.templateName)} />
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

      <h2
        onMouseEnter={displayTemplates}
        style={{
          textAlign: 'center',
          marginTop: '20px',
          marginBottom: '80px',
          fontSize: '1.9rem',
        }}>
        Public Templates
      </h2>
      <div className='myTemplates'>
        {templates.map((key) => {
          return (
            <div>
              <div className='template-card'>
                <div className='card' onMouseEnter={() => {}}>
                  <div className='imgbox'>
                    <img src={handleImage(key.templateName)} />
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
                        // navigate('/Preview');
                        handleTrending(key._id);
                      }}
                      component={Link}
                      // to='/Preview'
                    >
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
