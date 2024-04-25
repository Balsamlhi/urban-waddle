import React from 'react';
import doctors from './doctor.json';
import styles from './rdv.module.css';

function Rdv() {
  return (
    <div className={styles.container}>
      {doctors.map((doctor, index) => (
        <div key={index} className={styles.doctor}>
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
            <p className={styles.descriptionText}>{doctor.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rdv;
