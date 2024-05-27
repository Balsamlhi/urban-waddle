import React from 'react';
import { FaStethoscope, FaUserMd, FaUsers, FaStar, FaCashRegister, FaFileAlt, FaUser } from 'react-icons/fa';
import './Sidebar.css';
import Logo from "../../../assets/Doct_logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={Logo}  className="logo" />
        <h2>DOCT</h2>
      </div>
      <input type="text" className="search-box" placeholder="Search here" />
      <ul>
        <li><a href="#dashboard"><FaStethoscope /> Dashboard</a></li>
        <li><a href="#appointments"><FaUserMd /> Appointments</a></li>
        <li><a href="#specialities"><FaUsers /> Specialities</a></li>
        <li><a href="#doctors"><FaUserMd /> Doctors</a></li>
        <li><a href="#patients"><FaUsers /> Patients</a></li>
        <li><a href="#reviews"><FaStar /> Reviews</a></li>
        <li><a href="#transactions"><FaCashRegister /> Transactions</a></li>
        <li><a href="#reports"><FaFileAlt /> Reports</a></li>
        <li><a href="#profile"><FaUser /> Profile</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
