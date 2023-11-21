import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import Showload from "../loading";
export default function Identify() {

    const navigate = useNavigate();
    const location = useLocation();
    const [Showl, setShowl] = useState(false);

    const [ques, setQues] = useState([]);
    useEffect(() => {
        getquesLength()
    }, []);

    async function getquesLength() {
        let questions;

        try {
            setShowl(true)
            let response = await fetch(`http://localhost:3014/api/questions`, {
                method: 'GET', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
            });
            questions = await response.json(); // JSON.parse
            setShowl(false)
            setQues(questions);
        }
        catch (err) {
            console.log(err)
        }

    }

    async function sendquesIdentify(answers) {
        let a = {
            "iduser": location.state.id,
            "answers": answers,
        }
        try {
            setShowl(true)
            console.log(location.state.id)
            let response = await fetch(`http://localhost:3014/api/questions/answer`, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(a),
                mode: 'cors',
            });
            response = await response.json();
            console.log(response);
            setShowl(false)
            if (response.isequel === true) {
                navigate('/voters/vote', { state: { id: location.state.id } });
            }
            else {
                alert("תהליך הזיהוי נכשל")
                navigate('/');
            }
        }
        catch (err) {
            console.log(err)
        }
    }



    const tocomperanswer = (event) => {
        event.preventDefault();
        let item = [];
        const item0 = {
            idQuestion: event.target.Question0.id,
            ans: event.target.Question0.value
        }
        item.push({
            item0
        })


        const item1 = {
            idQuestion: event.target.Question1.id,
            ans: event.target.Question1.value
        }
        item.push({
            item1
        })


        const item2 = {
            idQuestion: event.target.Question2.id,
            ans: event.target.Question2.value
        }
        item.push({
            item2
        })



        sendquesIdentify(item);



    }
    return (

        <>



            {Showl && (<Showload />)}
            <div>

                {ques && <form className="formidentify" onSubmit={(event) => tocomperanswer(event)}>
                    {ques.map((item, index) =>
                    (
                        <div>
                            <h1>{item.Question}</h1>

                            <br />

                            <input key={index} name={"Question" + index} type="text" id={item.idQuestions} className="form-control m-4" />

                        </div>
                    )
                    )
                    } <button className="btn btn-outline-success m-3" >לזיהוי</button></form>
                }

            </div>
        </>
    );
}