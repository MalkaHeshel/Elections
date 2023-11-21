import React, { useState, useEffect } from "react";
import {getDateResults } from "./getDateFunction";
import Showload from "../loading";
//import { Routes, Route, useNavigate } from 'react-router-dom'
export default function Results() {
    const [Showl, setShowl] = useState(false);
    const [lastdate, setlastdate] = useState(true);
    useEffect(() => {
        setShowl(true)
        getDateResults(setlastdate);
        setShowl(false)
        getResults();
    }, []);

    const [elctionResults,setElectionResults]=useState([])

    async function getResults() {
        try {
            setShowl(true)
            let result = await fetch("http://localhost:3014/api/results"); //, {mode: 'no-cors', method:'GET'}
            result = await result.json();
            setShowl(false)
            setElectionResults(result);
        } catch (error) {
            console.warn(error);
        }

    }
   
    return (
        <>
            {Showl&&(<Showload/>)}

            { !lastdate&& <div dir="rtl">
                <h1 className="badge bg-dark w-100 fs-1">תוצאות</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>סמל</th>
                            <th>משפט</th>
                            <th>מספר קולות</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elctionResults &&
                            elctionResults.map(item => (
                                <tr key={item.onNote}>
                                    <td>{item.onNote}</td>
                                    <td>{item.name}</td>
                                    <td>{item.sum}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            }
        </>
    )
    

}