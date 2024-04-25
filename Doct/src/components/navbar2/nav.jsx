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
                        <option value="156">Laboratoire de cytogénétique</option>
                <option value="173">Maladies Cardiovasculaire</option>
                <option value="47">Maladies Infectieuses</option>
                <option value="59">Médecin Biologiste</option>
                <option value="162">Médecin de famille</option>
                <option value="168">Médecin du sommeil</option>
                <option value="118">Médecin du sport</option>
                <option value="48">Médecin du Travail</option>
                <option value="96">Médecin Esthétique</option>
                <option value="157">Médecin Hémodialyseur</option>
                <option value="123">Médecin homéopathe</option>
                <option value="52">Médecin Légiste</option>
                <option value="53">Médecin Nucléaire</option>
                <option value="55">Médecin Physique Réadaptateur</option>
                <option value="124">Médecin urgentiste</option>
                <option value="125">Médecine douce et alternative</option>
                <option value="126">Médecine morphologique et anti-âge</option>
                <option value="57">Médecine Préventive</option>
                <option value="146">Médecine tropicale</option>
                <option value="9">Microbiologiste</option>
                <option value="61">Néonatologiste</option>
                <option value="18">Neurochirurgien</option>
                <option value="171">Neuropédiatre</option>
                <option value="169">Neurophysiologiste</option>
                <option value="127">Neuropsychiatre</option>
                <option value="167">Neuropsychologue</option>
                <option value="159">Nutrithérapeute</option>
                <option value="164">Oncologue</option>
                <option value="145">Oncologue-Chimiothérapeute</option>
                <option value="85">Oncologue-Radiothérapeute</option>
                <option value="128">Opticien</option>
                <option value="67">Orthodontiste</option>
                <option value="100">Orthophoniste</option>
                <option value="175">Orthoprothésiste</option>
                <option value="104">Orthoptiste</option>
                <option value="115">Ostéopathe</option>
                <option value="71">Parasitologiste</option>
                <option value="119">Parodontiste implantologiste</option>
                <option value="74">Pédodontiste</option>
                <option value="73">Pédopsychiatre</option>
                <option value="166">Perineologue</option>
                <option value="136">Pharmacien</option>
                <option value="97">Pharmacien Biologiste</option>
                <option value="129">Pharmacologue</option>
                <option value="108">Phlébologue</option>
                <option value="76">Physiologiste</option>
                <option value="99">Physiothérapeute</option>
                <option value="134">Phytothérapeute</option>
                <option value="107">Podologue</option>
                <option value="138">Posturologue</option>
                <option value="109">Proctologue</option>
                <option value="165">Prothésiste Capillaire</option>
                <option value="103">Prothésiste dentaire</option>
                <option value="113">Psychanalyste</option>
                <option value="79">Psychologue</option>
                <option value="170">Psychologue clinicien</option>
                <option value="112">Psychomotricien</option>
                <option value="84">Radiothérapeute</option>
                <option value="86">Réanimateur Médical</option>
                <option value="135">Réflexologue</option>
                <option value="180">Rythmologue interventionnel</option>
                <option value="130">Sage femme</option>
                <option value="131">Santé publique et médecine sociale</option>
                <option value="147">Sénologue</option>
                <option value="90">Stomatologue</option>
                <option value="181">Thérapeute manuel</option>
                <option value="148">Urodynamique</option>
                <option value="163">Vétérinaire</option>

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