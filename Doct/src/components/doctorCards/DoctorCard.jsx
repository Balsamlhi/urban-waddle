import React from 'react'
import style from '../doctorCards/DoctorCard.module.css'
import Rate from '../rate/rate';

const DoctorCard = ({ doctor }) => {
    return (
      <div className={style.doctor_card}>
        <img src={doctor.photo} alt={doctor.name} className={style.photo} />
        <h2 className={style.name}>{doctor.name}</h2>
        <p className={style.description}>{doctor.description}</p>
        <p>Rate:  <Rate value={doctor.rate} /></p>
      </div>
    );
  };
export default DoctorCard