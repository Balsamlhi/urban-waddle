import React from 'react';
import Navbar from "../testttt/Navbar/Navbar";
import Sidebar from "../testttt/Sidebar/Sidebar";
import Home from "../testttt/Home.jsx/Home"


const Admin = () => {
    return (
        <div className="app">
      <Navbar /> 
      <div >
      <Sidebar className="side" />
      </div>
      <Home />
    </div>
    );
}

export default Admin;
