import React, { useContext, useState } from 'react';
import { RoomContext } from './TaskAllocationcreateroom';
import axios from 'axios';

function CreatedRoom() {
  const { Room } = useContext(RoomContext);
  console.log("room id  ",Room);
  const [istask, setTask] = useState(false);
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
        console.log('Task added successfully');
      } else {
        console.error('Failed to add task');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleAddUser = async (userId) => {
    try {
      const payload = {
        roomId: Room._id, 
        userId: userId,
      };
  
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
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div>
      {istask ? (
          <div>
            <h1>{Room._id}</h1>
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



          {filteredusers.map((user) => (
              <div key={user._id}>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <button onClick={() => handleAddUser(user._id)}>Add User</button>
              </div>
            ))}
          <button onClick={() => { setTask(!istask); handleAddTask(); }}>Back</button>
        </div>
        
      ) : (
        <div>
          <h1>Created room</h1>
          <h1>{Room._id}</h1>
          <button onClick={() => setTask(!istask)}>Add Task</button>
        </div>
      )}
    </div>
  );
}

export default CreatedRoom;
