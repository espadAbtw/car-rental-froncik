import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "..//../assets/logo.png";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#howWork">How it Work</a>
    </p>
    <p>
      <a href="#home">Rental Deals</a>
    </p>
    <p>
      <a href="#whyUs">Why Us</a>
    </p>
    <p>
      <a href="#home">Booking</a>
    </p>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="cr_navbar">
      <div className="cr_navbar-links">
        <div className="cr_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="cr_navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="cr_navbar-sign">
        <p>Register</p>
        <button type="button">Log In</button>
      </div>
      <div className="cr_navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="cr_navbar-menu_container scale-up-center">
            <div className="cr_navbar-menu_container-links">
              <Menu />
              <div className="cr_navbar-menu_container-links-sign">
                <p>Register</p>
                <button type="button">Log In</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
