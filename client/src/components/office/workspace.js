//import { Routes, Route, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import isIsraeliIdValid from 'israeli-id-validator';
import { PropTypes } from 'victory-core';
import Showload from "../loading";
// import Office from "./officeRoter";
// import Error from './electionCommissionRouter';

export default function Wokerspace(props) {

    const time = new Date();
    //const nowclock = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

    const [userId, setuserId] = useState('');
    const [Showl, setShowl] = useState(false);

    async function didvot() {
        if (!isIsraeliIdValid(userId)) {
            alert(" אינו תושב ישראל!!")
        }
        setShowl(true)
        let response = await fetch(`http://localhost:3014/api/legalvotes/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
        });
        
        let status = await response.json();
        if (status.entitledToVote) {
            if (!status.voted) {
                await updatevot();
            }
            else {
                setShowl(false)
                alert("אין הצבעה חוזרת!!")
            }
        }
        else
            alert("אינו רשאי להצביע!!")
    }
    async function updatevot() {
        
        let response = await fetch(`http://localhost:3014/api/legalvotes/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },

            mode: 'cors',
        });
        
        let status = await response.json();
        if (status.voted) {
            setShowl(false)
            alert("ההצבעה נרשמה במערכת")
        }

    }


    return (
      <>
      {Showl&&(<Showload/>)}
        <div disabled={props.valid}>
          <label htmlFor="password">הכנס מםפר ת.ז של המצביע</label>
          <br />
          <input
            disabled={props.valid}
            minLength={8}
            maxLength={9}
            value={userId}
            className="btn"
            name="id"
            onChange={(e) => {
              setuserId(e.target.value);
            }}
          />
          <button onClick={didvot}>הצבעה</button>
        </div>
      </>
    );


}