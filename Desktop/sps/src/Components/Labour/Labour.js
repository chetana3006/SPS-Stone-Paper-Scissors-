import React from 'react'
import WeatherImpactScatterPlot from './WeatherImpactScatterPlot'
import HealthWellnessDashboard from './HealthWellnessDasboard'
import LabourGanttChart from './LabourGanttChart'
import DualAxisLineChart from './DualAxisLineChart'
import LabourMessage from '../../Screen/LabourMessage'
import {useState,useEffect} from "react"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import LastButton12 from '../LastButton12'
import AttendanceTrendsLineChart from '../Charts/AttendanceTrendLineChart'
import SafetyIncidentHistoryLineChart from '../Charts/SafetyIncidentHistoryLineChart'
import OvertimeDistributionPieChart from '../Charts/OvertimeDistributionPieChart'
import LaborTurnoverRateBarChart from '../Charts/LaborTurnoverBarChart'
import LTIRateTrendsLineChart from '../Charts/LTIRateTrendsLineChart'
import SafetyTrainingHoursAreaChart from '../Charts/SafetyTrainingHoursAreaChart'
import WorkforceProductivityLineChart from '../Charts/WorkforceProductivityLineChart'

// Inside your component
const Labour = () => {
  const navigate=useNavigate();
  const [messages, setMessages] = useState([]);
  const [replyMessage, setReplyMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [toggle, setToggle] = useState(false); 
  const [labours,setLabours]=useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    fetchMessages();
    fetchLabour();
  }, []);

  const fetchMessages = () => {
    axios.get('http://localhost:8000/a/msgforadmin')
      .then(response => {
        setMessages(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  };
  const fetchLabour = () => {
    axios.get('http://localhost:8000/u/alluser')
      .then(response => {
        setLabours(response.data.Users);
        console.log(response.data.Users);
      })
      .catch(error => {
        console.error('Error fetching labours:', error);
      });
  };

  const handleReply = (user) => {
    setSelectedUser(user);
    setToggle(prevToggle => !prevToggle); 
    setReplyMessage('');
  };
  const handledelete = (message) => {
    axios.post('http://localhost:8000/a/deletemsgfromadmin', {
      "userid": message.user._id,
      "messageid": message._id
    })
      .then(response => {
        const updatedMessages = messages.filter(msg => msg._id !== message._id);
        setMessages(updatedMessages);
        alert("Deleted successfully");
      })
      .catch(error => {
        console.error('Error deleting message:', error);
      });
  };
  
  const sendMessage = () => {
    if (selectedUser && replyMessage.trim() !== '') {
      const data = {
        "user": selectedUser,
       "message": replyMessage,
      };

      axios.post('http://localhost:8000/a/postmessage', data)
        .then(response => {
          // Message sent successfully, update messages
          fetchMessages();
          alert("Message sent")
          setReplyMessage("")
        })
        .catch(error => {
          console.error('Error sending message:', error);
        });
    }
  };
  const filteredLabours = labours.filter((labour) =>
  labour.name.toLowerCase().includes(searchTerm.toLowerCase())
);
const senddata=()=>{
  navigate("/labourdetail")
}

  return (
    <div className='text-black py-4 px-5 bg-gray-100 '>
    <div className='flex flex-row justify-between items-center lightgreen green px-5 py-4 rounded-md shadow-md'>
      <h2 className='font-semibold poppins text-2xl lightgreen text-white'>Labour workspace</h2>
      <input
        type='text'
        placeholder='Search Labour'
        className='px-4 py-2 rounded-md'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Link className='font-bold text-xl text-white' to="/projects">Back</Link>
    </div>
    <div className='filtered'>
      {searchTerm !== '' && (
        filteredLabours.map((labour) => (
          <div key={labour._id} className='filtered_main'>
                      <div className='size cls'><p className='username1'>Name: <span className='userspan'>{labour.name}</span></p></div>
                      <div className='size'><p className='useremail'>Email: <span className='userspan'>{labour.email}</span></p></div>
                      <div className='size'><button className='adduser' onClick={()=>navigate(`/labourdetail/${labour._id}`,)}>View Detail</button></div>
          </div>
        ))
      )}
    </div>
      <div className='flex flex-row gap-5 h-96  my-5'>
        <div className='w-4/5 bg-white shadow-md '>
          <WorkforceProductivityLineChart/>
          
        </div>
        <div className=' w-full bg-white shadow-md rounded-sm px-4 py-3'>
          <AttendanceTrendsLineChart/>
        </div>

      </div>
      <div className='flex flex-row gap-5 h-96  my-5'>
        <div className='w-full bg-white shadow-md '>
          <SafetyIncidentHistoryLineChart/>
          
        </div>
        <div className=' w-4/5 bg-white shadow-md rounded-sm px-4 py-3'>
          <OvertimeDistributionPieChart/>
        </div>

      </div>
      <div className='flex flex-row gap-5 h-96  my-5'>
        <div className='w-3/5 bg-white shadow-md py-2 px-2'>
          <LaborTurnoverRateBarChart/>
        </div>
        <div className=' w-full bg-white shadow-md py-2 px-2'>
          <LTIRateTrendsLineChart/>
        </div>
        <div className=' w-2/4 bg-gray-100 shadow-md  head'>

        <h1 className="heading">Messages for Admin</h1>
      <div className='msg_cont'>
        {messages.map(message => (
          <div key={message._id} className='map_msg'>
            <p className="username">{message.user.name}</p>
            <p className="msg">{message.message}</p>
            <p className="time"> {new Date(message.createdAt).toLocaleString()}</p>
           <div style={{display:"flex",justifyContent:"space-between"}}>
           <button onClick={() => handleReply(message.user)} className="reply">Reply</button>
            <button onClick={() => handledelete(message)} className="delete">Delete</button>
           </div>
            <hr />
          </div>
        ))}
      </div>
        {toggle ? (
          <div className="toggleinput">
            <h2>Reply to {selectedUser.name}</h2>
            <input
              type="text"
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              placeholder="Type your reply..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        ) : (
          <h1></h1>
        )}
        </div>
      </div>
      <div class='flex  flex-row  bg-gray-100  py-4 rounded-md shadow-md'>
        <div className='w-full bg-white shadow-md '>
        <SafetyTrainingHoursAreaChart/>
        </div>
        <div className='bg-white ml-2 shadow-md px-4 py-4 items-center justify-center flex flex-col'>
        <h2 class='font-semibold poppins text-2xl bg-white'>Generate Report</h2>
        <div className='flex flex-row   mt-5 justify-around item'>
          <h2 class='font-semibold poppins text-2xl  lightgreen green mr-4 text-white px-3 py-2 rounded-md'>Weekly</h2>
          <h2 class='font-semibold poppins text-2xl  lightgreen green text-white px-3 py-2 rounded-md'>Monthly</h2>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Labour