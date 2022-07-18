import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="navContainer">
        <span className="logo">Booking Pk</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
