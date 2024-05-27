import styles from "../Home/Home.module.css";
import React, { useState, useEffect } from 'react';
import Map from "../map/Map";
import DoctorCard from "../doctorCards/DoctorCard";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import doctorsData from '../../doctors.json'; // Import the doctors data from the JSON file
import Navbaaaar from "../navbar2/nav";

function Home() {
  // Use the doctors data imported from the JSON file
  const [doctors, setDoctors] = useState(doctorsData);

  return (
    <>
    <Navbaaaar />
      <div className={styles.map}>
        <Map />
      </div>
      <div className={styles.Content}>
        {doctors.map((doctor, index) => (
           <Link key={index} to={`/rdv/${doctor.id}`}>
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
