import React, { useRef, useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { Typography, Box, useTheme } from '@mui/material';

function Editor() {
  const title = localStorage.getItem('title');
  const guideCat = localStorage.getItem('guideCat');
  console.log('ff', guideCat);
  console.log('gg', title);

  // let title = window.location.href.split('/')[4];
  const [data, setData] = useState({});

  const btnRef = useRef();
  const iframeRef = useRef();
  const firstRef = useRef();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/${guideCat}/${title}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });

    const element = btnRef.current;
    element.addEventListener('click', () => {
      const html = firstRef.current.textContent;
      iframeRef.current.srcdoc = html;
    });

    firstRef.current.addEventListener('keyup', () => {
      const html = firstRef.current.textContent;
      iframeRef.current.srcdoc = html;
    });

    firstRef.current.addEventListener('paste', () => {
      const html = firstRef.current.textContent;
      iframeRef.current.srcdoc = html;
    });
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
      <Box mb='30px'>
        <Typography
          variant='h2'
          color={colors.grey[900]}
          fontWeight='bold'
          fontSize='1.9rem'
          sx={{ m: '45px 0 5px 0' }}>
          Online Code Editor
        </Typography>
        <Typography variant='h6' color={colors.greenAccent[400]}>
          Write your code here and see the output in the right side
        </Typography>
      </Box>

      <div
        class='main-editor'
        style={{
          backgroundColor: 'transparent',
          color: colors.redAccent[900],
          margin: '0 20px',
        }}>
        <div
          class='editor-first'
          style={{
            backgroundColor: colors.greenAccent[600],
            color: colors.grey[100],
            fontSize: '1.2rem',
            fontWeight: 'bold',
          }}
          ref={firstRef}
          contentEditable='true'>
          {data.example ? (
            data.example.split(',').map((ex) => {
              return <p>{ex}</p>;
            })
          ) : (
            <p>There is no example for this tag</p>
          )}
        </div>
        <iframe class='editor-second' ref={iframeRef}></iframe>
      </div>
      <button class='editor-btn' ref={btnRef}>
        Run
      </button>
    </Box>
  );
}

export default Editor;
