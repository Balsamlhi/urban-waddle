import React from 'react';
import './DoctorsList.css';

const DoctorsList = () => {
  return (
    <div className="doctors-list">
      <h2>Doctors List</h2>
      <table>
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Speciality</th>
            <th>Earned</th>
            <th>Reviews</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dr. Ruby Perrin</td>
            <td>Dental</td>
            <td>$3200.00</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsList;
