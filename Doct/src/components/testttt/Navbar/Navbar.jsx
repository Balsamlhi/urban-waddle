import React from 'react';
import './Navbar.css';
import logo from "../../../assets/avatar.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">Welcome Admin</div>
      <div className="navbar-links">
        <a href="#profile"><img src={logo} alt="Profile" className="profile-pic" /> Adam Wathan</a>
      </div>
    </div>
  );
};

export default Navbar;
