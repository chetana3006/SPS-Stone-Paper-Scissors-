import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ComplaintView() {
  const [complaints, setComplaints] = useState([]);
  const [lastRefreshed, setLastRefreshed] = useState(null);

  useEffect(() => {
    fetchComplaints(); // Fetch complaints when component mounts

    const interval = setInterval(() => {
      fetchComplaints(); // Fetch complaints every 3 minutes
    }, 3 * 60 * 1000); // 3 minutes in milliseconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const fetchComplaints = () => {
    axios.get('http://localhost:8000/comp/complaint')
      .then(response => {
        setComplaints(response.data);
        setLastRefreshed(new Date()); // Update last refreshed time
      })
      .catch(error => {
        console.error('Error fetching complaints:', error);
      });
  };
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/comp/complaintdelete/${id}`)
      .then(() => {
        // If deletion is successful, fetch updated complaints
        fetchComplaints();
      })
      .catch(error => {
        console.error('Error deleting complaint:', error);
      });
  };
  return (
    <div>
      <h1>Complaint View Page</h1>
      <p>Last refreshed: {lastRefreshed ? `${timeDifference(lastRefreshed, new Date())} ago` : 'Never'}</p>
      <div>
      {complaints.map(complaint => (
          <div key={complaint._id}>
            <p>Description: {complaint.description}</p>
            <p>Location: {complaint.location}</p>
            <img src={complaint.picture} alt="Complaint" style={{ width: '200px', height: 'auto' }} />
            <button onClick={() => handleDelete(complaint._id)}>Delete</button>
          </div>
        ))}
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}

// Function to calculate time difference for display
const timeDifference = (current, previous) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes';
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours';
  } else {
    return Math.round(elapsed / msPerDay) + ' days';
  }
};

export default ComplaintView;
