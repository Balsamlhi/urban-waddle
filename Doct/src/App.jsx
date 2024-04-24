import styles from "./App.module.css";
import Navbar from "./components/navbar2/nav";
import React, { useState, useEffect } from 'react';

import Map from "./components/map/Map";
import Footer from "./components/Footer/Footer";
import Content from "./components/content/content";
import DoctorCard from "./components/doctorCards/DoctorCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbaaaar from "./components/navbar2/nav";
import LeafletGeoCoder from "./components/map/LeafletGeoCoder";
import LeafletRoutingMachine from "./components/map/LeafletRoutingMachine";

// import Sign_in_up from "./components/Sign_in_up/Sign_in_up";



function App() {
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
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  
  return (
    <>
      <div className={styles.nav}>
      <Navbaaaar/>
      </div>                 
      <div className={styles.map}>
        <Map />
        {/* <LeafletRoutingMachine />
        <LeafletGeoCoder /> */}
      </div>
      <div className={styles.Content}>
      {/* <Slider {...settings}> */}
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        {/* </Slider> */}
        {/* <Content /> */}
      </div>
      <div className={styles.footer}>
      <Footer/>
      </div>
      {/* <Log/> */}
      {/* <Sign_in_up /> */}
    </>
  )
}
export default App
