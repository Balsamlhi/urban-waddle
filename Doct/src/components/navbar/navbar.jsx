import React from "react";
import styles from "../navbar/navbar.module.css";
import logo from "../../assets/Doct_logo.png"

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
        <button className={styles.seconnecter}>Se connecter</button>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
