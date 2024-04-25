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
  // Sample data for appointments and consultations
  const [appointments, setAppointments] = useState([
    { id: 1, date: '2024-04-19', diseaseType: 'Fever', description: 'Patient has a fever' },
    { id: 2, date: '2024-04-20', diseaseType: 'Cough', description: 'Patient has a persistent cough' },
  ]);

  const [consultations, setConsultations] = useState([
    { id: 1, date: '2024-04-19', reason: 'Follow-up', description: 'Routine check-up' },
    { id: 2, date: '2024-04-20', reason: 'Pain', description: 'Patient complains of abdominal pain' },
  ]);

  const handleDeleteAppointment = (id) => {
    setAppointments(appointments.filter(appt => appt.id !== id));
  };

  const handleDeleteConsultation = (id) => {
    setConsultations(consultations.filter(consult => consult.id !== id));
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
                <TableCell>Type de maladie</TableCell>
                <TableCell>Description</TableCell>
                <TableCell style={styles.actionCell}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map(appointment => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.id}</TableCell>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.diseaseType}</TableCell>
                  <TableCell>{appointment.description}</TableCell>
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
                <TableCell>Raison</TableCell>
                <TableCell>Description</TableCell>
                <TableCell style={styles.actionCell}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {consultations.map(consultation => (
                <TableRow key={consultation.id}>
                  <TableCell>{consultation.id}</TableCell>
                  <TableCell>{consultation.date}</TableCell>
                  <TableCell>{consultation.reason}</TableCell>
                  <TableCell>{consultation.description}</TableCell>
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
    </div>
  );
};

export default AppointmentsPage;
