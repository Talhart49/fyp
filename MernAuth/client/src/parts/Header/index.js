import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Sidebar from '../Sidebar';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { FaUserAstronaut } from 'react-icons/fa';
import { AiOutlineSetting, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/getHTMLG').then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <nav className='nav-wrapper'>
      {/* <div className='nav-left'>
        <a href='#' className='brand-logo'>
          Templater
        </a>

        <div className='nav-left-left'>
          <AiOutlineMenu className='burger-menu' onClick={showSidebar} />

          <Input
            id='input-with-icon-adornment'
            startAdornment={
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            }
          />
        </div>
      </div>
      <div className='nav-right'>
        <button className='nav-right-btn'>
          <FaUserAstronaut className='user' />
          <AiOutlineSetting className='setting' />
        </button>
      </div> */}
      <div
        className={sidebar ? 'sidebar' : 'sidebar-inactive'}
        style={{ maxWidth: '240px' }}>
        <h2
          style={{
            textAlign: 'center',
            marginTop: '20px',
            marginBottom: '20px',
            marginRight: '20px',
          }}>
          Tutorial
        </h2>
        <ul className='sidebarList'>
          {data.map((item) => (
            <li className='sidebar__item' key={item._id}>
              <Link to={item.title}>
                <h3
                  style={{
                    textAlign: 'center',
                    marginTop: '20px',
                    marginBottom: '20px',
                    marginLeft: '20px',
                  }}>
                  {item.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
