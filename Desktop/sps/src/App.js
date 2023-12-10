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
    roomid:"",
    roomCode: '',
    siteEngineerName: '',
    roomName: '', 
    startDate: '',
    participants: [],
  });

  return (
    <div> 
      <Context.Provider value={{user,setuser}}>
        <RoomContext.Provider value={{Room,setRoom}}>
      <Router>
        <Routes>
          <Route  path="/"element={<Home/>}/>        
          <Route  path="/labour"element={<Labour/>}/> 
          <Route  path="/login"element={<Login/>}/>        
          <Route  path="/register"element={<Register/>}/>        
          <Route  path="/taskallocation"element={<TaskAllocationcreateroom/>}/>        
          <Route  path="/complaint"element={<ComplaintView/>}/>        
          <Route  path="/laboursmessage"element={<LabourMessage/>}/>        
          <Route  path="/createdroom"element={<CreatedRoom/>}/>        
          <Route path='/charts' element={<Charts/>} />      
          <Route path='/equipment' element={<Equipment/>} />      
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
