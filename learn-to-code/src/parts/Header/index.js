import React from 'react';
import './index.css';

const Header = () => {
  return (
    <nav className='nav-wrapper'>
      <a href='#' className='brand-logo'>
        Templater
      </a>
      <ul id='nav-mobile' className='right hide-on-med-and-down'>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>HTML</a>
        </li>
        <li>
          <a href=''>CSS</a>
        </li>
        <li>
          <a href=''>JavaScript</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
