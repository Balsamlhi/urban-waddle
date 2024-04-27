import styles from "../Home/Home.module.css";
import React, { useState, useEffect } from 'react';
import Map from "../map/Map";
import DoctorCard from "../doctorCards/DoctorCard";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function Home() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Charger les données des médecins depuis le fichier JSON
    fetch('http://localhost:5173/src/doctors.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setDoctors(data))
      .catch(error => console.error('Erreur lors du chargement des données des médecins:', error));
  }, []);

  return (
    <>
      <div className={styles.map}>
        <Map />
      </div>
      <div className={styles.Content}>
        {doctors.map((doctor, index) => (
          <Link key={index} to={`/rdv/${doctor.id}`}> {/* Inclure l'ID du médecin dans l'URL */}
            <DoctorCard doctor={doctor} />
          </Link>
        ))}
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}

export default Home;
