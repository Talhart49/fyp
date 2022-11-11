import axios from 'axios';
import './index.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <div className='main-container'>
      <div className='profile-container'>
        <div className='profile-header'>
          <h1>Profile</h1>
        </div>
        <div className='profile-body'>
          <div className='profile-body-left'>
            <div className='profile-body-left-header'>
              <h2>Personal Information</h2>
            </div>
            <div className='profile-avatar'>
              <img src='https://i.imgur.com/8Km9tLL.png' alt='avatar' />
            </div>
            <div className='profile-body-left-body'>
              <div className='profile-body-left-body-row'>
                <div className='profile-body-left-body-row-left'>
                  <h3>First Name</h3>
                </div>

                <div className='profile-body-left-body-row-right'>
                  <h3>{data.firstName}</h3>
                </div>
              </div>
              <div className='profile-body-left-body-row'>
                <div className='profile-body-left-body-row-left'>
                  <h3>Last Name</h3>
                </div>
                <div className='profile-body-left-body-row-right'>
                  <h3>{data.lastName}</h3>
                </div>
              </div>
              <div className='profile-body-left-body-row'>
                <div className='profile-body-left-body-row-left'>
                  <h3>Email</h3>
                </div>
                <div className='profile-body-left-body-row-right'>
                  <h3>{data.email}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='profile-body-right'>
            <div className='profile-body-right-header'>
              <h2>Change Password</h2>
            </div>
            <div className='profile-body-right-body'>
              <div className='profile-body-right-body-row'>
                <div className='profile-body-right-body-row-left'>
                  <h3>Old Password</h3>
                </div>
                <div className='profile-body-right-body-row-right'>
                  <input type='password' />
                </div>
              </div>
              <div className='profile-body-right-body-row'>
                <div className='profile-body-right-body-row-left'>
                  <h3>New Password</h3>
                </div>
                <div className='profile-body-right-body-row-right'>
                  <input type='password' />
                </div>
              </div>
              <div className='profile-body-right-body-row'>
                <div className='profile-body-right-body-row-left'>
                  <h3>Confirm Password</h3>
                </div>
                <div className='profile-body-right-body-row-right'>
                  <input type='password' />
                </div>
              </div>
              <div className='profile-body-right-body-row'>
                <div className='profile-body-right-body-row-left'>
                  <button>Change Password</button>
                </div>
              </div>
            </div>
          </div>
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
