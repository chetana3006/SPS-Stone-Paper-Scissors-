import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./complaint.css";
function ComplaintView() {
  const [complaints, setComplaints] = useState([]);
  const [lastRefreshed, setLastRefreshed] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetchComplaints(); // Fetch complaints when component mounts

    const interval = setInterval(() => {
      fetchComplaints(); // Fetch complaints every 3 minutes
    }, 3 * 60 * 1000); // 3 minutes in milliseconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const fetchComplaints = () => {
    axios
      .get("http://localhost:8000/comp/complaint")
      .then((response) => {
        setComplaints(response.data);
        setLastRefreshed(new Date()); // Update last refreshed time
      })
      .catch((error) => {
        console.error("Error fetching complaints:", error);
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/comp/complaintdelete/${id}`)
      .then(() => {
        // If deletion is successful, fetch updated complaints
        fetchComplaints();
      })
      .catch((error) => {
        console.error("Error deleting complaint:", error);
      });
  };
  const handlenavigate = () => {
    navigate("/Safety");
  };
  return (
    <div className="complaint_cont">
      <div className="comp_left">
        <h1 onClick={() => handlenavigate()}>Back</h1>
      </div>
      <div className="comp_right">
        <div className="nav_comp">
          <p>
            Last refreshed:{" "}
            {lastRefreshed
              ? `${timeDifference(lastRefreshed, new Date())} ago`
              : "Never"}
          </p>
          <h1 className="Heading_c">Complaint View</h1>
          <h2>Sameer</h2>
        </div>
        <div>
          {complaints.map((complaint) => (
            <div key={complaint._id} className="comp">
              <div className="comp_inside">
                <img src={complaint.picture} alt="Complaint" />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className="desc">Description: {complaint.description}</p>
                  <p className="desc">Location: {complaint.location}</p>
                  <button
                    onClick={() => handleDelete(complaint._id)}
                    className="deletebtn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/">Home</Link>
      </div>
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
    return Math.round(elapsed / 1000) + " seconds";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours";
  } else {
    return Math.round(elapsed / msPerDay) + " days";
  }
};

export default ComplaintView;
