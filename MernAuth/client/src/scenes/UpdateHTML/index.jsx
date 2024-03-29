import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Header from '../../components/Header';
import { tokens } from '../../theme';
import { Box, Typography, useTheme } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;

const Index = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const [data, setData] = useState({
    title: '',
    content: '',
    attributeNames: '',
    attributeExplanation: '',
    example: '',
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const titlee = localStorage.getItem('title');
  React.useEffect(() => {
    axios
      .get(`http://localhost:8080/api/getHTMLG/${titlee}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:8080/api/HTMLG/update/${titlee}`;
      const { data: res } = await axios.put(url, data);
      console.log(res.message);
      setData({
        title: '',
        content: '',
        attributeNames: '',
        attributeExplanation: '',
        example: '',
      });
    } catch (error) {
      console.log(error);
    }
    localStorage.removeItem('title');
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
      <Header title='Update HTML' subtitle='Update an HTML Guide' />

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 750,
          margin: 'auto',
          backgroundColor: `${colors.primary[400]}`,
          borderRadius: '10px',
        }}>
        <WhiteBorderTextField
          id='outlined-basic'
          label='Title'
          variant='outlined'
          type='text'
          placeholder='Title'
          name='title'
          onChange={handleChange}
          value={data.title}
          required
          style={{ width: '65%', marginBottom: '20px', marginTop: '20px' }}
          error={error}
        />
        <WhiteBorderTextField
          id='outlined-basic'
          label='Content'
          variant='outlined'
          placeholder='Content'
          onChange={handleChange}
          name='content'
          value={data.content}
          multiline
          error={error}
          required
          style={{ width: '65%', marginBottom: '20px', marginTop: '20px' }}
          rows={3}
        />
        <WhiteBorderTextField
          id='outlined-basic'
          label='Attribute Names'
          variant='outlined'
          type='text'
          placeholder='Attribute Names'
          name='attributeNames'
          onChange={handleChange}
          value={data.attributeNames}
          required
          style={{ width: '65%', marginBottom: '20px', marginTop: '20px' }}
          error={error}
          multiline
          rows={3}
        />
        <WhiteBorderTextField
          id='outlined-basic'
          label='Attribute Explanation'
          variant='outlined'
          type='text'
          placeholder='Attribute Explanation'
          name='attributeExplanation'
          onChange={handleChange}
          value={data.attributeExplanation}
          required
          style={{ width: '65%', marginBottom: '20px', marginTop: '20px' }}
          error={error}
          multiline
          rows={3}
        />

        <WhiteBorderTextField
          id='outlined-basic'
          label='Example'
          variant='outlined'
          type='text'
          placeholder='Example'
          onChange={handleChange}
          value={data.example}
          required
          style={{ width: '65%', marginBottom: '20px', marginTop: '20px' }}
          error={error}
          multiline
          rows={5}
          name='example'
        />

        <Button
          type='submit'
          variant='contained'
          sx={{ width: '65%', marginBottom: '20px', marginTop: '20px' }}>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Submit
          </Typography>
        </Button>
      </form>
    </Box>
  );
};

export default Index;
