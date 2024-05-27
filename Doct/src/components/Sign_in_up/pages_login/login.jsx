import React from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import inscri from '../../../assets/inscription.png'
import Navbaaaar from '../../navbar2/nav';

const Login = () => {
  return (
    <>
    <Navbaaaar />
    <div>
      <img className={styles.inscri} src={inscri} />
    </div>
    <form className={styles.form}>
      
      <h3>Se Connecter</h3>

      <div className={styles.mb}>
        <label htmlFor="email">Adresse Email</label>
        <input
          type="email"
          className={styles.control}
          id="email"
          placeholder="Enter email"
          required
        />
      </div>

      <div className={styles.mb}>
        <label htmlFor="password">Mot De Passe</label>
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
            Se souvenir de moi
          </label>
        </div>
      </div>


      
      <br/>
      <div className="d-grid">
        <Link to={'/sign'}>
        <button  className="btn btn-primary">
          S'inscrire
        </button>
      </Link>
      </div>


      <br />
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Soumettre
        </button>
      </div>
      <p className={styles.forgot}>
         <a href="#">Mot De Passe </a>Oublier
      </p>
      
    </form>
    </>
  );
};

export default Login;
