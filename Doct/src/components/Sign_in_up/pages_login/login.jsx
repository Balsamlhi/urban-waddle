import React from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import inscri from '../../../assets/inscription.png'

const Login = () => {
  return (
    <>
    <div>
      <img className={styles.inscri} src={inscri} />
    </div>
    <form className={styles.form}>
      
      <h3>Sign In</h3>

      <div className={styles.mb}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className={styles.control}
          id="email"
          placeholder="Enter email"
          required
        />
      </div>

      <div className={styles.mb}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className={styles.control}
          id="password"
          placeholder="Enter password"
          required
        />
      </div>

      <div className={styles.mb}>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>


      
      <br/>
      <div className="d-grid">
        <Link to={'/sign'}>
        <button  className="btn btn-primary">
          SignUp
        </button>
      </Link>
      </div>


      <br />
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className={styles.forgot}>
        Forgot <a href="#">password?</a>
      </p>
      
    </form>
    </>
  );
};

export default Login;
