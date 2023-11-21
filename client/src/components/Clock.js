import React from 'react'
export default function Showclock(){
const time=new Date();
const nowclock=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
const nowDate=time.g
const mess=null;
function timeday(hour) {
   
    if (hour<13) {
        return"good morning";
    }
    else if(hour<18){
        return"good after noon";
    }
    else if(hour<23){
        return"good evening";
    }
    else {
        return"good night";
    }
 }
    return (
        <>
        <h1>Clock!!</h1>
        <img src='/img/about.jpg'/>
        <p>{nowclock}</p>
        <p>{timeday(time.getHours())}</p>
        </>

    )
}