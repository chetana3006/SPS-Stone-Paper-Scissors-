import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import  {Context}  from "../Context";


const Home = () => {
  const {user,setuser}=useContext(Context);
  
  return (
    <div>
    <nav>
      <h1>{user.user}</h1>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/charts">Charts</Link>
            </li>
            <li>
            {/* <Link to="/equipment">Equipment</Link> */}
            </li>
            <li>
            <Link to="/complaint">Complaint Component</Link>
            </li>
            <li>
            <Link to="/laboursmessage">laboursmessage Component</Link>
            </li>
            <li>
            <Link to="/login">login Component</Link>
            </li>
            <li>
            <Link to="/register">register Component</Link>
            </li>
            <li>
            <Link to="/taskallocation">task TaskAllocation Component</Link>
            </li>
        </ul>
        {/* <Chart/> */}
    </nav>
    </div>
  )
}

export default Home