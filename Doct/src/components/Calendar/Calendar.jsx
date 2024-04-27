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
    // Logique de sélection de rendez-vous ici
    console.log(`Rendez-vous sélectionné à ${time}`);
    if (isAvailable) {
      setSelectedTimeSlot(time);
      setShowModal(true); // Afficher la boîte modale lorsque le créneau horaire est sélectionné
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Fermer la boîte modale
  };

  const handleReturnToCalendar = () => {
    setSelectedTimeSlot(null); // Réinitialiser le créneau horaire sélectionné
    setShowModal(false); // Fermer la boîte modale
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
            <p>{selectedTimeSlot}</p>
            <button onClick={() => console.log('Rendez-vous pris pour :', selectedTimeSlot)}>Prendre rendez-vous</button>
            <button onClick={handleReturnToCalendar}>Retour au calendrier</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
