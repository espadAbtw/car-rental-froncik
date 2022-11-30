import React from "react";
import "./booking.css";
import { Navbar } from "../../components";
import BookingSearch from "../../components/bookingSearch/bookingSearch";
import PopularFeature from "../../components/popularfeature/popularfeature";
import { stockCars } from "../../data";

function Booking() {
  return (
    <div>
      <Navbar />
      <div className="cr_booking__header">
        <div className="cr_booking__header-searchbar">
          <BookingSearch></BookingSearch>
        </div>
        
      </div>
      <div className="cr_booking_body">
          <div className="cr_booking_body_carlist">
          <div className="cr_booking_body_carlist_row">
          {stockCars.map((data) => (
          <PopularFeature data={data} key={data.id}/>
        ))}
          </div>
          <div className="cr_booking_body_carlist_row">
          {stockCars.map((data) => (
          <PopularFeature data={data} key={data.id}/>
        ))}
          </div>
          <div className="cr_booking_body_carlist_row">
          {stockCars.map((data) => (
          <PopularFeature data={data} key={data.id}/>
        ))}
          </div>
          
          </div>
        </div>
    </div>
  );
}

export default Booking;
