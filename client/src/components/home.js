import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getDatenow } from "./electionCommission/getDateFunction";
import Showdate from "./background&date"
import Error from "./error";
import Voters from "./voters/router";
import LogInWorkers from "./loginWorker";
import Office from "./office/router";
import ElectionCommission from "./electionCommission/router";
import LogIn from "./login";
import myimg from "./img/backkground.png"
import NavHome from "./Navhome";

console.log("lllllllllll" + myimg)
export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    // getDatenow(setnowDate);
   // getCurrentKnesset();
  }, []);

  const [currentKersset, setCurrentKersset] = useState(null);
  const [nowDate, setnowDate] = useState(false);
  async function getCurrentKnesset() {
    try {
      let result = await fetch("http://localhost:3014/api/data/currentyear");
      result = await result.json();
      setCurrentKersset(result[0].electionDataCurrentElection);
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <>
      <div className="home">
{/* <NavHome></NavHome> */}
        <nav className="mainNav">הבחירות לכנסת ה-{currentKersset}
          
          </nav>
       
        <div >
          <Showdate></Showdate>
          <Routes>
            {<Route exact element={<Error />} path="*" />}

            <Route exact element={<LogIn />} path="/"> </Route> :

            <Route exact element={<Voters />} path="/voters/*" />

            <Route exact element={<LogInWorkers />} path="office">

            </Route>
            <Route exact element={<Office />} path="/updatvorters/*" />
            <Route
              exact
              element={<ElectionCommission />}
              path="/administration/*"
            />
          </Routes>
        </div>
      </div>
    </>
  );
}
