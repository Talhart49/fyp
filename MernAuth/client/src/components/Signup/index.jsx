import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import React from 'react';

const Signup = () => {
  const [data, setData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [values, setValues] = React.useState({
    showPassword: false,
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
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <>
      <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <div className={styles.Top_content}>
            <h1 className={styles.Logo}>Templater</h1>
            <h1 className={styles.title}>Hi, Welcome Back</h1>
            <button className={styles.googleBtn}>
              <FcGoogle className={styles.googleIcon} />
              <span className={styles.googleBtn__text}>
                Sign up with Google
              </span>
            </button>
            <div className={styles.Or}>
              <span>OR</span>
            </div>
          </div>

          <div className={styles.left}>
            <p>Sign up with Email Address</p>
            <form className={styles.form_container} onSubmit={handleSubmit}>
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
                className={styles.input}
                style={{ width: '100%', marginBottom: '20px' }}
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
                className={styles.input}
                style={{ width: '100%', marginBottom: '20px' }}
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
                className={styles.input}
                style={{ width: '100%', marginBottom: '20px' }}
                error={error}
              />
              <FormControl
                variant='outlined'
                styles={{ marginBottom: '0', width: '100%' }}>
                <InputLabel htmlFor='outlined-adornment-password'>
                  Password
                </InputLabel>
                <OutlinedInput
                  id='outlined-adornment-password'
                  type={values.showPassword ? 'text' : 'password'}
                  value={data.password}
                  name='password'
                  className={styles.input}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        edge='end'>
                        {values.showPassword ? (
                          <MdVisibilityOff />
                        ) : (
                          <MdVisibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label='Password'
                  error={error}
                />
              </FormControl>
              <button className={styles.forgotPassword}>
                Forgot Password?
              </button>
              <button type='submit' className={styles.green_btn}>
                Sign In
              </button>
            </form>
            <Link to='/login' className={styles.bottom}>
              <button type='button' className={styles.white_btn}>
                Already have an account?
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* /////////////// */}
      {/* 
      <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
          <div className={styles.left}>
            <h1>Welcome Back</h1>
            <Link to='/login'>
              <button type='button' className={styles.white_btn}>
                Sign in
              </button>
            </Link>
          </div>
          <div className={styles.right}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1>Create Account</h1>
              <input
                type='text'
                placeholder='First Name'
                name='firstName'
                onChange={handleChange}
                value={data.firstName}
                required
                className={styles.input}
              />
              <input
                type='text'
                placeholder='Last Name'
                name='lastName'
                onChange={handleChange}
                value={data.lastName}
                required
                className={styles.input}
              />
              <input
                type='email'
                placeholder='Email'
                name='email'
                onChange={handleChange}
                value={data.email}
                required
                className={styles.input}
              />
              <input
                type='password'
                placeholder='Password'
                name='password'
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              {error && <div className={styles.error_msg}>{error}</div>}
              <button type='submit' className={styles.green_btn}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Signup;
