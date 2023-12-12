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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Department:
          <input type="text" value={department} onChange={e => setDepartment(e.target.value)} />
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
      <Link to="/">Go back</Link>
    </div>
  );
}

export default NewProject;
