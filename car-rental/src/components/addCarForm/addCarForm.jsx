import React, { useState, useContext } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";
import { collection, addDoc } from "firebase/firestore";
import Select from "@mui/material/Select";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";

function AddCarForm() {
  const { currentUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [passengerCapacity, setPassengerCapacity] = useState("");
  const [transmissionType, setTransmissionType] = useState("");
  const [fuelConsumption, setFuelConsumption] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const addVehicle = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "vehicles"), {
        name: name,
        passengerCapacity: passengerCapacity,
        transmissionType: transmissionType,
        fuelConsumption: fuelConsumption,
        vehicleType: vehicleType,
        userEmail: currentUser.email,
        fuelType: fuelType,
        phoneNumber: phoneNumber,
        pricePerDay: pricePerDay
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding vehicle: ", e);
    }
  };

  //   function handleSubmit(event) {
  //     event.preventDefault();

  //     db.collection("cars").add({
  //       name,
  //       passengerCapacity,
  //       transmissionType,
  //       fuelConsumption,
  //       carType,
  //       userEmail,
  //     });

  //     setName("");
  //     setPassengerCapacity("");
  //     setTransmissionType("");
  //     setFuelConsumption("");
  //     setCarType("");
  //     setUserEmail(currentUser.userEmail);
  //   }

  return (
    <div className="addCarForm">
      <div className="addCar-title">
        <h2>Add car</h2>
      </div>
      <form onSubmit={addVehicle}>
        <br />
        <TextField
          id="outlined-name"
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          fullWidth
        ></TextField>
        <InputLabel id="demo-simple-select-label">
          Ammount of passagers
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={passengerCapacity}
          label="Ammount of passagers"
          onChange={(event) => setPassengerCapacity(event.target.value)}
          required
          fullWidth
        >
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
        </Select>
        <InputLabel id="demo-simple-select-label">GearBox</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="GearBox"
          value={transmissionType}
          onChange={(event) => setTransmissionType(event.target.value)}
          required
          fullWidth
        >
          <MenuItem value={"Manual"}>Manual</MenuItem>
          <MenuItem value={"Automatic"}>Automatic</MenuItem>
        </Select>
        <br></br>
        <TextField
          id="outlined-name"
          label="Fuel Consumption per 1 Litre"
          type="number"
          value={fuelConsumption}
          onChange={(event) => setFuelConsumption(event.target.value)}
          required
          margin="dense"
          fullWidth
        ></TextField>
        <InputLabel id="vehicleTypeSelect">Vehicle Type</InputLabel>
        <Select
          labelId="vehicleTypeSelect"
          id="vehicleTypeSelect"
          label="VehicleType"
          value={vehicleType}
          onChange={(event) => setVehicleType(event.target.value)}
          required
          fullWidth
        >
          <MenuItem value={"Car"}>Car</MenuItem>
          <MenuItem value={"Motorcycle"}>Motorcycle</MenuItem>
          <MenuItem value={"Delivery"}>Delivery</MenuItem>
          <MenuItem value={"Agricultural"}>Agricultural</MenuItem>
        </Select>
        <InputLabel id="vehicleTypeSelect">Fuel Type</InputLabel>
        <Select
          labelId="fuelTypeSelect"
          id="fuelTypeSelect"
          label="fuelType"
          value={fuelType}
          onChange={(event) => setFuelType(event.target.value)}
          required
          fullWidth
        >
          <MenuItem value={"LPG"}>LPG</MenuItem>
          <MenuItem value={"ON"}>ON</MenuItem>
          <MenuItem value={"PB"}>PB</MenuItem>
          <MenuItem value={"Electrical"}>Electrical</MenuItem>
        </Select>
        <br />
        <TextField
          id="outlined-name"
          label="Price per Day"
          margin="dense"
          type="number"
          value={pricePerDay}
          onChange={(event) => setPricePerDay(event.target.value)}
          required
          fullWidth
        ></TextField>
        <TextField
          id="outlined-name"
          label="Phone Number"
          margin="dense"
          type="number"
          placeholder="+48 123 123 123"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          required
          fullWidth
        ></TextField>
        <div className="addCarButton">
          <Button
            variant="contained"
            type="submit"
            endIcon={<i className="fa-solid fa-paper-plane"></i>}
            color="secondary"
          >
            Add car
          </Button>
        </div>
      </form>
    </div>
  );
}
export default AddCarForm;
