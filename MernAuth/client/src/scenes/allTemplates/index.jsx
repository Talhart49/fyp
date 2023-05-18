import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataContacts } from '../../data/mockData';
import Header from '../../components/Header';
import { useTheme } from '@mui/material';

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

const Contacts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [templates, setTemplates] = useState([]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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

  useEffect(() => {
    displayTemplates();
  }, []);

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
    <Box m='20px'>
      <Header
        title='Templates'
        subtitle='All Public Templates are displayed below'
      />
      <Box className='templatess'>
        {templates.map((key) => {
          return (
            <Box>
              <div className='template-card'>
                <div
                  className='card'
                  style={{
                    backgroundColor: colors.primary[400],
                  }}>
                  <div className='imgbox'>
                    <img src={`data:image/png;base64,${key.image}`} />
                  </div>

                  <div class='content'>
                    <h2
                      style={{
                        color: colors.greenAccent[400],
                      }}>
                      {key.templateName}
                    </h2>
                    <p
                      style={{
                        color: colors.greenAccent[400],
                      }}>
                      {key.templateDescription}
                    </p>
                    <p
                      style={{
                        textAlign: 'right',
                        marginTop: '5px',
                        marginBottom: '5px',
                        fontSize: '1.2rem',

                        color: colors.greenAccent[200],
                      }}>
                      {moment(key.dateCreated).fromNow()}...
                    </p>

                    <Button
                      variant='contained'
                      color='primary'
                      size='small'
                      style={{
                        marginRight: '10px',
                      }}>
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
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}>
                      <Button
                        variant='contained'
                        color='error'
                        size='small'
                        style={{ alignSelf: 'right' }}>
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
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Contacts;
