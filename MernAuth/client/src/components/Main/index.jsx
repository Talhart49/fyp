import * as React from 'react';
import './styles.css';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
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

import './styles.css';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { FaUserAstronaut } from 'react-icons/fa';
import { AiOutlineSetting, AiOutlineMenu } from 'react-icons/ai';

import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';

import nav_bg from '../../images/marissa.jpg';

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

  const handlehtml = () => {
    navigate('/dashboard/ViewHtml_U');
    setDown(!down);
  };

  const handlecss = () => {
    navigate('/dashboard/ViewHtml_U');
    setDown(!down);
  };

  const handlejs = () => {
    navigate('/dashboard/ViewHtml_U');
    setDown(!down);
  };

  React.useEffect(() => {
    axios.get(`http://localhost:8080/api/auth/${userData}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${nav_bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

        width: '100%',
        height: '380px',
      }}>
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
            <Typography
              variant='h5'
              noWrap
              sx={{
                flexGrow: 1,
                color: '#000',
                cursor: 'pointer',
                fontFamily: 'Poppins',
                fontWeight: 'bold',
              }}
              component='div'>
              Templater
            </Typography>

            <div className='nav-left-left'>
              <AiOutlineMenu
                className='burger_menu'
                onClick={handleDrawerOpen}
                style={{
                  ...(open && { display: 'none' }),
                }}
              />

              <Input
                id='input-with-icon-adornment'
                startAdornment={
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                }
              />
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
              width: drawerWidth,
            },
          }}
          variant='persistent'
          anchor='right'
          open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '100px',
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
                  <SchoolIcon />
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
                    onClick={handlehtml}>
                    <ListItemIcon>
                      <HtmlIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Learn HTML'} />
                  </ListItemButton>
                </ListItem>

                <ListItem key={'learn CSS'} disablePadding>
                  <ListItemButton
                    sx={{
                      marginTop: 1,
                    }}
                    onClick={handlecss}>
                    <ListItemIcon>
                      <CssIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Learn CSS'} />
                  </ListItemButton>
                </ListItem>

                <ListItem key={'learn JS'} disablePadding>
                  <ListItemButton
                    sx={{
                      marginTop: 1,
                    }}
                    onClick={handlejs}>
                    <ListItemIcon>
                      <JavascriptIcon />
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
                  <CreateIcon />
                </ListItemIcon>
                <ListItemText primary={'Create Template'} />
              </ListItemButton>
            </ListItem>

            <ListItem key={'My Template'} disablePadding>
              <ListItemButton
                sx={{
                  marginTop: 1,
                }}
                onClick={handleOpen}>
                <ListItemIcon>
                  <DraftsIcon />
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
                <CreditCardIcon />
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
                      color: 'black',
                    }}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
        className='below_nav'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '100px',
          marginInlineStart: '2rem',
        }}>
        <h3>Templates for you</h3>
        <p>All design resources are fully customizable, reusable & scalable.</p>
      </div>
    </div>
  );
}
