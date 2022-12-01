import React, { PureComponent, useState, useCallback } from 'react';
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
import MenuIcon from '@mui/icons-material/Menu';
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
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

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

  const [OpenG, setOpenG] = React.useState(true);
  const handleOpenG = () => setOpenG(!OpenG);

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

  React.useEffect(() => {
    axios.get(`http://localhost:8080/api/auth/${userData}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='fixed' open={open}>
        <Toolbar
          sx={{
            backgroundColor: '#fff',
          }}>
          <Typography
            variant='h5'
            noWrap
            sx={{
              color: 'black',
              flexGrow: 1,
              marginBottom: '0px',
              paddingBottom: '0px',
            }}
            component='div'>
            Admin Dashboard
          </Typography>
          <IconButton
            color='black'
            aria-label='open drawer'
            edge='end'
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main
        open={open}
        sx={{
          marginBottom: '0px',
          paddingBottom: '0px',
          backgroundColor: '#E3F2FD',
        }}>
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
              marginTop: '10px',
              marginInlineStart: '2rem',
            }}>
            <Avatar
              alt={data.fullName}
              src={data.dp}
              sx={{
                width: 56,
                height: 56,
                marginTop: 2,
              }}
            />
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
        <List>
          <ListItem key={'Users'} disablePadding>
            <ListItemButton>
              <Link
                to={`/Admin_Dashboard/Users`}
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  color: 'black',
                }}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'Users'} />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem key={'Guides'} disablePadding>
            <ListItemButton onClick={handleOpenG}>
              <Link
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  color: 'black',
                }}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={'Guides          v'} />
              </Link>
            </ListItemButton>
          </ListItem>
          {OpenG ? (
            <List>
              <ListItem key={'HTML_Guides'} disablePadding>
                <ListItemButton onClick={handleOpenG}>
                  <Link
                    to={`/Admin_Dashboard/HTML_Guides`}
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      color: 'black',
                    }}>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={'HTML Guides'} />
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem key={'CSS_Guides'} disablePadding>
                <ListItemButton onClick={handleOpenG}>
                  <Link
                    to={`/Admin_Dashboard/CSS_Guides`}
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      color: 'black',
                    }}>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={'CSS Guides'} />
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem key={'JS_Guides'} disablePadding>
                <ListItemButton onClick={handleOpenG}>
                  <Link
                    to={`/Admin_Dashboard/JS_Guides`}
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      color: 'black',
                    }}>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={'JS Guides'} />
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          ) : null}

          <ListItem key={'Templates'} disablePadding>
            <ListItemButton>
              <Link
                to={`/Admin_Dashboard/Templates`}
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  color: 'black',
                }}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'Templates'} />
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          {['Feedbacks', 'Payments', 'Help Center'].map((text, index) => (
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
            <InboxIcon
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
  );
}
