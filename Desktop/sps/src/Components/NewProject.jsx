import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./NewProject.css";

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
        navigate("/")
        
      })
      .catch(error => {
        console.error('Error posting data:', error);
        alert(error)
        // Handle error scenarios here
      });
  };

  return (
    <div className='new-probg'>
      <div className='new-pro-title-cont'>
        <h1 className='new-pro-title'>New Pro Details</h1>
      </div>
      <div className='new-pro-main'>
        <div className='new-pro-left-cont'>
          
        </div>
      </div>
    </div>
  );
}

export default NewProject;
