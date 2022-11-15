import React, { useState, Fragment } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Outlet, Link } from "react-router-dom";
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
      <a href="#popular">Rental Deals</a>
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
    <Fragment>
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
          <Link to="/car-rental-froncik/register">Register</Link>
          <Link to="/car-rental-froncik/login">
            <button>Log In</button>
          </Link>
        </div>
        <div className="cr_navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#8a78f0"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#8a78f0"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <div className="cr_navbar-menu_container scale-up-center">
              <div className="cr_navbar-menu_container-links">
                <Menu />
                <div className="cr_navbar-menu_container-links-sign">
                  <Link to="/register">Register</Link>
                  <Link to="/login">
                    <button>Log In</button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navbar;
