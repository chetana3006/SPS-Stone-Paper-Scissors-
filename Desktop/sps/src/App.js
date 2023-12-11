import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Labour from './Components/Labour/Labour';
import './App.css';
import Charts from './Components/Charts/Charts';
import Equipment  from './Components/Equipment/Equipment';
import { Context, RoomContext } from './Components/Context';
// import { Chart } from 'chart.js';
import React, { useState } from 'react';
import ComplaintView from './Screen/ComplaintView';
import LabourMessage from './Screen/LabourMessage';

import Login from './Screen/Login';
import Register from './Screen/Register';
import TaskAllocationcreateroom from './Screen/TaskAllocation/TaskAllocationcreateroom';
import CreatedRoom from './Screen/TaskAllocation/CreatedRoom';
import Projects from './Components/Projects/Projects';
import Safety from './Components/Safety/Safety';


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
          <Route path='/Projects' element={<Projects/>} />      
          <Route path='/Safety' element={<Safety/>} />      
          </Routes>
      </Router>
      </RoomContext.Provider>
      </Context.Provider>
    </div>
  );
}

export default App;
