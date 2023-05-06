import React, { useState } from 'react';
import './styles.css';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';

import SchoolIcon from '@mui/icons-material/School';
import CreateIcon from '@mui/icons-material/Create';
import DraftsIcon from '@mui/icons-material/Drafts';
import LogoutIcon from '@mui/icons-material/Logout';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import TextField from '@mui/material/TextField';

import './styles.css';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { FaUserAstronaut } from 'react-icons/fa';
import { AiOutlineSetting, AiOutlineMenu } from 'react-icons/ai';

import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';

import { useDispatch, useSelector } from 'react-redux';

import { provideRecommend } from '../../redux/Recommndaetion/Reccomend_Slice';

import { Box, IconButton, Typography } from '@mui/material';
import { tokens } from '../../theme';

import logoo from '../../images/logoo.png';
import { setLanguage } from '../../redux/GuideSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function PersistentDrawerRight() {
  const navigate = useNavigate();

  const userData = localStorage.getItem('email');

  const [data, setData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate('/login');
  };

  const [down, setDown] = React.useState(false);
  const handleDropDown = () => {
    setDown(!down);
  };

  const Handlehtml = () => {
    dispatch(setLanguage('getHTMLG'));
    localStorage.setItem('guideCat', 'getHTMLG');
    navigate('/dashboard/ViewHtml_U');
    setDown(!down);
  };

  const Handlecss = () => {
    dispatch(setLanguage('getCSSG'));
    localStorage.setItem('guideCat', 'getCSSG');
    navigate('/dashboard/ViewCSS_U');
    setDown(!down);
  };

  const Handlejs = () => {
    dispatch(setLanguage('getJSG'));
    localStorage.setItem('guideCat', 'getJSG');
    navigate('/dashboard/ViewJS_U');
    setDown(!down);
  };

  const location = window.location.pathname;
  const [heading, setHeading] = React.useState('');
  const [paragraph, setParagraph] = React.useState('');

  const setDetails = () => {
    if (location === '/dashboard/MainContent') {
      setHeading('Welcome to the Dashboard');
      setParagraph(
        'Here you can see all the customized Templates, you just need to copy the code and use it as you like.'
      );
    } else if (location === '/dashboard/ViewHtml_U') {
      setHeading('');
      setParagraph('');
    } else if (location === '/dashboard/Templates') {
      setHeading('Templates For You');
      setParagraph(
        'All design resources are fully customizable and easy to use. You can use them for your personal or commercial projects.'
      );
    } else if (location === '/dashboard/Payments') {
      setHeading('Select Payment Plan');
      setParagraph(
        'You can choose from these payment plans and get Benefits of our services.'
      );
    } else if (location === '/dashboard/Payments/Card') {
      setHeading('');
      setParagraph('');
    } else if (location === '/dashboard/MyTemplates') {
      setHeading('My Templates');
      setParagraph('Here you can see all your customized Templates');
    } else if (location === '/dashboard/profile') {
      setHeading('');
      setParagraph('');
    }
  };
  React.useEffect(() => {
    axios.get(`http://localhost:8080/api/auth/${userData}`).then((res) => {
      setData(res.data);
      console.log(res.data);
      console.log(location);
    });
    setDetails();
  }, [location]);

  const websites = useSelector((state) => state.Reccomend.Websites);

  const [category, setCategory] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category: category }),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
      }
      const data = await response.json();
      setRecommendations(data);
      dispatch(provideRecommend(data));
      console.log(websites);
    } catch (error) {
      console.error(error);
    }
  };

  const dispatch = useDispatch();

  const colors = tokens(theme.palette.mode);

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          sx={{
            backgroundColor: 'transparent',
          }}
          position='fixed'
          open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
              backgroundColor: 'transparent',
            }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <img
                onClick={() => navigate('/dashboard/MainContent')}
                src={logoo}
                alt='logo'
                style={{
                  width: '220px',
                  height: '80px',
                  cursor: 'pointer',
                  padding: '0',
                }}
              />

              <div
                className='nav-left-left'
                style={{
                  justifyContent: 'end',
                }}>
                <AiOutlineMenu
                  className='burger_menu'
                  onClick={handleDrawerOpen}
                  style={{
                    ...(open && { display: 'none' }),
                    color: `${colors.redAccent[400]}`,
                    backgroundColor: 'transparent',
                  }}
                />

                {location === '/dashboard/MainContent' ? (
                  <Input
                    id='input-with-icon-adornment'
                    sx={{
                      color: `${colors.redAccent[600]}`,
                    }}
                    startAdornment={
                      <InputAdornment position='start'>
                        <SearchIcon
                          onClick={handleSubmit}
                          sx={{
                            cursor: 'pointer',
                            color: `${colors.redAccent[400]}`,
                          }}
                        />
                      </InputAdornment>
                    }
                    placeholder='Search'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSubmit();
                      }
                    }}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>

            <div className='nav-right'>
              {/* <button className='nav-right-btn'>
              <FaUserAstronaut className='user' />
              <AiOutlineSetting className='setting' />
            </button> */}
            </div>
          </Toolbar>
        </AppBar>
        <Main
          sx={{
            marginTop: '0',
            padding: '0',
          }}
          open={open}>
          <DrawerHeader />
        </Main>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              backgroundColor: `${colors.primary[600]}`,
              color: `${colors.grey[900]}`,
              height: '100%',
              width: drawerWidth,
            },
          }}
          variant='persistent'
          anchor='right'
          open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronLeftIcon
                  sx={{
                    color: `${colors.grey[900]}`,
                  }}
                />
              ) : (
                <ChevronRightIcon
                  sx={{
                    color: `${colors.grey[900]}`,
                  }}
                />
              )}
            </IconButton>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '10px',
                marginInlineStart: '2rem',
              }}>
              <Tooltip title='Edit Profile' placement='right-end'>
                <Link
                  to={'./profile'}
                  style={{ textDecoration: 'none', color: 'black' }}>
                  <Avatar
                    alt={data.fullName}
                    src={data.dp}
                    sx={{
                      width: 56,
                      height: 56,
                      marginTop: 2,
                    }}
                  />
                </Link>
              </Tooltip>

              <Typography
                variant='h6'
                noWrap
                sx={{ flexGrow: 1, marginTop: 2 }}
                component='div'>
                {data.fullName}
              </Typography>
            </Box>
          </DrawerHeader>

          <Divider />
          <List
            className='list'
            sx={{
              width: '100%',
              marginTop: 4,
              marginBottom: 7,
            }}>
            <ListItem key={'learn to code'} disablePadding>
              <ListItemButton
                sx={{
                  marginTop: 1,
                }}
                onClick={handleDropDown}>
                <ListItemIcon>
                  <SchoolIcon
                    sx={{
                      color: `${colors.grey[900]}`,
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={'Learn to Code'} />
              </ListItemButton>
            </ListItem>

            {down && (
              <List>
                <ListItem key={'learn html'} disablePadding>
                  <ListItemButton
                    sx={{
                      marginTop: 1,
                    }}
                    onClick={Handlehtml}>
                    <ListItemIcon>
                      <HtmlIcon
                        sx={{
                          color: `${colors.grey[900]}`,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={'Learn HTML'} />
                  </ListItemButton>
                </ListItem>

                <ListItem key={'learn CSS'} disablePadding>
                  <ListItemButton
                    sx={{
                      marginTop: 1,
                    }}
                    onClick={Handlecss}>
                    <ListItemIcon>
                      <CssIcon
                        sx={{
                          color: `${colors.grey[900]}`,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={'Learn CSS'} />
                  </ListItemButton>
                </ListItem>

                <ListItem key={'learn JS'} disablePadding>
                  <ListItemButton
                    sx={{
                      marginTop: 1,
                    }}
                    onClick={Handlejs}>
                    <ListItemIcon>
                      <JavascriptIcon
                        sx={{
                          color: `${colors.grey[900]}`,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={'Learn JS'} />
                  </ListItemButton>
                </ListItem>
              </List>
            )}

            <ListItem key={'Create Template'} disablePadding>
              <ListItemButton
                sx={{
                  marginTop: 1,
                }}
                onClick={() => navigate('/dashboard/Templates')}>
                <ListItemIcon>
                  <CreateIcon
                    sx={{
                      color: `${colors.grey[900]}`,
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={'Create Template'} />
              </ListItemButton>
            </ListItem>

            <ListItem key={'My Template'} disablePadding>
              <ListItemButton
                sx={{
                  marginTop: 1,
                }}
                onClick={() => navigate('/dashboard/MyTemplates')}>
                <ListItemIcon>
                  <DraftsIcon
                    sx={{
                      color: `${colors.grey[900]}`,
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={'My Templates'} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <ListItem key={'Upgrade to Premium'} disablePadding>
            <ListItemButton
              sx={{
                marginTop: 1,
              }}
              onClick={() => {
                navigate('/dashboard/Payments');
              }}>
              <ListItemIcon>
                <CreditCardIcon
                  sx={{
                    color: `${colors.grey[900]}`,
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={'Upgrade to Premium'} />
            </ListItemButton>
          </ListItem>
          <List>
            {['Feedbacks', 'Help Center'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <Link
                    to={`/${text}`}
                    style={{
                      textDecoration: 'none',
                      display: 'flex',

                      color: `${colors.grey[900]}`,
                    }}>
                    <ListItemIcon>
                      {index % 2 === 0 ? (
                        <InboxIcon
                          sx={{
                            color: `${colors.grey[900]}`,
                          }}
                        />
                      ) : (
                        <MailIcon
                          sx={{
                            color: `${colors.grey[900]}`,
                          }}
                        />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
            <ListItemButton onClick={handleLogout}>
              <LogoutIcon
                sx={{
                  marginRight: 4,
                  color: `${colors.grey[900]}`,
                }}
              />
              <ListItemText primary={'Logout'} />
            </ListItemButton>
          </List>
        </Drawer>
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'>
          <Box sx={style}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Important
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Sorry Nothing here
            </Typography>
          </Box>
        </Modal>
      </Box>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '70px',

          display: `${
            location.startsWith('/dashboard/View') ? 'none' : 'flex'
          }`,
        }}>
        <h1
          style={{
            fontSize: '30px',
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
            fontFamily: 'Abril Fatface',
            letterSpacing: '1px',
          }}>
          {heading}
        </h1>
        <p
          style={{
            width: '60%',
            maxWidth: '450px',
            textAlign: 'center',
            marginTop: '20px',
            marginBottom: '20px',
            fontSize: '20px',
            color: '#3da58a',
            fontFamily: 'Abril Fatface',
            letterSpacing: '1px',
          }}>
          {paragraph}
        </p>
      </div>
    </div>
  );
}
