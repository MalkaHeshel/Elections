import './App.css';
import { BrowserRouter } from 'react-router-dom'

import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Home from './components/home'
import { Background } from 'victory';
import { queryByAltText } from '@testing-library/react';
function App() {
  return (
    <>
      <div >
        <BrowserRouter >  
          <div className="App" >
            <Home />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
