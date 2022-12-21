import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "./bookingSearch.css";
import "react-datepicker/dist/react-datepicker.css"

function BookingSearch() {


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
  return (

    <form className="booking-container">
      <div className="booking-options">
      
      </div>
      <div className="booking-part">
      <label htmlFor="searchbar">Where to Pick Up</label>
        <input 
        type="search" 
        id="searchbar" 
        name="city_searchbar"
        placeholder="Enter your city"></input>
      </div>
      <div className="booking-part">
      <label htmlFor="pick-up-date">Pick-up Date</label>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
      <div className="booking-part">
      <label htmlFor="return-date">Return Date</label>
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>
      <button className="button"type="submit"><i className="fa-solid fa-magnifying-glass"></i> Search</button>
    </form>
    
  );
}

export default BookingSearch;


