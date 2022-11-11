import axios from 'axios';
import './index.css';
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { Link, useNavigate } from 'react-router-dom';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

const Profile = () => {
  const userData = localStorage.getItem('email');
  const [data, setData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  React.useEffect(() => {
    axios.get(`http://localhost:8080/api/auth/${userData}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  const [dataInput, setDataInput] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [values, setValues] = React.useState({
    showPassword1: false,
    showPassword2: false,
    showPassword3: false,
  });
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:8080/api/users';
      const { data: res } = await axios.post(url, data);
      navigate('/dashboard');
      console.log(res.message);
    } catch (error) {
      console.log(error.response.data.message);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  const handleClickShowPassword1 = () => {
    setValues({
      ...values,
      showPassword1: !values.showPassword1,
    });
  };
  const handleClickShowPassword2 = () => {
    setValues({
      ...values,
      showPassword2: !values.showPassword2,
    });
  };
  const handleClickShowPassword3 = () => {
    setValues({
      ...values,
      showPassword3: !values.showPassword3,
    });
  };

  return (
    <div className='main'>
      <div className='main-container'>
        <div className='header'>
          <h1>Edit Profile</h1>
        </div>
        <div className='Edit-dp'>
          <img
            src='https://www.w3schools.com/howto/img_avatar.png'
            alt='Avatar'
            className='avatar'
          />
          <div className='Edit-dp-btn'>
            <input type='file' className='btn' />
            <p>Acceptable formats: .jpg and .png, Max size: 2MB</p>
          </div>
        </div>

        <div className='information'>
          <h2>
            <b>Personal Information</b>
          </h2>
          <form className='form' onSubmit={handleSubmit}>
            <TextField
              id='outlined-basic'
              label='Full Name'
              variant='outlined'
              type='text'
              placeholder='Full Name'
              name='fullName'
              onChange={handleChange}
              value={data.fullName}
              required
              className='input-fields'
              style={{ width: '40%', marginBottom: '20px' }}
              error={error}
            />
            <TextField
              id='outlined-basic'
              label='Phone Number'
              variant='outlined'
              type='number'
              placeholder='Phone Number'
              name='phone'
              onChange={handleChange}
              value={data.phone}
              required
              className='input-fields'
              style={{ width: '40%', marginBottom: '20px' }}
              error={error}
            />
            <TextField
              id='outlined-basic'
              label='Email'
              variant='outlined'
              type='email'
              placeholder='Email'
              name='email'
              onChange={handleChange}
              value={data.email}
              required
              className='input-fields'
              style={{ width: '40%', marginBottom: '20px' }}
              error={error}
            />

            <button
              type='submit'
              className='submit-button'
              style={{ width: '40%', marginBottom: '20px' }}>
              Sign In
            </button>
          </form>
        </div>
        <div className='change-password'>
          <h2>
            <b>Change Password</b>
          </h2>
          <form className='form' onSubmit={handleSubmit}>
            <FormControl
              sx={{ m: 1, width: '40%', marginBottom: '20px' }}
              variant='outlined'>
              <InputLabel htmlFor='outlined-adornment-password'>
                Old Password
              </InputLabel>
              <OutlinedInput
                id='outlined-adornment-password'
                type={values.showPassword1 ? 'text' : 'password'}
                value={data.password}
                onChange={handleChange}
                name='password'
                required
                error={error}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword1}
                      edge='end'>
                      {values.showPassword1 ? (
                        <MdVisibilityOff />
                      ) : (
                        <MdVisibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label='Old Password'
              />
            </FormControl>
            <FormControl
              sx={{ m: 1, width: '40%', marginBottom: '20px' }}
              variant='outlined'>
              <InputLabel htmlFor='outlined-adornment-password'>
                Password
              </InputLabel>
              <OutlinedInput
                id='outlined-adornment-password'
                type={values.showPassword2 ? 'text' : 'password'}
                value={data.password}
                onChange={handleChange}
                name='password'
                required
                error={error}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword2}
                      edge='end'>
                      {values.showPassword2 ? (
                        <MdVisibilityOff />
                      ) : (
                        <MdVisibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label='Password'
              />
            </FormControl>
            <FormControl
              sx={{ m: 1, width: '40%', marginBottom: '20px' }}
              variant='outlined'>
              <InputLabel htmlFor='outlined-adornment-password'>
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id='outlined-adornment-password'
                type={values.showPassword3 ? 'text' : 'password'}
                value={data.password}
                onChange={handleChange}
                name='password'
                required
                error={error}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword3}
                      edge='end'>
                      {values.showPassword3 ? (
                        <MdVisibilityOff />
                      ) : (
                        <MdVisibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label='Confirm Password'
              />
            </FormControl>
            <button
              type='submit'
              className='submit-button'
              style={{ width: '40%', marginBottom: '20px' }}>
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

{
  /* <div className='main-content' key={data.firstName}>
        <h2>{data.firstName}</h2>
        <p className='description'>{data.email}</p>
        <table className='attr-table'>
          <tr>
            <th>Tag</th>
            <th>Description</th>
          </tr>
        </table>

        <h3>Example</h3>
        <div className='textarea' name='description' rows='12' col='550'>
          {data.email}
        </div>
        <Link to={`try`}>
          <button className='btn'>Try it Yourself</button>
        </Link>
      </div> */
}
