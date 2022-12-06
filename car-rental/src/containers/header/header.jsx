import React from "react";
import "./header.css";
import merol from "../../assets/merol.png";
import Button from "../../components/button/button";
import BookingSearch from "../../components/bookingSearch/bookingSearch";
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
      
      <div className="cr_header-vechicle_options">
        <Button 
          type="submit"
          text="Cars"
          icon="fa-solid fa-car-side"
        />
        <Button 
          type="submit"
          text="Motorcycle"
          icon="fa-solid fa-motorcycle"
        />
        <Button 
          type="submit"
          text="Delivery"
          icon="fa-solid fa-truck"
        />
        <Button 
          type="submit"
          text="Agricultural"
          icon="fa-solid fa-tractor"
        />
        <Button 
          type="submit"
          text="Structural"
          icon="fa-solid fa-snowplow"
        />
      </div>
      <div className="cr_header-booking_component"></div>
        <BookingSearch/>
      </div>
      <div className="cr_header-wrap">
        <div className="cr_header-wrap-glass"></div>
        <img src={merol} alt="mercedes car" />
      </div>
    </div>
  );
}

export default Header;