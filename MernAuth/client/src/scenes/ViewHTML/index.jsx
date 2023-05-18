import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import { Link } from 'react-router-dom';

import { tokens } from '../../theme';
import { Box, Typography, useTheme } from '@mui/material';

const TutorialContent = () => {
  const [data, setData] = useState({});

  let title = localStorage.getItem('title');

  //   let title = window.location.href.split('/')[4];
  //   console.log(title);
  let names, values;

  useEffect(() => {
    axios.get(`http://localhost:8080/api/getHTMLG/${title}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  if (data.attributeNames && data.attributeNames) {
    names = data.attributeNames.split(',');
    values = data.attributeExplanation.split(',');
  }

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='50px' className='ViewBox'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 750,
          margin: 'auto',
          backgroundColor: `${colors.primary[400]}`,
          borderRadius: '10px',
        }}
        key={data._id}>
        <h2>{data.title}</h2>
        <p className='description'>{data.content}</p>
        <table className=''>
          <tr>
            <th>Tag</th>
            <th>Description</th>
          </tr>
          <th>
            {names &&
              names.map((name) => {
                return <tr className='trs first_tr'>{name}</tr>;
              })}
          </th>
          <td>
            {values &&
              values.map((value) => {
                return <tr className='trs'>{value}</tr>;
              })}
          </td>
        </table>

        <h3>Example</h3>
        <div className='textarea' name='description' rows='12' col='550'>
          {data.example ? (
            data.example.split(',').map((ex) => {
              return <p>{ex}</p>;
            })
          ) : (
            <p>There is no example for this tag</p>
          )}
        </div>
        <Link to={`Editor`}>
          <button className='btn'>Try it Yourself</button>
        </Link>
      </div>
    </Box>
  );
};

export default TutorialContent;
