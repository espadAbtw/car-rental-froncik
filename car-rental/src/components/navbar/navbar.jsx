import React from "react";
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri';
import "./navbar.css";
import logo from '..//../assets/logo.png'
function navbar() {

  return (
    <div className="cr_navbar">
      <div className="cr_navbar-links">
        <div className="cr_navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="cr_navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#home">How it Work</a></p>
          <p><a href="#home">Rental Deals</a></p>
          <p><a href="#home">Why Choose Us</a></p>
          <p><a href="#home">Booking</a></p>
        </div>
      </div>
    </div>
  );
}

export default navbar;
