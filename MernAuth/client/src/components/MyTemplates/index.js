import React, { useState, useEffect } from 'react';
import './index.css';
import portfolioImg from '../../images/PortfolioWeb.jpg';
import FoodSiteImg from '../../images/FoodSite.jpg';
import iBlog from '../../images/iblog.jpg';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Index() {
  const userEmail = localStorage.getItem('email');

  const [img, setImg] = useState('../../images/PortfolioWeb.jpg');
  const [templates, setTemplates] = useState([]);

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios.get(`http://localhost:8080/api/auth/${userEmail}`).then((res) => {
        setName(res.data.fullName);
        console.log(res.data.fullName);
      });
    } catch (error) {
      console.log(error);
    }
  }, [userEmail]);

  const handleImage = (e) => {
    if (e == 'FoodSite Variation') {
      return FoodSiteImg;
    } else if (e == 'PortfolioWeb Variation') {
      return portfolioImg;
    } else if (e == 'iBlog Variation') {
      return iBlog;
    }
  };

  const displayTemplates = () => {
    try {
      axios
        .get(`http://localhost:8080/api/usersTemplate/${name}`)
        .then((res) => {
          setTemplates(res.data);
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePublic = (e) => {
    fetch(`http://localhost:8080/api/usersTemplate/${e}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ templateStatus: 'public' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h2
        style={{
          textAlign: 'center',
          marginTop: '20px',
          marginBottom: '80px',
          fontSize: '1.9rem',
          cursor: 'pointer',
        }}
        onClick={() => {
          displayTemplates();
        }}>
        My Templates
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
                      <a
                        onClick={() => {
                          handlePublic(key._id);
                        }}>
                        Make it Public
                      </a>
                    </Button>
                    <Button
                      variant='contained'
                      color='primary'
                      size='small'
                      style={{ marginRight: '10px' }}>
                      <CopyToClipboard text={key.templateCode}>
                        <span>Copy to clipboard</span>
                      </CopyToClipboard>
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
