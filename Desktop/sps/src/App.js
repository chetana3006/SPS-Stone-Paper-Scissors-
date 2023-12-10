import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Labour from './Components/Labour/Labour';

import './App.css';
import React, { useState } from 'react';
import ComplaintView from './Screen/ComplaintView';
import LabourMessage from './Screen/LabourMessage';
import { Context, RoomContext } from "./Components/Context";
import Login from './Screen/Login';
import Register from './Screen/Register';
import TaskAllocationcreateroom from './Screen/TaskAllocation/TaskAllocationcreateroom';
import CreatedRoom from './Screen/TaskAllocation/CreatedRoom';

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
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
