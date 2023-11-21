import NavBar from "./navBar"
import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Employee from "./employees";
import Statics from "./statics";
import Competingparties from "./Competingparties"
import Error from "../error";
import Results from "./results";
import Currentelctions from "./currentelctions";
export default function ElectionCommission() {
    const [AccessRights, setAccessRights] = useState(false);
//     useEffect(() => {
//         AccessRightsfunc();
//     },[])
// function AccessRightsfunc() {
//         const user = window.localStorage.getItem("worker");
       
//         if (user.name == "וועדת בחירות" )
//         setAccessRights(true);
  

    
// }
    return (
        <div>
            <NavBar ></NavBar>
            <div className='content'>
              

                <Routes>
                <Route activeClassName='active' exact='true' element={<Error />} path="/*" />
                    <Route activeClassName='active' exact='true' element={<Employee />} path="/employees" />
                    <Route activeClassName='active' exact='true' element={<Competingparties />} path="/competingparties" />
                    <Route activeClassName='active' exact='true' element={<Results />} path="/results" />
                    <Route activeClassName='active' exact='true' element={<Currentelctions />} path="/currentelctions" />
                    <Route activeClassName='active' exact='true' element={<Statics />} path="/statics" />
                    
                </Routes>
            </div>

        </div>
    )
}