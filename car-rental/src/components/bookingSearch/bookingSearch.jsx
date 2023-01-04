import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "./bookingSearch.css";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { Alert } from "@mui/material";
function BookingSearch() {
  const [open2, setOpen2] = useState(false);
  const navigate = useNavigate();
  const [city, setCity] = useState("Kraków");
  const [vehicleType, setVehicleType] = useState("Car");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const searchHandler = () => {
    if(startDate <= endDate) {
      navigate("/car-rental-froncik/booking", {
        state: {
          city: city,
          vehicleType: vehicleType,
          startDate: startDate,
          endDate: endDate,
        },
      });
    } else {
      setOpen2(true)
    }
    
  };

  return (
    <div className="booking-container">
      <div className="booking-options"></div>
      <div className="booking-part">
        <label htmlFor="searchbar">Choose City</label>

        <select
          id="searchbar"
          name="city_searchbar"
          placeholder="Enter your city"
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="Kraków">Kraków</option> 
          <option value="Warszawa">Warszawa</option>
          <option value="Częstochowa">Częstochowa</option>
          <option value="Poznań">Poznań</option>
          <option value="Wrocław">Wrocław</option>
        </select>
      </div>
      <div className="booking-part">
        <label htmlFor="searchbarcars">Choose vehicle</label>
        <select
          id="searchbarcars"
          name="cars_searchbar"
          onChange={(e) => setVehicleType(e.target.value)}
        >
          <option value="Car">Car</option>
          <option value="Motorcycle">Motorcycle</option>
          <option value="Delivery">Delivery</option>
          <option value="Agricultural">Agricultural</option>
        </select>
      </div>
      <div className="booking-part">
        <label htmlFor="pick-up-date">Pick-up Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="booking-part2">
        <label htmlFor="return-date2">Return Date</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
        />
      </div>
      <div className="booking-part3">
      <button className="button" type="submit" onClick={searchHandler}>
        <i className="fa-solid fa-magnifying-glass"></i> Search
      </button>
      <div className="formAlertSearch"> <Collapse in={open2}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen2(false);
                  }}
                >
                  <i className="fa-solid fa-xmark"></i>
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Invalid date!
            </Alert>
          </Collapse></div>
      </div>
     
    </div>
  );
}

export default BookingSearch;
