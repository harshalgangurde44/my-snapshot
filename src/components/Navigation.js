import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Navigation = () => {
  return (
    <nav className="main-nav">
      <center>
        <NavLink exact to="/mountain">
          Mountain
        </NavLink>
        <NavLink to="/beach">Beaches</NavLink>
        <NavLink to="/bird">Birds</NavLink>
        <NavLink to="/food">Food</NavLink>
      </center>
    </nav>
  );
};

export default Navigation;
