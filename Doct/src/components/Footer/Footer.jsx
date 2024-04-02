import React from 'react';
import styles from '../Footer/Footer.module.css';
//import logo from '../../assets/logo.png';

function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.col} ${styles.colSm12} ${styles.colMd6}`}>
            <img className={styles.logo}  alt="logo" />
            <p className={styles.textJustify}>PRENEZ VOS RENDEZ-VOUS MÉDICAUX EN LIGNE FACILEMENT, RAPIDEMENT ET GRATUITEMENT</p>
            <h3><i className={styles.faMapMarkerAlt}></i> Tunis</h3>
          </div>

          <div className={`${styles.col} ${styles.col6} ${styles.colMd3}`}>
            <h6>Service client</h6>
            <ul className={styles.footerLinks}>
              <li><a href="#">accueil</a></li>
              <li><a href="#">Spécialité</a></li>
              <li><a href="#">Qui somme nous </a></li>
            </ul>
          </div>

          <div className={`${styles.col} ${styles.col6} ${styles.colMd3}`}>
            <h6>CONTACTEZ NOUS</h6>
            <ul className={styles.footerLinks}>
              <br />
              <li><a href="#">doct@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <hr className={styles.small} />
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.col} ${styles.colMd8} ${styles.colSm6} ${styles.col12}`}>
            <p className={styles.copyrightText}>Copyright © 2024 All Rights Reserved by
              <a href="#">Code4Education</a>.
            </p>
          </div>

          <div className={`${styles.col} ${styles.colMd4} ${styles.colSm6} ${styles.col12}`}>
            <ul className={styles.socialIcons}>
              <li><a className={styles.facebook} href="#"><i className={styles.fabFacebookF}></i></a></li>
              <li><a className={styles.twitter} href="#"><i className={styles.fabTwitter}></i></a></li>
              <li><a className={styles.dribbble} href="#"><i className={styles.fabDribbble}></i></a></li>
              <li><a className={styles.linkedin} href="#"><i className={styles.fabLinkedinIn}></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
