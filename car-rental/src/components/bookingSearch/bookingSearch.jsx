import React from "react";
import "./bookingSearch.css";

function BookingSearch() {
  return (
    <form className="booking-container">
      <div className="booking-part">
      <label for="searchbar">Enter your city</label>
        <input 
        type="search" 
        id="searchbar" 
        name="city_searchbar"
        placeholder="Enter your city"></input>
      </div>
      <div className="booking-part">
      <label for="pick-up-date">Pick up date</label>
       
      </div>
      <div className="booking-part">
      <label for="return-date">Pick out date</label>
        
      </div>
    </form>
  );
}

export default BookingSearch;
