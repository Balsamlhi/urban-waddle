import React from 'react';
import StatsCard from '../StatsCard/StatsCard';
import DoctorsList from '../DoctorsList/DoctorsList';
import PatientsList from '../PatientsList/PatientsList';
import './Home.css';

const Home = () => {
  return (
    
    <div className="home">
      
      <div className="stats-cards">
        <StatsCard className="i1" color="#3498db" title="Doctors" value="168" />
        <StatsCard color="#2ecc71" title="Patients" value="487" />
        <StatsCard color="#e74c3c" title="Appointments" value="485" />
        <StatsCard color="#f1c40f" title="Revenue" value="$62523" />
      </div>
      <div className="lists">
        <DoctorsList />
        <PatientsList />
      </div>
    </div>
  );
};

export default Home;
