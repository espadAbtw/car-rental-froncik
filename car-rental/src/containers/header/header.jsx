import React from "react";
import "./header.css";
import merol from "../../assets/merol.png";
function Header() {
  return (
    <div className="cr_header section_padding" id="home">
      <div className="cr_header-content">
        <h1 className="header_title">FAST AND EASY WAY TO RENT A CAR</h1>
        <p>
          Looking for unbeatable deals on a car rental? Rent a Hot Rate Car with
          Hotwire and you'll save up to 50%* on your rental car. We workt with
          top brand-name rental car to help you find the car rental for your
          trip
        </p>
      
      <div className="cr_header-vechicle_options"></div>
      <div className="cr_header-booking_component"></div>
      
      </div>
      <div className="cr_header-image">
        <img src={merol} alt="mercedes car" />
      </div>
    </div>
  );
}

export default Header;
