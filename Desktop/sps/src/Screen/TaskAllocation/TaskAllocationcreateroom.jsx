import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Routes ,Route, useNavigate} from 'react-router-dom';
import {RoomContext} from "../../Components/Context"
import './taskAllocation.css';
import img2 from '../../assets/img2.png'
import back from "../../assets/back.png"
const TaskAllocationcreateroom = () => {
  const {Room,setRoom}=useContext(RoomContext);
  const [siteEngineerName, setSiteEngineerName] = useState('');
  const [siteLocation, setsiteLocation] = useState('');
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
        roomName,
        siteLocation
      };

      const response = await axios.post('http://localhost:8000/site/create-room', requestBody);

      setRoom(response.data.roomDetails);
      console.log("room",Room);
      alert("created room")
      navigate("/createdroom");
      
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };

  return (
    <RoomContext.Provider value={{ Room}}>
      <div className='task-bg'>
        <div className='task-body-cont'>
          <div className='task-form-cont'>
        <img src={back} className='w-6 h-6 mt-10 ml-10 mr-2' onClick={()=>{navigate("/projects")}}/>
        <h1 className='mt-10 font-semibold text-lg'>Back</h1>
            <div className='task-form-left'>
              <img src={img2} />
            </div>
            <div className='task-form-right'>
                  <form action="" className='task-form'>
                    <h1 className='task-form-right-head text-black'>Create Your WorkSpace</h1>
                      <input className='task-in'
                     type="text"
                     placeholder="Site Engineer Name"
                     value={siteEngineerName}
                     onChange={(e) => setSiteEngineerName(e.target.value)}
                      /> 
                  
                   
                    <input className='task-in'
                      type="text"
                      placeholder="Room Name"
                      value={roomName}
                      onChange={(e) => setRoomName(e.target.value)}
                    />
                    <input
                      type="text" className='task-in'
                      placeholder="Site Location"
                      value={siteLocation}
                      onChange={(e) => setsiteLocation(e.target.value)}
                    />
                  
                   <button onClick={createRoom} className='task-btn'>Create Room</button>
                  </form>
            </div>

          </div>

        </div>
      </div>
      
    </RoomContext.Provider>
  );
};

export { TaskAllocationcreateroom, RoomContext };
export default TaskAllocationcreateroom;

// {/* <RoomContext.Provider value={{ Room}}>
//       {/* Your components here */}
//       <input
//         type="text"
//         placeholder="Site Engineer Name"
//         value={siteEngineerName}
//         onChange={(e) => setSiteEngineerName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Room Name"
//         value={roomName}
//         onChange={(e) => setRoomName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Site Location"
//         value={siteLocation}
//         onChange={(e) => setsiteLocation(e.target.value)}
//       />
//       <button onClick={createRoom}>Create Room</button>
      
//     </RoomContext.Provider> */}
