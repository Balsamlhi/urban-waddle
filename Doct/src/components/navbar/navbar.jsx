import React from "react";
import styles from "../navbar/navbar.module.css";
import logo from "../../assets/Doct_logo.png";
import Sign_in_up from "../Sign_in_up/Sign_in_up";

function Navbar() {
  return (
    <>
      <nav>
        <div className={styles.left}>
          <img className={styles.logo} src={logo} alt="" />
        </div>

        <div className={styles.center}>
        <a href="" className={styles.acceuil}>
          Accueil
        </a>
        <a href="" className={styles.rmed}>
          Rechercher medecin
        </a>

        </div>
        <div className={styles.right}>
        <button className={styles.seconnecter} to={'/Login'}>Se connecter</button>
        </div>
      </nav>
      <Route path="/Login" element={<Sign_in_up />} />
    </>

  );
}
export default Navbar;
