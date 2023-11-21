import React, { useState, useEffect } from "react";
import Showload from "../loading";
//import { Routes, Route, useNavigate } from 'react-router-dom'
export default function Employee() {

  useEffect(() => {
    getWorkers();
    getPosition()
  }, []);

  const [addedId, setAddedId] = useState(null)
  const [chosenPsition, setChosenPsition] = useState(null)
  const [addedName, setAddedName] = useState(null)
  const [addedPosition, setAddedPosition] = useState(null)
  const [addedCode, setAddedCode] = useState(null)
  const [positions, setPositions] = useState(null)
  const [employee, setEmplooyee] = useState(null);
  const [addPosition, setAddPosition] = useState(null);
  const [addEmployee, setAddEmployee] = useState(null);
  const [Showl, setShowl] = useState(false);

  async function getWorkers() {
    try {
      setShowl(true)
      let result = await fetch("http://localhost:3014/api/administration/employees"); //, {mode: 'no-cors', method:'GET'}
      result = await result.json();
      setShowl(false)
      setEmplooyee(result);
    } catch (error) {
      console.warn(error);
    }

  }
  async function getPosition() {
    console.log("קצפךםט")
    try {
      setShowl(true)
      let result = await fetch("http://localhost:3014/api/administration/employees/positions"); //, {mode: 'no-cors', method:'GET'}
      result = await result.json();
      setShowl(false)
      setPositions(result);
    } catch (error) {
      console.warn(error);
    }

  }

  async function sendAddPosition() {
    setShowl(true)
    let a = {
      "positioname": addedPosition,
      "code": addedCode
    }
    const result = await fetch("http://localhost:3014/api/administration/employees/position", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(a),
      mode: 'cors',
    });
    setShowl(false)
  }

  async function sendAddWorker() {
    setShowl(true)
    let a = {
      "idworker": addedId,
      "position": chosenPsition,
      "name": addedName
    }
    const result = await fetch("http://localhost:3014/api/administration/employees/addemployee", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(a),
      mode: 'cors',
    });
    setShowl(false)
  }

  function a(e) {
    debugger
    let s = e.target.value
    console.log(s);
    setChosenPsition(s)
  }

  const handleChange = event => {
    debugger
    console.log(event.target.value);
    setChosenPsition(event.target.value);
  };
  return (
    <>
    {Showl&&(<Showload/>)}
      <div dir="rtl">
        <h1 className="badge bg-dark w-100 fs-1">עובדים</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>שם</th>
              <th>תפקיד</th>
            </tr>
          </thead>
          <tbody>
            {employee &&
              employee.map(item => (
                <tr key={item.id}>
                  <td>{item.idworker}</td>
                  <td>{item.name}</td>
                  <td>{item.positioname}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>



      <div dir="rtl" className="employees-buttons">
        <div dir="rtl">
          <button className="btn btn-outline-success m-3" onClick={() => { setAddPosition(true) }}>הוסף תפקיד</button>
          { }
          {addPosition && <form>
            <label >תפקיד</label>
            <input className="form-control m-4" type="text" id="position" name="fname" onChange={(event) => setAddedPosition(event.target.value)} />
            <label >:סיסמה</label>
            <input className="form-control m-4" type="text" id="code" name="fname" onChange={(event) => setAddedCode(event.target.value)} />
            <button className="btn btn-outline-success m-3" onClick={sendAddPosition}>הוסף</button>
          </form>}
        </div>


        <div dir="rtl">
          <button className="btn btn-outline-success m-3" onClick={() => { setAddEmployee(true) }}>הוסף עובד</button>
          {addEmployee && <form>
            <label >שם</label>
            <input className="form-control m-4" type="text" id="position" name="fname" onChange={(event) => setAddedName(event.target.value)} />
            <label >בחר תפקיד</label>
            <select name="positions" id="positions"  onChange={handleChange}>

              {positions && positions.map(item => (
                <option value={item.positioname} key={item.numberfoposition} onChange={(e) => a(e)}>{item.positioname} </option>
                //<input type="text" id={item.idQuestions} onKeyPress={(event) => handleKeyPress(event)} />

              ))}</select>
            <br></br>
            <label >ת.ז.</label>
            <input className="form-control m-4" type="text" id="id" name="fname" onChange={(event) => setAddedId(event.target.value)} />
            <button className="btn btn-outline-success m-3" onClick={sendAddWorker} >הוסף</button>


           
          </form>}
        </div>
      </div>

    </>
  );

}