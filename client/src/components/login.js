import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import isIsraeliIdValid from "israeli-id-validator";
import {getDatenow} from "./electionCommission/getDateFunction"
import { Outlet } from "react-router";
import Showload from "./loading";

export default function LogIn() {
  useEffect(() => {
    setShowl(true)
    getDatenow(setnowDate);
    setShowl(false)
  }, []);

  const navigate = useNavigate();
  const [nowDate, setnowDate] = useState(false);
  const [voted, setvoted] = useState(false);
  const [workerselction, setworkerselction] = useState(false);
  const [Showl, setShowl] = useState(false);
  const [userId, setuserId] = useState("");
  console.log(workerselction);

  async function toSubmit(event) {
    console.log(userId);
    if (!isIsraeliIdValid(userId)) {
      alert(" אינך תושב ישראל!!");
    } else {
      event.preventDefault();
      try {
        console.log("inside try");
        setShowl(true)
        let response = await fetch(
          `http://localhost:3014/api/legalvotes/${userId}`,
          {
            method: "GET", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },

            mode: "cors",
          }
        );

        let status = await response.json();
        console.log(status);
        setworkerselction(status.isWorker);
        setShowl(false)
        setvoted(status.voted);
        if (status.entitledToVote && !status.voted) {
          window.localStorage.setItem("identify", "true");
          navigate("/voters/identify", { state: { id: userId } });
        }
        if (!status.entitledToVote) {
          alert("אינך רשאי להצביע!!!");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <>
    {Showl&&(<Showload/>)}
    {/* {!nowDate && <div className="cover"></div>} */}
      <div >
        <form onSubmit={(e) => toSubmit(e)}>
          <div className="loginForm">

            <label className="lableLogIn" htmlFor="password">
              .הכנס מספר ת.ז
            </label>
            <br />
            <div className="logInButtons" >
              <button class="btn btn-outline-primary">היכנס</button>
              <input
                className="tova"
                minLength={8}
                maxLength={9}
                value={userId}
                name="id"
                onChange={(e) => {
                  setuserId(e.target.value);
                }}
              /></div>
          </div>
        </form>
      </div>

      {voted && (
        <div>
          {" "}
          <p>!!!!אין הצבעה חוזרת</p>
        </div>
      )}
      <h4 dir="rtl">נוהל הבחירות של מדינת ישראל מחייב אותך</h4>
      <Outlet />
    </>
  );
}
