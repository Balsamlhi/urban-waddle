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
          <h4>Service client</h4>
          <a href="#" className={styles.links}>accueil</a>
          <a href="#" className={styles.links}>Spécialité</a>
          <a href="#" className={styles.links}>Qui somme nous </a>
       
        </div>
        <div className={styles.part3}>
            <h4>CONTACTEZ NOUS</h4>
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
        <ul className={styles.socialIcons}>
             <li><a className={styles.facebook} href="#">
              <TiSocialFacebook />
             </a></li>
            <li><a className={styles.twitter} href="#">
              <TiSocialTwitter />
            </a></li>
            <li><a className={styles.instagram} href="#">
             </a></li>
            <li><a className={styles.linkedin} href="#">
         <TiSocialInstagram />
                <TiSocialLinkedin />
             </a></li>
        </ul>

        </div>
      
            
            

      </div>
    </footer>
    // <footer className={styles.siteFooter}>
    //   <div className={styles.container}>
    //     <div className={styles.row1}>
    //       <div className={styles.part1}>
    //         <img className={styles.logo} src={logo} alt="logo" />
    //         <p className={styles.textJustify}>PRENEZ VOS RENDEZ-VOUS MÉDICAUX EN LIGNE FACILEMENT, RAPIDEMENT ET GRATUITEMENT</p>
    //         <h3><i className={styles.faMapMarkerAlt}></i> Tunis</h3>
    //       </div>
    //     <div className={styles.row2}>
    //         <h6>Service client</h6>
    //         <ul className={styles.footerLinks}>
    //           <li><a href="#">accueil</a></li>
    //           <li><a href="#">Spécialité</a></li>
    //           <li><a href="#">Qui somme nous </a></li>
    //         </ul>
    //       </div>

    //     <div className={styles.row3}>
    //         <h6>CONTACTEZ NOUS</h6>
    //         <ul className={styles.footerLinks}>
    //           <br />
    //           <li><a href="#">doct@gmail.com</a></li>
    //         </ul>
    //       </div>
    //     </div>
    //     <hr className={styles.small} />
    //   </div>
    //   <div className={styles.container}>
    //     <div className={styles.row4}>
    //       <div className={styles.part}>
    //         <p className={styles.copyrightText}>Copyright © 2024 All Rights Reserved by
    //           <a href="#">Code4Education</a>.
    //         </p>
    //       </div>

    //       <div className={styles.lesicones}>
    //         <ul className={styles.socialIcons}>
    //           <li><a className={styles.facebook} href="#">
    //             <TiSocialFacebook />
    //             </a></li>
    //           <li><a className={styles.twitter} href="#">
    //             <TiSocialTwitter />
    //             </a></li>
    //           <li><a className={styles.instagram} href="#">
    //             <TiSocialInstagram />
    //             </a></li>
    //           <li><a className={styles.linkedin} href="#">
    //             <TiSocialLinkedin />
    //             </a></li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
}

export default Footer;
