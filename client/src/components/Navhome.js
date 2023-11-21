import React from "react";
import { NavLink } from "react-router-dom";
//import Employee from "./employees";

export default function NavHome(props) {
  return (
    <nav className="navbar navbar-expand-lg justify-content-around">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            exact="true"
            to="/login"
          >
            להצבעה
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            exact="true"
            to="/administration/competingparties"
          >
           בחירות קודמות
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            exact="true"
            to="/administration/statics"
          >
            סטטיסטיקות
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            exact="true"
            to="/updatvorters"
          >
            לעובדים
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
}
