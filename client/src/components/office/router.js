//import { Routes, Route, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { getDatenow } from "../electionCommission/getDateFunction";
import Wokerspace from "./workspace";
// import Error from './electionCommissionRouter';

export default function Office() {
  useEffect(() => {
    AccessRightsfunc();
  }, [])
  const [AccessRights, setAccessRights] = useState(false);
  const [datenow, setdatenow] = useState(false);
  function AccessRightsfunc() {
    const user = window.localStorage.getItem("worker");
    getDatenow(datenow);
    if (user.name === "מזכירות" && datenow)
      setAccessRights(true);

  }
  return (
    <div>
      <div className={AccessRights ? "active" : "noActive"}>
        <Wokerspace valid={!AccessRights} />
      </div>
      {!AccessRights && (
        <h3 style={{ marginTop: "20%", marginLeft: "40%" }}>

          אין הרשאת גישה!!!!!
        </h3>
      )}
    </div>
  );
}