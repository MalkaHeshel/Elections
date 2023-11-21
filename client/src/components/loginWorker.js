import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import isIsraeliIdValid from "israeli-id-validator";
import { Outlet } from "react-router";
// import Office from "./officeRoter";
// import Error from './electionCommissionRouter';

export default function LogInWorkers() {
  const navigate = useNavigate();

  const [workerId, setuserId] = useState("");
  const [workercode, setcode] = useState("");

  async function isWorker() {
    if (!isIsraeliIdValid(workerId)) {
      alert(" אינך תושב ישראל!!");
    } else {
      let response = await fetch(
        `http://localhost:3014/api/workers/chekId/${workerId}/${workercode}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
        }
      );

      let status = await response.json();
      if (status.isWorker) {
        if (status.data.positioname === "וועדת בחירות") {
          const person = {
            name: "וועדת בחירות",
          };
          window.localStorage.setItem("worker", JSON.stringify(person));
          navigate("/administration/currentelctions");
        } else if (status.data.positioname === "מזכירות") {
          const person = {
            name: "מזכירות",
          };
          window.localStorage.setItem("worker", JSON.stringify(person));
          navigate("/updatvorters");
        }
      } else {
          alert("אין הרשאה!!!");
           navigate("/");
      }
    }
  }
  // async function didvot() {
  //     let response = await fetch(`http://localhost:3014/api/legalvotes/${workerId}`, {
  //         method: 'GET',
  //         headers: {
  //             'Content-Type': 'application/json',
  //         },
  //         mode: 'cors',
  //     });

  //     let status = await response.json();
  //     if (!status.voted) {
  //         navigate("/home/voters/identify");
  //     }
  //     else {
  //         alert("אין הצבעה חוזרת!!")
  //     }
  // }

  return (
    <div>
      <div className="workerForm" dir="rtl"> 
        <div className="workerForm1" >
          <label htmlFor="password">מספר זהות</label>
          <br />
          <input
            type="number"
            minLength={8}
            maxLength={9}
            value={workerId}
            className="inputLogIn"
            name="id"
            onChange={(e) => {
              setuserId(e.target.value);
            }}
          />
          <br />
          <label htmlFor="password">הכנס סיסמא</label>
          <br />
          <input
            type="password"
            minLength={4}
            maxLength={4}
            value={workercode}
            className="inputLogIn"
            name="code"
            onChange={(e) => {
              setcode(e.target.value);
            }}
          />
           <button  className="btn btn-outline-primary" onClick={isWorker}>לעבוד</button>
        </div>
       
        <div>
          {" "}
         
        </div>
          </div>
          <Outlet/>
    </div>
  );
}
