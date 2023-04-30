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
import styled from 'styled-components';

const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: #fff;
  }
  & label {
    color: #fff;
  }
  & .MuiOutlinedInput-root {
    color: #fff;
    fieldset {
      border-color: #fff;
    }
  }
`;

const WhiteBorderOutlinedInput = styled(OutlinedInput)`
  fieldset {
    border-color: #fff;
  }
  label {
    color: #fff;
  }
  & label.Mui-focused {
    color: #3da58a;
  }

  & .MuiOutlinedInput-input {
    color: #fff;
  }
  &.Mui-focused fieldset {
    border-color: #3da58a;
  }

  input {
    color: white;
    border-color: white;
  }
`;

const Profile = () => {
  const userData = localStorage.getItem('email');
  const [data, setData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [Pass, setPass] = React.useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  React.useEffect(() => {
    axios.get(`http://localhost:8080/api/auth/${userData}`).then((res) => {
      setData(res.data);
      console.log(res.data.block);
    });
  }, []);

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

  const handleChangeP = ({ currentTarget: input }) => {
    setPass({ ...Pass, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:8080/api/users/edit';
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

  const changePassword = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:8080/api/users/changePassword/${userData}`;
      const { data: res } = await axios.post(url, Pass);
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
    <div className='main_profile'>
      <div className='profile_container'>
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
            <input type='file' />
            <button className='btn'>Upload Picture</button>
            <p>Acceptable formats: .jpg and .png, Max size: 2MB</p>
          </div>
        </div>

        <div className='information'>
          <h2 className='ph1'>
            <b>Personal Information</b>
          </h2>
          <form className='form' onSubmit={handleSubmit}>
            <WhiteBorderTextField
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
              InputLabelProps={{ shrink: true }}
            />
            <WhiteBorderTextField
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
              InputLabelProps={{ shrink: true }}
            />
            <WhiteBorderTextField
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
              Save Changes
            </button>
          </form>
        </div>
        <div className='change-password'>
          <h2 className='ph1'>
            <b>Change Password</b>
          </h2>
          <form className='form' onSubmit={changePassword}>
            <FormControl
              sx={{
                m: 1,
                width: '40%',
                marginBottom: '20px',
                color: 'white',
              }}
              variant='outlined'>
              <InputLabel
                htmlFor='outlined-adornment-password'
                style={{ color: 'white' }}>
                Old Password
              </InputLabel>
              <WhiteBorderOutlinedInput
                id='outlined-adornment-password'
                type={values.showPassword1 ? 'text' : 'password'}
                value={Pass.oldPassword}
                onChange={handleChangeP}
                name='oldPassword'
                required
                error={error}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      style={{ color: 'white' }}
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
              <InputLabel
                htmlFor='outlined-adornment-password'
                style={{ color: 'white' }}>
                Password
              </InputLabel>
              <WhiteBorderOutlinedInput
                id='outlined-adornment-password'
                type={values.showPassword2 ? 'text' : 'password'}
                value={Pass.newPassword}
                onChange={handleChangeP}
                name='newPassword'
                required
                error={error}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      style={{ color: 'white' }}
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
              <InputLabel
                htmlFor='outlined-adornment-password'
                style={{ color: 'white' }}>
                Confirm Password
              </InputLabel>
              <WhiteBorderOutlinedInput
                id='outlined-adornment-password'
                type={values.showPassword3 ? 'text' : 'password'}
                value={Pass.confirmPassword}
                onChange={handleChangeP}
                name='confirmPassword'
                required
                error={error}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      style={{ color: 'white' }}
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
