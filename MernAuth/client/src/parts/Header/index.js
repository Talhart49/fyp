import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './index.css';
// import Sidebar from '../Sidebar';
// import Input from '@mui/material/Input';
// import SearchIcon from '@mui/icons-material/Search';
// import InputAdornment from '@mui/material/InputAdornment';
// import { FaUserAstronaut } from 'react-icons/fa';
// import { AiOutlineSetting, AiOutlineMenu } from 'react-icons/ai';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [sidebar, setSidebar] = useState(true);
//   const showSidebar = () => setSidebar(!sidebar);

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/getHTMLG').then((res) => {
//       setData(res.data);
//     });
//   }, []);

//   return (
//     <nav className='nav-wrapper'>
//       {/* <div className='nav-left'>
//         <a href='#' className='brand-logo'>
//           Templater
//         </a>

//         <div className='nav-left-left'>
//           <AiOutlineMenu className='burger-menu' onClick={showSidebar} />

//           <Input
//             id='input-with-icon-adornment'
//             startAdornment={
//               <InputAdornment position='start'>
//                 <SearchIcon />
//               </InputAdornment>
//             }
//           />
//         </div>
//       </div>
//       <div className='nav-right'>
//         <button className='nav-right-btn'>
//           <FaUserAstronaut className='user' />
//           <AiOutlineSetting className='setting' />
//         </button>
//       </div> */}
//       <div
//         className={sidebar ? 'sidebar' : 'sidebar-inactive'}
//         style={{ maxWidth: '240px' }}>
//         <h2
//           style={{
//             textAlign: 'center',
//             marginTop: '20px',
//             marginBottom: '20px',
//             marginRight: '20px',
//           }}>
//           Tutorial
//         </h2>
//         <ul className='sidebarList'>
//           {data.map((item) => (
//             <li className='sidebar__item' key={item._id}>
//               <Link to={item.title}>
//                 <h3
//                   style={{
//                     textAlign: 'center',
//                     marginTop: '20px',
//                     marginBottom: '20px',
//                     marginLeft: '20px',
//                   }}>
//                   {item.title}
//                 </h3>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Header;

import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from '../../theme';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { setGuide } from '../../redux/GuideSlice';

import { useDispatch, useSelector } from 'react-redux';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const language = useSelector((state) => state.Guide.language);
  console.log(language);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();

  console.log(language);

  const getGuide = (title) => {
    axios
      .get(`http://localhost:8080/api/${language}/${title}`)
      .then((res) => {
        localStorage.setItem('title', title);
        dispatch(setGuide(res.data));
        console.log('Received data:', res.data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  };

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[700],
      }}
      onClick={() => {
        getGuide(title);
        setSelected(title);
      }}
      icon={icon}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const language = useSelector((state) => state.Guide.language);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState('Users');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/${language}`).then((res) => {
      setData(res.data);
    });
  }, []);

  const Guidestitle = () => {
    if (language === 'getHTMLG') {
      return 'HTML Guides';
    } else if (language === 'getCSSG') {
      return 'CSS Guides';
    } else if (language === 'getJSG') {
      return 'JS Guides';
    }
  };

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.primary[600]} !important`,
          height: '100vh !important',
          marginTop: '2vh !important',
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important',
        },
      }}>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
            }}>
            {!isCollapsed && (
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                ml='15px'>
                <Typography variant='h3' color={colors.grey[700]}></Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon
                    style={{
                      color: colors.grey[700],
                    }}
                  />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb='25px'>
              <Box textAlign='center'>
                <Typography variant='h5' color={colors.greenAccent[500]}>
                  {Guidestitle()}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            {data.map((item, index) => (
              <Item
                title={item.title}
                to={item.title}
                icon={index + 1}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
