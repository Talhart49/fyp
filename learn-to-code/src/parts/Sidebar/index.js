import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const Sidebar = () => {
  const [data, setData] = useState([]);
  const [Heading, setHeading] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/gethtmlschemas').then((res) => {
      setData(res.data);
    });

    axios
      .get('http://localhost:8080/api/gethtmlschemas', {
        title: Heading,
      })
      .then((res) => {
        console.log(res.data);
      });
  }, [Heading]);

  return (
    <div className='sidebar'>
      <h2>Tutorial</h2>
      <ul className='sidebarList'>
        {data.map((item) => (
          <li
            className='sidebar__item'
            key={item._id}
            onClick={() => setHeading(item.title)}>
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
