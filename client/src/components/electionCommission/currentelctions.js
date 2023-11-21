import React, { useState, useEffect } from "react";
import { getDateResults } from "./getDateFunction";
import Showload from "../loading";
//import { Routes, Route, useNavigate } from 'react-router-dom'

export default function Competingparties() {
    const [lastdate,setlastdate]=useState(true);
    const [data, setdata] = useState([]);
    const [newelectio, setnewelection] = useState(false);
    const [date, setdate] = useState(null);
    const [starttime, setstarttime] = useState(null);
    const [endtime, setendtime] = useState(null);
    const [numberKnesset, setnumberKnesset] = useState(null)
    const [Showl, setShowl] = useState(false);

    useEffect(() => {
      setShowl(true)
        getDateResults(setlastdate);
        setShowl(false)
        getdata();
    }, []);


    async function getdata() {
        try {
          setShowl(true)
            let result = await fetch("http://localhost:3014/api/data"); //, {mode: 'no-cors', method:'GET'}
            result = await result.json();
            setShowl(false)
            setdata(result);
        } catch (error) {
            console.warn(error);
        }

    }

    async function addekectio() {
        debugger;
        const newDate = date.split("-");
        console.log(newDate);
        const a = {
            date: date,//.toString().slice(0, 10).split('/').reverse().join('-')
            startTime: starttime,
            endTime: endtime,
            numberKnesset: numberKnesset
        }
        try {
          setShowl(true)
            let result = await fetch("http://localhost:3014/api/data",
                {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(a),
                    mode: 'cors',
                }); //, {mode: 'no-cors', method:'GET'}
            result = await result.json();
            setShowl(false)
            setdata(result);
        } catch (error) {
            console.warn(error);
        }

    }
    return (
      <>
      {Showl&&(<Showload/>)}
        <div dir="rtl">
          <h1 className="badge bg-dark w-100 fs-1">נתוני בחירות</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>תאריך</th>
                <th>שעת התחלה</th>
                <th>שעת סיום</th>
                <th>מס' הכנסת</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => (
                  <tr key={item.electionDataCurrentElection}>
                    <td>{item.date}</td>
                    <td>{item.electionDataStartTime}</td>
                    <td>{item.electionDataEndTime}</td>
                    <td>{item.electionDataCurrentElection}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div dir="rtl">
          <button
            className="btn btn-outline-success m-3"
            onClick={() => {
              setnewelection(true);
            }}
            
          disabled={!lastdate}
          >
            לבחירות נוספות
          </button>
          {newelectio && (
            <form>
              <label htmlFor="position">תאריך:</label>
              <input
                className="form-control m-4"
                type="date"
                id="position"
                name="fname"
                onChange={(event) => setdate(event.target.value)}
              />
              <label htmlFor="position">שעת התחלה:</label>
              <input
                className="form-control m-4"
                type="time"
                id="position"
                name="fname"
                onChange={(event) => setstarttime(event.target.value)}
              />
              <label htmlFor="position">שעת סיום:</label>
              <input
                className="form-control m-4"
                type="time"
                id="position"
                name="fname"
                onChange={(event) => setendtime(event.target.value)}
              />
              <label htmlFor="position"> מס' כנסת:</label>
              <input
                className="form-control m-4"
                type="number"
                id="position"
                name="fname"
                onChange={(event) => setnumberKnesset(event.target.value)}
              />
              <button
                className="btn btn-outline-success m-3"
                onClick={addekectio}
              >
                {" "}
                להוספה
              </button>
            </form>
          )}
        </div>
      </>
    );

}