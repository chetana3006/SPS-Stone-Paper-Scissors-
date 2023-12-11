import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Routes ,Route, useNavigate} from 'react-router-dom';
import {RoomContext} from "../../Components/Context"
 

const TaskAllocationcreateroom = () => {
  const {Room,setRoom}=useContext(RoomContext);
  const [siteEngineerName, setSiteEngineerName] = useState('');
  const [roomName, setRoomName] = useState('');
  const navigate=useNavigate();
  // roomCode: '',
  //   siteEngineerName: '',
  //   roomName: '',
  //   startDate: '',
  //   participants: [],
  const createRoom = async () => {
    // console.log(siteEngineerName,roomName);
    try {
      const requestBody = {
        siteEngineerName,
        roomName
      };

      const response = await axios.post('http://localhost:8000/site/create-room', requestBody);

      setRoom(response.data.roomDetails);
      console.log("room",Room);
      navigate("/createdroom");
      
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };

  return (
    <RoomContext.Provider value={{ Room}}>
      {/* Your components here */}
      <input
        type="text"
        placeholder="Site Engineer Name"
        value={siteEngineerName}
        onChange={(e) => setSiteEngineerName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Room Name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <button onClick={createRoom}>Create Room</button>
      
    </RoomContext.Provider>
  );
};

export { TaskAllocationcreateroom, RoomContext };
export default TaskAllocationcreateroom;
