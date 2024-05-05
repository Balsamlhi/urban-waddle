import React from 'react';
import logo from "../../assets/Doct_logo.png";
import styles from '../navbar2/nav.module.css';
import { Link } from 'react-router-dom';
/*import Log from './log';*/

const Navbaaaar = () => {
    return (
        <div className={styles.part1}>
            <div><img className={styles.logo} src={logo} /></div>
            <div className={styles.part2}>
                <div className={styles.acc}><Link to={'/'}>Accueil</Link></div>
                <div className={styles.help}><a href="">Aide</a></div>
            <div className={styles.specialite}>
            <form method="POST"action=""> <span className={styles.spec}>Specialité</span>
                <div  className={styles.choix}>
                    <select size="1"name="ChoixNiveau" className={styles.choix1}>
                        <option></option>
                        <option value="1">Médecine générale (Médecin généraliste)</option>
                        <option value="2">Médecine interne</option>
                        <option value="3">Pédiatrie</option>
                        <option value="4">Gynécologie-obstétrique</option>
                        <option value="5">Chirurgie générale</option>
                        <option value="6">Dermatologie</option>
                        <option value="7">Ophtalmologie</option>
                        <option value="8">Oto-rhino-laryngologie (ORL)</option>
                        <option value="9">Neurologie</option>
                        <option value="10">Cardiologie</option>
                        <option value="11">Orthopédie</option>
                        <option value="12">Psychiatrie</option>
                        <option value="13">Radiologie</option>
                        <option value="14">Anesthésiologie</option>
                        <option value="15">Urologie</option>
                        <option value="16">Pédiatrie</option>
                        <option value="17">Médecine du travail</option>
                        <option value="18">Médecine du sport</option>
                        <option value="19">Médecine légale</option>
                        <option value="20">Médecine d'urgence</option>
                        <option value="21">Rhumatologie</option>
                        <option value="22">Oncologie</option>
                        <option value="23">Endocrinologie</option>
                        <option value="24">Néphrologie</option>
                        <option value="25">Allergologie</option>
                        <option value="26">Immunologie</option>
                        <option value="27">Infectiologie</option>
                        <option value="28">Médecine physique et réadaptation</option>
                        <option value="29">Médecine nucléaire</option>
                        <option value="30">Médecine tropicale</option>
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
            <Link to={'/login'}>
                <button>Se Connecter</button>
            </Link>
            </div>
        </div>
    </div>
    );
}

export default Navbaaaar;