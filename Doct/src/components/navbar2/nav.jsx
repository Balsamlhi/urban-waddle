import React from 'react';
import logo from "../../assets/Doct_logo.png";
import styles from '../navbar2/nav.module.css'
/*import Log from './log';*/

const Navbaaaar = () => {
    return (
        <div className={styles.part1}>
            <div><img className={styles.logo} src={logo} /></div>
            <div className={styles.part2}>
                <div className={styles.acc}><a href="">Accueil</a></div>
                <div className={styles.help}><a href="">Help</a></div>
            <div className={styles.specialite}>
            <form method="POST"action="mailto:etudiant@yahoo.fr"> <span className={styles.spec}>Specialité</span>
                <div  className={styles.choix}>
                    <select size="1"name="ChoixNiveau">
                        <option></option>
                        <option>Spécialiste</option>
                        <option >Dentiste</option>
                        <option >Psy</option>
                    </select>
                </div>
            </form>
            </div>
            <div>
                <div className={styles.group}>
                <svg className={styles.icon} aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                <input placeholder="Search" type="search" className={styles.input}/>
                </div>
            </div>
            <div className={styles.button}>
                <button > Se Connecter</button>
            </div>
          
        </div>
            
    </div>
    );
}

export default Navbaaaar;
