import React from 'react';
import './PatientsList.css';

const PatientsList = () => {
  return (
    <div className="patients-list">
      <h2>Patients List</h2>
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Phone</th>
            <th>Last Visit</th>
            <th>Paid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlene Reed</td>
            <td>8286329170</td>
            <td>20 Oct 2019</td>
            <td>$100.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PatientsList;
