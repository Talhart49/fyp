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

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:8080/api/auth';
      const { data: res } = await axios.post(url, data);
      localStorage.setItem('token', res.data);
      localStorage.setItem('email', data.email);

      if (
        data.email === 'ranatalhaa02@gmail.com' &&
        data.password === 'Admin@123'
      ) {
        console.log('Block', res.block);
        navigate('/Admin_Dashboard/AdminMainContent');
      } else {
        navigate('/dashboard/MainContent');
      }
    } catch (error) {
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
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.Top_content}>
          <h1 className={styles.Logo}>Templater</h1>
          <h1 className={styles.title}>Hi, Welcome Back</h1>
        </div>

        <div className={styles.left}>
          <p>Sign in with Email Address</p>
          <form className={styles.form_container} onSubmit={handleSubmit}>
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
            <Link to='/OTP' className={styles.forgotPassword}>
              Forgot Password?
            </Link>
            <button type='submit' className={styles.green_btn}>
              Sign In
            </button>
          </form>
          <Link to='/signup' className={styles.bottom}>
            <button type='button' className={styles.white_btn}>
              Don't have an account?
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
