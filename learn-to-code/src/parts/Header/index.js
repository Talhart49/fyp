import React, { useState } from 'react';
import './index.css';
import Sidebar from '../../parts/Sidebar';

import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { FaUserAstronaut } from 'react-icons/fa';
import { AiOutlineSetting, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <nav className='nav-wrapper'>
      <div className='nav-left'>
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
      </div>
      {sidebar && (
        <>
          <Sidebar />
          {/* <div className='dull' onClick={showSidebar} /> */}
        </>
      )}
    </nav>
  );
};

export default Header;
