import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function LastButton12() {
    const navigate=useNavigate();
  return (
    <div>
      <h1 className='text-lg  absolute right-0 bottom-3 mr-10 bg-pink-400 p-2 rounded-xl cursor-pointer font-bold text-white' onClick={()=>navigate("/home")}>Home</h1>
    </div> 
  )
}

export default LastButton12;
