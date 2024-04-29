import React, { useState } from "react";
import doctors from "../../doctors.json";
import styles from './Calendar.module.css';

const Calendar = ({ doctorId }) => {
  const doctor = doctors.find((doctor) => doctor.id === doctorId);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
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

  const handleNextDay = () => {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(selectedDate.getDate() + 1);
    setSelectedDate(nextDay);
  };

  const handlePreviousDay = () => {
    const previousDay = new Date(selectedDate);
    previousDay.setDate(selectedDate.getDate() - 1);
    if (previousDay >= new Date()) {
      setSelectedDate(previousDay);
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button onClick={handlePreviousDay}>&lt;</button>
        <div>{formatDate(selectedDate)}</div>
        <button onClick={handleNextDay}>&gt;</button>
      </div>
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
