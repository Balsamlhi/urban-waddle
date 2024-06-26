import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from "../src/App.module.css";
import Navbaaaar from './components/navbar2/nav';
import Home from './components/Home/Home';
import Login from './components/Sign_in_up/pages_login/login';
import SignUp from './components/Sign_in_up/pages_login/sign';
import Rdv from './components/rdv/rdv';
import InscriptionForm from '../src/components/InscriptionForm/InscriptionForm';
import Admin from './components/testttt/admin';

function App() {
  return (
   <>
   <Router>
      <>
                        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" className={styles.login} element={<Login /> } />
          <Route path="/sign" className={styles.sign} element={<SignUp />} />
          <Route path="/rdv/:id" className={styles.rdv} element={<Rdv />} />
          <Route path="/inscrimed" className={styles.inscrimed} element={<InscriptionForm />} />
          <Route path="/admin" className={styles.admin} element={<Admin />} />
        </Routes>
      </>
    </Router>
    
   </>
  );
}

export default App;
