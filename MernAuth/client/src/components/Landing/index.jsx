import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const index = () => {
  return (
    <Link to='/login'>
      <button type='button' className={styles.white_btn}>
        Sign in
      </button>
    </Link>
  );
};

export default index;
