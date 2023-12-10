import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
    <nav>
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
            <Link to="/equipment">Equipment</Link>
            </li>
            
        </ul>
        {/* <Chart/> */}
    </nav>
    </div>
  )
}

export default Home