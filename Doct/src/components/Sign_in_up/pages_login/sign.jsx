import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './sign.module.css';
import inscri from '../../../assets/inscription.png';
import axios from 'axios';
import Navbaaaar from '../../navbar2/nav';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    
    // Create an object to hold user data
    const userData = {
      nom: firstName,
      prenom: lastName,
      mail: email,
      password: password
    };

    try {
      // Make an HTTP POST request to your backend endpoint
      const response = await axios.post('http://localhost:8082/api/patients', userData);
      console.log(response.data); // Log success message
    } catch (error) {
      console.error('Error signing up:', error); // Log error message
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <>
    <Navbaaaar />
      <div>
        <img className={styles.inscri} src={inscri} alt="inscription" />
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>S'inscrire</h3>
        <Link to={'/inscrimed'}>
          <span className={styles.mb2}>Êtes-vous un médecin ?</span>
        </Link>

        <div className={styles.mb}>
          <label htmlFor="firstName">Nom</label>
          <input
            type="text"
            className={styles.control}
            id="firstName"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className={styles.mb}>
          <label htmlFor="lastName">Prenom</label>
          <input
            type="text"
            className={styles.control}
            id="lastName"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className={styles.mb}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className={styles.control}
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.mb}>
          <label htmlFor="password">Mot De Passe</label>
          <input
            type="password"
            className={styles.control}
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <div className="d-grid">
          <button type="submit" className={styles.btn}>
            S'inscrire
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}

        <p className="forgot-password text-right">
          Vous avez deja un compte? <Link to={'/login'}>Se Connecter?</Link>
        </p>
      </form>
    </>
  );
};

export default SignUp;