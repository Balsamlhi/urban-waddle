import React from "react";
import styles from "../footer/Footer.module.css";
import logo from "../../assets/Doct_logo.png";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.top}>
        <div className={styles.part1}>
        <img className={styles.logo} src={logo} alt="logo" />
          <p className={styles.textJustify}>PRENEZ VOS RENDEZ-VOUS MÉDICAUX EN LIGNE FACILEMENT, RAPIDEMENT ET GRATUITEMENT</p>
        </div>
        <div className={styles.part2}>
          <h4 className={styles.tt}>Service client</h4>
          <a href="#" className={styles.links}>accueil</a>
          <a href="#" className={styles.links}>Spécialité</a>
          <a href="#" className={styles.links}>Qui somme nous </a>
       
        </div>
        <div className={styles.part3}>
            <h4 className={styles.tt}>CONTACTEZ NOUS</h4>
            <a href="#" className={styles.mail}>DoctServiceDeSante@gmail.com</a>
        </div>
      </div>
      <hr />
      <div className={styles.bottom}>
        <div className={styles.b1}>
        <p className={styles.copyrightText}>Copyright © 2024 All Rights Reserved by
            <a href="#">Code4Education</a>.
        </p>
        </div>
        <div className={styles.b2}>
        <div className={styles.socialIcons}>
             <a className={styles.facebook} href="#">
              <TiSocialFacebook />
             </a>
            <a className={styles.twitter} href="#">
              <TiSocialTwitter />
            </a>
            <a className={styles.instagram} href="#">
            <TiSocialInstagram />
             </a>
            <a className={styles.linkedin} href="#">
                <TiSocialLinkedin />
             </a>
             </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
