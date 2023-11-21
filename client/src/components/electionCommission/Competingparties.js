import React, { useState, useEffect } from "react";
import { getDateSets } from "./getDateFunction";
import Showload from "../loading";
//import { Routes, Route, useNavigate } from 'react-router-dom'
export default function Competingparties() {



    const [buttonAbility, setButtonAbility] = useState(true);
    const [parties, setparties] = useState(null);
    const [addparty, setaddparty] = useState(null);
    const [deleteparty, setdeleteparty] = useState(null);
    const [symbol, setsymbol] = useState("");
    const [description, setdescription] = useState("");
    const [Showl, setShowl] = useState(false);
    useEffect(() => {
        setShowl(true)
        getDateSets(setButtonAbility);
        setShowl(false)
        getWorkers();
    }, []);
    async function getWorkers() {
        try {
            setShowl(true)
            let result = await fetch("http://localhost:3014/api/parties"); //, {mode: 'no-cors', method:'GET'}
            result = await result.json();
            setShowl(false)
            setparties(result);
        } catch (error) {
            console.warn(error);
        }

    }

    async function addParty() {
        let a = {
            "sym": symbol,
            "des": description
        }
        setShowl(true)
        const result = await fetch("http://localhost:3014/api/parties/", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(a),
            mode: 'cors',
        });
        setShowl(false)
    }

    async function deleteParty() {
        let a = {
            "sym": symbol,
        }
        setShowl(true)
        const result = await fetch("http://localhost:3014/api/parties/", {
            method: 'delete', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(a),
            mode: 'cors',
        });
        setShowl(false)
    }

    return (
        <>
        {Showl&&(<Showload/>)}
            <div dir="rtl">
                <h1 className="badge bg-dark w-100 fs-1">מפלגות</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>סמל</th>
                            <th>תאור</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parties &&
                            parties.map(item => (
                                <tr key={item.id}>
                                    <td>{item.onNote}</td>
                                    <td>{item.name}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <div dir="rtl" className="employeeBtn">
                <div dir="rtl">
                    <button className="btn btn-outline-success m-3" onClick={() => { setaddparty(true) }} disabled={!buttonAbility}>להוספה</button>
                    {addparty && <form>
                        <label htmlFor="position">סמל:</label>
                        <input className="form-control m-4" type="text" id="position" name="fname" onChange={(event) => setsymbol(event.target.value)} />
                        <label htmlFor="code">תאור:</label>
                        <input className="form-control m-4" type="text" id="code" name="fname" onChange={(event) => setdescription(event.target.value)} />
                        <button className="btn btn-outline-success m-3" onClick={addParty}>הוסף</button>
                    </form>}
                </div>
                <div dir="rtl">
                    <button className="btn btn-outline-success m-3" onClick={() => { setdeleteparty(true) }} disabled={!buttonAbility}>למחיקה</button>
                    {deleteparty && <form>
                        <label htmlFor="position">סמל:</label>
                        <input className="form-control m-4" type="text" id="position" name="fname" onChange={(event) => setsymbol(event.target.value)} />

                        <button className="btn btn-outline-success m-3" onClick={deleteParty}>למחוק</button>
                    </form>}
                </div >
            </div >

        </>
    );

}