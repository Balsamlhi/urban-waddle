import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sign.module.css';
import inscri from '../../../assets/inscription.png';

const SignUp = () => {
  return (
    <>
    
    <div>
      <img className={styles.inscri} src={inscri} />
    </div>
    <form className={styles.form}>
      <h3>Sign Up</h3>
      
      <Link to={'/inscrimed'} >
      <span className={styles.mb2}>
      Êtes-vous un médecin ?
      </span>
      </Link>
      
      

      <div className={styles.mb}>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          className={styles.control}
          id="firstName"
          placeholder="First name"
        />
      </div>

      <div className={styles.mb}>
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          className={styles.control}
          id="lastName"
          placeholder="Last name"
        />
      </div>

      <div className={styles.mb}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className={styles.control}
          id="email"
          placeholder="Enter email"
        />
      </div>

      <div className={styles.mb}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className={styles.control}
          id="password"
          placeholder="Enter password"
        />
      </div>
      <div className="d-grid">
        <button type="submit" className={styles.btn}>
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <Link to={'/login'}>sign in?</Link>
      </p>
    </form>
    </>
  );
};

export default SignUp;
