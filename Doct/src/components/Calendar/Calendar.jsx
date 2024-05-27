import React, { useState } from "react";
import doctors from "../../doctors.json";
import styles from './Calendar.module.css';

const Calendar = ({ doctorId }) => {
  const doctor = doctors.find((doctor) => doctor.id === doctorId);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [showModal, setShowModal] = useState(false);

  if (!doctor) {
    return <div>Aucun médecin trouvé avec l'ID {doctorId}</div>;
  }

  const handleAppointmentSelect = (time, isAvailable) => {
    console.log(`Rendez-vous sélectionné à ${time}`);
    if (isAvailable) {
      setSelectedTimeSlot(time);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleReturnToCalendar = () => {
    setSelectedTimeSlot(null);
    setShowModal(false);
  };

  return (
    <div className={styles.calendar}>
      {doctor.availableTimes.map((appointment) => (
        <div
          key={appointment.time}
          className={`${styles.day} ${appointment.isAvailable ? styles.available : styles.unavailable}`}
          onClick={() => handleAppointmentSelect(appointment.time, appointment.isAvailable)}
        >
          <h2>{appointment.time}</h2>
          {!appointment.isAvailable && <p>Indisponible</p>}
        </div>
      ))}
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={handleCloseModal}>&times;</span>
            <h2>Créneau horaire sélectionné :</h2>
            <p className="ha">{selectedTimeSlot}</p>
            <button className={styles.but1} onClick={() => console.log('Rendez-vous pris pour :', selectedTimeSlot)}>Prendre rendez-vous</button>
            <button className={styles.but2} onClick={handleReturnToCalendar}>Retour au calendrier</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
