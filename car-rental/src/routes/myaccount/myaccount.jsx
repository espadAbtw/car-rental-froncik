import React, { useContext } from "react";
import AddCarForm from "../../components/addCarForm/addCarForm";
import GetCars from "../../components/getCars/getCars";
import { UserContext } from "../../contexts/user.context";
import "./myaccount.css";

function Myaccount() {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="cr__myAcc-container">
      <div className="cr__myAcc-container-title">
        <h1>Your profile</h1>
        <p>Name : {currentUser.displayName}</p>
        <p>Email : {currentUser.email} </p>
      </div>
      <div className="cr_myAcc-data-container">
        <div className="cr_myAcc-addCarForm">
          <AddCarForm></AddCarForm>
        </div>
        <div className="cr_myAcc-getCars">
          <GetCars></GetCars>
        </div>
      </div>
      {/* { currentUser.email !== null && currentUser.email !== undefined ? (<div>profil uzytkownika {currentUser.email}</div>)  : (<div>No access</div>)} */}
    </div>
  );
}

export default Myaccount;
