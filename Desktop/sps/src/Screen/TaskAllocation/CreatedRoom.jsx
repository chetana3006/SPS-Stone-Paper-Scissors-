import React, { useContext, useState } from 'react';
import { RoomContext } from './TaskAllocationcreateroom';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import "./createroom.css";
import nullimg from "../../assets/null.png"
import back from "../../assets/back.png"

function CreatedRoom() {
  const { Room } = useContext(RoomContext);
  const location = useLocation();
  const navigate=useNavigate();
  // console.log(location.state);
  const { roomidhome, siteenghome } = location.state ||  {roomidhome:Room._id,siteenghome:Room.siteEngineerName};
  // console.log(
  //   "direct came",
  //   {roomidhome:Room._id,siteenghome:Room.siteEngineerName}
  // );
  // console.log(roomidhome, siteenghome);
  // console.log("room id  ",Room._id);
  const [istask, setTask] = useState(true);
  const [taskData, setTaskData] = useState({
    experience: '',
    expert: '',
    noofuserswant: '',
  });
  const [filteredusers,setfilteredusers]=useState([]);

  const handleAddTask = async () => {
    try {
      const response = await axios.post('http://localhost:8000/task/allocatetask', taskData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setfilteredusers(response.data.selectedUsers);
        console.log(filteredusers);
        console.log('Task added successfully');
      } else {
        console.error('Failed to add task');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleAddUser = async(userId) => {
    try {
      const payload = {
        roomId: roomidhome, 
        userId:userId,
      };
      console.log(`user added to ${userId}`);
      console.log(`room added to ${payload.roomId}`);
      const response = await axios.post('http://localhost:8000/site/inviteroom', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        alert("Labour added ")
        console.log('User added to room successfully');
        setfilteredusers(prevUsers => prevUsers.filter(user => user._id !== userId));

      } else {
        console.error('Failed to add user to room');
      }
      const response1 = await axios.patch(`http://localhost:8000/site/room/${roomidhome}/add-participants`, {participants:userId}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response1.status === 200) {
        alert("added to participants")
        console.log('User added to participants successfully');
        setfilteredusers(prevUsers => prevUsers.filter(user => user._id !== userId));

      } else {
        console.error('Failed to add user to room');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className='room_cont'>
      <div className='left'>
      <div className='flex m-2'>
          <img src={back} className='w-6 h-6  ml-3 mr-2' onClick={()=>{navigate("/projects")}}/>
          <h1 className=' font-semibold text-lg cursor-pointer text-black' onClick={()=>{navigate("/projects")}}>Back</h1>
        </div>
      </div>
      <div className='right'>
      {istask ? (
        <div>
          <div className='input_fld borderplain'>
            {/* <h1>{Room._id}</h1> */}
            
          <input
            type="text"
            placeholder="Experience"
            value={taskData.experience}
            onChange={(e) => setTaskData({ ...taskData, experience: e.target.value })}
          />
          <input
            type="text"
            placeholder="Expertise"
            value={taskData.expert}
            onChange={(e) => setTaskData({ ...taskData, expert: e.target.value })}
          />
          <input
            type="text"
            placeholder="No. of Users"
            value={taskData.noofuserswant}
            onChange={(e) => setTaskData({ ...taskData, noofuserswant: e.target.value })}
          />
          <button type='submit' onClick={handleAddTask}>Sugest labours</button>

          </div>

          <div>
              {filteredusers.length > 0 ? (
                <div>
                  {filteredusers.map((user) => (
                    <div key={user._id} className='suggestusers'>
                      <div className='size'><p className='username1'>Name: <span className='userspan'>{user.name}</span></p></div>
                      <div className='size'><p className='useremail'>Email: <span className='userspan'>{user.email}</span></p></div>
                      <div className='size'><button onClick={() => handleAddUser(user._id)} className='adduser'>Add User</button></div>
                    </div>
                  ))}
                </div>
              ) : (
                <img src={nullimg} alt="No users found" className='nullimg' />
              )}
            </div>
          </div>
        ): (
          <div>
          <h1>Created room</h1>
          <h1>{Room._id}</h1>
          <button onClick={() => setTask(!istask)}>Add Task</button>
        </div>
      )}
      </div>
    </div>
  );
}

export default CreatedRoom;
