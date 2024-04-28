import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  container: {
    margin: '20px auto', // Centre le contenu horizontalement
    backgroundColor: '#E3F2FD', // Couleur de fond bleu clair
    padding: '20px', // Ajoute un espace intérieur
    borderRadius: '8px', // Ajoute des coins arrondis
    maxWidth: '800px', // Limite la largeur du conteneur
  },
  table: {
    minWidth: 650,
    marginBottom: '20px', // Ajoute un espacement entre les deux tableaux
  },
  actionCell: {
    width: '100px',
  },
};

const AppointmentsPage = () => {
  // Sample data for appointments, consultations, and waiting list
  const [appointments, setAppointments] = useState([
    { id: 1, date: '2024-04-19', time: '09:00', diseaseType: 'Fever' },
    { id: 2, date: '2024-04-20', time: '10:30', diseaseType: 'Cough' },
  ]);

  const [consultations, setConsultations] = useState([
    { id: 1, date: '2024-04-19', time: '11:00', reason: 'Follow-up' },
    { id: 2, date: '2024-04-20', time: '12:15', reason: 'Pain' },
  ]);

  const [waitingList, setWaitingList] = useState([
    { id: 3, date: '2024-04-21', time: '08:30', type: 'Rendez-vous' },
    { id: 4, date: '2024-04-22', time: '13:45', type: 'Consultation' },
  ]);

  const handleDeleteAppointment = (id) => {
    const appointmentToDelete = appointments.find(appt => appt.id === id);
    setAppointments(appointments.filter(appt => appt.id !== id));
    if (appointmentToDelete) {
      setWaitingList([...waitingList, { ...appointmentToDelete, type: 'Rendez-vous' }]);
    }
  };

  const handleDeleteConsultation = (id) => {
    const consultationToDelete = consultations.find(consult => consult.id === id);
    setConsultations(consultations.filter(consult => consult.id !== id));
    if (consultationToDelete) {
      setWaitingList([...waitingList, { ...consultationToDelete, type: 'Consultation' }]);
    }
  };

  const handleDeleteFromWaitingList = (id) => {
    setWaitingList(waitingList.filter(item => item.id !== id));
  };

  return (
    <div style={styles.container}>
      <div>
        <h2 style={{ color: 'black' }}>Rendez-vous</h2>
        <TableContainer component={Paper}>
          <Table style={styles.table} aria-label="Tableau des rendez-vous">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Heure</TableCell>
                <TableCell>Type de maladie</TableCell>
                <TableCell style={styles.actionCell}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map(appointment => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.id}</TableCell>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.diseaseType}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDeleteAppointment(appointment.id)}
                    >
                      Supprimer
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <h2 style={{ color: 'black' }}>Consultations</h2>
        <TableContainer component={Paper}>
          <Table style={styles.table} aria-label="Tableau des consultations">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Heure</TableCell>
                <TableCell>Raison</TableCell>
                <TableCell style={styles.actionCell}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {consultations.map(consultation => (
                <TableRow key={consultation.id}>
                  <TableCell>{consultation.id}</TableCell>
                  <TableCell>{consultation.date}</TableCell>
                  <TableCell>{consultation.time}</TableCell>
                  <TableCell>{consultation.reason}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDeleteConsultation(consultation.id)}
                    >
                      Supprimer
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <h2 style={{ color: 'black' }}>Liste d'attente</h2>
        <TableContainer component={Paper}>
          <Table style={styles.table} aria-label="Tableau de la liste d'attente">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Heure</TableCell>
                <TableCell>Type</TableCell>
                <TableCell style={styles.actionCell}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {waitingList.map(item => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDeleteFromWaitingList(item.id)}
                    >
                      Supprimer
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AppointmentsPage;

