import React, { useState, useEffect } from "react";
import { VictoryBar, VictoryChart, } from "victory";
import Showload from "../loading";

export default function StaticsYear() {
    const [Showl, setShowl] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        getYears()
    }, []);




    async function getYears() {
        try {
            setShowl(true)
            let result = await fetch("http://localhost:3014/api/satistic"); //, {mode: 'no-cors', method:'GET'}
            result = await result.json();
            setShowl(false)
            setData(result);
        } catch (error) {
            console.warn(error);
        }

    }

    return (
        <>
            {Showl && (<Showload />)}

            <VictoryChart domainPadding={{ x: 95, y: 150 }}>
                <VictoryBar
                    data={data}
                    style={{
                        data: { fill: "blue", width: 12, height: 30 }
                    }}
                    x="date"
                    y="num"
                />
            </VictoryChart>

        </>
    )


}