import React from "react";
import { NavLink } from "react-router-dom";
//import Employee from "./employees";

export default function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg justify-content-around">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            exact="true"
            to="/administration/employees"
          >
            ניהול עובדים
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            exact="true"
            to="/administration/competingparties"
          >
            ניהול רשימות
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
            to="/administration/currentelctions"
          >
            {" "}
            מערכת בחירות {" "}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            exact="true"
            to="/administration/results"
          >
            {" "}
            תוצאות{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
