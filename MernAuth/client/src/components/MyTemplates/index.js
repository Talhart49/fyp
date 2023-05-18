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
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
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

    displayTemplates();
  }, []);

  const displayTemplates = () => {
    try {
      axios
        .get(`http://localhost:8080/api/usersTemplate/${userEmail}`)
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

  const handleDelete = (e) => {
    fetch(`http://localhost:8080/api/usersTemplate/${e}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ templateStatus: 'public' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  return (
    <div>
      <h2
        className='THeading'
        style={{
          textAlign: 'center',
          marginTop: '20px',
          marginBottom: '80px',
          fontSize: '1.9rem',
          cursor: 'pointer',
        }}>
        My Templates
      </h2>
      <div className='myTemplatess'>
        {templates.map((key) => {
          return (
            <div>
              <div className='template-card'>
                <div className='card'>
                  <div className='imgbox'>
                    <img src={`data:image/png;base64,${key.image}`} />
                  </div>

                  <div class='content'>
                    <h2>{key.templateName}</h2>
                    <p>{key.templateDescription}</p>
                    <p
                      style={{
                        textAlign: 'right',
                        marginTop: '10px',
                        marginBottom: '5px',
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
                    <div>
                      <Button
                        variant='contained'
                        color='error'
                        size='small'
                        style={{ marginRight: '10px', marginTop: '10px' }}>
                        {/* <DeleteOutlineIcon /> */}
                        <a
                          onClick={() => {
                            handleDelete(key._id);
                          }}>
                          Delete
                        </a>
                      </Button>
                    </div>
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
