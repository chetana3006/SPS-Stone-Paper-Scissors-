import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Labour from './Components/Labour/Labour';

import './App.css';
<<<<<<< HEAD
import React from 'react';
import Charts from './Components/Charts/Charts';
import Equipment  from './Components/Equipment/Equipment';
// import { Chart } from 'chart.js';
=======
import React, { useState } from 'react';
import ComplaintView from './Screen/ComplaintView';
import LabourMessage from './Screen/LabourMessage';
import { Context, RoomContext } from "./Components/Context";
import Login from './Screen/Login';
import Register from './Screen/Register';
import TaskAllocationcreateroom from './Screen/TaskAllocation/TaskAllocationcreateroom';
import CreatedRoom from './Screen/TaskAllocation/CreatedRoom';
>>>>>>> 79dfb4418cda34df4b1c20060255042a9fe118c7

function App() {
  const [user, setuser] = useState({ user: '', id: '', isSite: '', isAdmin: '' });
  const [Room, setRoom] = useState({
    // roomid:"",
    roomCode: '',
    siteEngineerName: '',
    roomName: '',
    startDate: '',
    participants: [],
  });

  return (
    <div> 
      <Router>
        <Routes>
          <Route  path="/"element={<Home/>}/>        
          <Route  path="/labour"element={<Labour/>}/> 
          <Route path='/charts' element={<Charts/>} />      
          <Route path='/equipment' element={<Equipment/>} />      
          </Routes>
      </Router>
   
      
    </div>
  );
}

export default App;
