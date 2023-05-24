import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { Link, useNavigate } from 'react-router-dom';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import './index.css';
import axios from 'axios';

const OTP = () => {
  const [Email, setEmail] = useState('');
  const [OTP, setOTP] = useState('');
  const [error, setError] = useState('');

  const [result, setResult] = useState(false);

  const [Pass, setPass] = React.useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [values, setValues] = React.useState({
    showPassword1: false,
    showPassword2: false,
    showPassword3: false,
  });

  const navigate = useNavigate();

  const handleChangeP = ({ currentTarget: input }) => {
    setPass({ ...Pass, [input.name]: input.value });
  };

  const changePassword = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:8080/api/users/resetPassword/${Email}`;
      const { data: res } = await axios.post(url, Pass);
      navigate('/login');
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

  const handleChange = async (e) => {
    setEmail(e.target.value);
  };
  const handleChangeotp = async (e) => {
    setOTP(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:8080/api/users/email-send/${Email}`;
      const { data: res } = await axios.post(url, Email);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error.response.data);
      }
    }
  };

  const handleSubmitOTP = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:8080/api/users/match-otp/${OTP}/${Email}`;
      await axios.post(url);
      setResult(true);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error.response.data);
      }
    }
  };
  return (
    <div className='main_containerOTP'>
      <div className='main'>
        {!result ? (
          <div
            className='form_container-dis'
            style={{
              padding: '3rem',
            }}>
            <h1 className='title-top'>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
              <h1 className='title'>Enter Email</h1>
              <TextField
                id='outlined-basic'
                label='Email'
                variant='outlined'
                type='email'
                placeholder='Email'
                name='email'
                onChange={handleChange}
                value={Email}
                required
                className=''
                style={{ width: '100%', marginBottom: '20px' }}
              />
              <button className='green_btn'>Send</button>
            </form>

            <form onSubmit={handleSubmitOTP}>
              <h1 className='title'>Enter OTP</h1>
              <TextField
                id='outlined-basic'
                label='otp'
                variant='outlined'
                type='number'
                placeholder='OTP'
                name='otp'
                onChange={handleChangeotp}
                value={OTP}
                required
                className=''
                style={{ width: '100%', marginBottom: '20px' }}
              />
              <button className='green_btn'>Verify</button>
            </form>
          </div>
        ) : (
          <div className='form_container-dis'>
            <h2 className='title'>
              <b>Change Password</b>
            </h2>
            <form className='form' onSubmit={changePassword}>
              <FormControl
                sx={{ m: 1, width: '100%', marginBottom: '20px' }}
                variant='outlined'>
                <InputLabel htmlFor='outlined-adornment-password'>
                  Password
                </InputLabel>
                <OutlinedInput
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
                sx={{ m: 1, width: '100%', marginBottom: '20px' }}
                variant='outlined'>
                <InputLabel htmlFor='outlined-adornment-password'>
                  Confirm Password
                </InputLabel>
                <OutlinedInput
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
                className='green_btn'
                style={{ width: '100%', marginBottom: '20px' }}>
                Reset Password
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default OTP;
