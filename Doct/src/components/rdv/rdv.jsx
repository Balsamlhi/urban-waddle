import React from 'react';
import { useParams } from 'react-router-dom';
import doctors from '../../doctors.json';
import styles from './rdv.module.css';

function Rdv() {
  const { id } = useParams(); // Récupérer l'ID du médecin depuis l'URL
  console.log('ID du médecin:', id);

  const doctor = doctors.find(doc => doc.id === parseInt(id)); // Filtrer les données du médecin en fonction de l'ID
  console.log('Médecins:', doctors);

  if (!doctor) {
    return <div>Le médecin avec l'ID {id} n'existe pas.</div>;
  }

  return (
    <div className={styles.container}>
      <div key={doctor.id} className={styles.doctor}>
        <div className={styles.doctorInfo}>
          <div className={styles.doctorImage}>
            <img src={doctor.photo} alt={doctor.name} className={styles.image} />
          </div>
          <div className={styles.details}>
            <h2 className={styles.name}>{doctor.name}</h2>
            <p className={styles.specialty}>{doctor.specialty}</p>
            <p className={styles.address}>{doctor.address}</p>
            <a href="/appointment" className={styles.appointmentLink}>Prendre un rendez-vous</a>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.descriptionText}>{doctor.description}</div>
        </div>
      </div>
    </div>
  );
}

export default Rdv;
