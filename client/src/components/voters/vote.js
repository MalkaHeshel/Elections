import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Showload from "../loading";
export default function Vote(props) {

    const navigate = useNavigate();
    const location = useLocation();
    const [choice, setChoice] = useState();
    const [data, setData] = useState([]);
    const [Showl, setShowl] = useState(false);
    useEffect(() => {
        partyMenu()
    }, []);


    async function partyMenu() {
        try {
            setShowl(true)
            let response = await fetch(`http://localhost:3014/api/parties`, {
                method: 'GET', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
            });
            response = await response.json();
            setShowl(false) // JSON.parse
            setData(response)
        }
        catch (err) {
            console.log(err)
        }

    }

    async function updateParty() {
        try {
            setShowl(true)
            let response = await fetch(`http://localhost:3014/api/parties/${choice}`, {
                method: 'PUT', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
            });

        }

        catch (err) {
            console.log(err)
        }
        await updateVoter();
    }

    async function updateVoter() {
        try {
            let response = await fetch(`http://localhost:3014/api/legalvotes/${location.state.id}`, {
                method: 'PUT', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
            });
            if (response) {
                setShowl(false)
                alert("הצבעה בוצעה בהצלחה!!!");
                navigate('/home');
            }

        }
        catch (err) {
            console.log(err)
        }

    }

    return (


        <>
        {Showl&&(<Showload/>)}

            <div className="parties" dir="rtl">


                {data.map(
                    item =>
                        <div className="party" key={item.id}>

                            <h1>{item.onNote}</h1><br />
                            <label htmlFor={item.id}>{item.name}</label><br />
                            <input id={item.id} type='radio' className="radioI" name="choice" onInput={() => setChoice(item.primeryKeyParties)} />

                        </div>)}
            </div>
            <button type="submit" className="vote" form="nameform" value="Submit" onClick={updateParty} >!להצביע</button>
        </>
    )
}