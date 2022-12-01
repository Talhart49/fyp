import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const Index = () => {
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

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '55%',
        margin: 'auto',
        backgroundColor: 'white',
        boxShadow: 3,
        borderRadius: 1,
      }}>
      <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>
        Update HTML Guide
      </Typography>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          margin: 'auto',
        }}>
        <TextField
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
        <TextField
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
        <TextField
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
        <TextField
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

        <TextField
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
