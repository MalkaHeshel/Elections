import { Routes, Route } from 'react-router-dom'
import Identify from './identify';
import React from 'react';
import Vote from "./vote";
import Error from '../error';


export default function Voters() {
    return(
<div>  
<Routes>
            { 
            <Route exact element={<Error />} path="*" />  }
                
                    <Route exact element={<Identify/>} path="/identify" />
                    <Route exact element={ <Vote/>} path="/vote" />
                </Routes>          
    
    
</div>
    )
}  