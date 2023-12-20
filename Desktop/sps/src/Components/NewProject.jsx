import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import "./NewProject.css";
import ProImg from "../assets/loginsvg.svg"
import back from "../assets/back.png"

function NewProject() {
  const navigate=useNavigate();
  const [department, setDepartment] = useState('');
  const [projectName, setProject] = useState('');
  const [projectEngineer, setEngineer] = useState('');
  const [location, setLocation] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [estimatedBudget, setEstimatedBudget] = useState('');
  const [completionStatus, setCompletionStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      department,
      projectName,
      projectEngineer,
      location,
      estimatedTime,
      estimatedBudget,
      completionStatus,
    };

    axios.post('https://homepage-uolh.onrender.com/home/create', data)
      .then(response => {
        console.log('Data posted successfully:', response.data);
        // You can handle success actions here
        navigate("/home")
        
      })
      .catch(error => {
        console.error('Error posting data:', error);
        alert(error)
        // Handle error scenarios here
      });
  };

  return (
    <div className='new-probg'>
     
      <div className='new-pro-main'>
        <div className='new-pro-form-cont'>
          <div className='new-pro-left'>
          <div className='flex m-2'>
          <img src={back} className='w-6 h-6  ml-3 mr-2' onClick={()=>{navigate("/projects")}}/>
          <h1 className=' font-semibold text-lg cursor-pointer text-black' onClick={()=>{navigate("/projects")}}>Back</h1>
        </div>
            <img className='new-pro-img' src={ProImg} id="svg"/>
            
          </div>
          <div className='new-pro-right'>
            <div className='new-pro-form-title'>
              <h1 style={{fontSize:"30px",color:"black"}}>Details</h1>
            </div>
            <form onSubmit={handleSubmit} className='new-pro-form'>
              <label className='new-form-label'>
                Department:
                <input id="input" type="text" value={department} onChange={e => setDepartment(e.target.value)} className='new-form-in' placeholder='Enter your Department name'/>
              </label>
              <label className='new-form-label'>
                Project:
                <input id="input" type="text" value={projectName} onChange={e => setProject(e.target.value)}className='new-form-in' placeholder='Enter your Project name' />
              </label>
              <label className='new-form-label'>
                Project Engineer:
                <input id="input" type="text" value={projectEngineer} onChange={e => setEngineer(e.target.value)}className='new-form-in' placeholder='Enter your Engineer name' />
              </label>
              <label className='new-form-label'>
                Location:
                <input id="input" type="text" value={location} onChange={e => setLocation(e.target.value)} className='new-form-in' placeholder='Enter your Location'/>
              </label>
              <label className='new-form-label'>
                Estimated Time:
                <input id="input" type="text" value={estimatedTime} onChange={e => setEstimatedTime(e.target.value)}className='new-form-in' placeholder='Enter your Estimated Time' />
              </label>
              <label className='new-form-label'>
                Estimated Budget:
                <input id="input" type="text" value={estimatedBudget} onChange={e => setEstimatedBudget(e.target.value)}className='new-form-in' placeholder='Enter your Estimated Budget' />
              </label>
              <label className='new-form-label'>
                Completion Status:
                <input id="input" type="text" value={completionStatus} onChange={e => setCompletionStatus(e.target.value)}className='new-form-in' placeholder='Completion Status' />
              </label>
              <button className='new-pro-btn' type="submit">Submit</button>
            </form>
        {/* <Link to="/">Go back</Link> */}
          </div>
        </div>
      </div>
      
    </div>
  );
}
{/* <form onSubmit={handleSubmit}>
        <label>
          Department:
          className='new-form-in'
        </label>
        <label>
          Project:
          <input type="text" value={projectName} onChange={e => setProject(e.target.value)} />
        </label>
        <label>
          Project Engineer:
          <input type="text" value={projectEngineer} onChange={e => setEngineer(e.target.value)} />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
        </label>
        <label>
          Estimated Time:
          <input type="text" value={estimatedTime} onChange={e => setEstimatedTime(e.target.value)} />
        </label>
        <label>
          Estimated Budget:
          <input type="text" value={estimatedBudget} onChange={e => setEstimatedBudget(e.target.value)} />
        </label>
        <label>
          Completion Status:
          <input type="text" value={completionStatus} onChange={e => setCompletionStatus(e.target.value)} />
        </label>
        
        <button type="submit">Submit</button>
      </form>
      <Link to="/">Go back</Link> */}
export default NewProject;
