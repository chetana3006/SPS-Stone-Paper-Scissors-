import React, { useEffect, useState } from 'react'

import Profile from '../../assets/profile.png'
import { Link, useNavigate } from 'react-router-dom';

const Projects = () => {
    const [rooms, setRooms] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
      fetch('http://localhost:8000/site/dataforhome')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.rooms[0].participants[0].userId.name);
          setRooms(data.rooms); // Assuming the data structure matches the response received
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);


    const handleaddlabour=(roomid,siteengineername)=>{
        console.log(roomid,siteengineername);
        navigate("/createdroom",{ state: { roomidhome: roomid, siteenghome: siteengineername } })    
    }
  
  return (
  <div className='flex gap-2'>
    
    <div className='w-80 h-screen bgdarkblue text-center py-5'>
        <div className='py-2 border-b'>
            <h2 className='poppins text-white text-2xl font-medium text-left ml-10 mb-2'>Metro Work</h2>
            <h2 className='poppins text-white text-2xl font-medium text-left ml-10 mb-2'>Government</h2>
            <h2 className='poppins text-white text-2xl font-medium text-left ml-10 mb-2'>Chennai</h2>
            <h2 className='poppins text-white text-2xl font-medium text-left ml-10 mb-2'>Karthik</h2>
        </div>
        <div className='mt-4 border-b pb-4'>

            <h2 className='poppins text-white text-2xl font-medium text-left ml-5 mb-4 underline'>Analysis</h2>
            <h2 className='poppins  text-2xl font-medium text-left pl-12 py-2  bg-gray-200 text-gray-800 border  mb-1 ml-5'>Labour</h2>
            <h2 className='poppins  text-2xl font-medium text-left pl-12 py-2  bg-gray-200 text-gray-800 border  mb-1 ml-5'>Equipment</h2>
            <h2 className='poppins  text-2xl font-medium text-left pl-12 py-2  bg-gray-200 text-gray-800 border  mb-1 ml-5'>Safety</h2>
        </div>
    </div>
    <div className='w-full py-10 px-7 h-screen overflow-y-auto'>
        
        <div className='Header flex flex-row  h-12 w-full mb-10 justify-between'>
            <div>
              <h2 className='poppins font-bold text-3xl'>OnGoinTasks</h2>
            </div>
            <div className='bgdarkblue px-4 py-2  rounded-md text-xl'>
              <h2 className=' text-white poppins font-semibold' onClick={()=>navigate("/taskallocation")}>New Tasks</h2>
            </div>
          </div>
        <div className='taskcard pb-2 bglightblue mb-5'>
            {
                rooms.map((rm)=>(
                    <div>
            <div className='mb-2' key={rm._id}>
                <h2 className='bgdarkblue py-2 px-3 text-white font-semibold text-left pl-12'>{rm.roomName}</h2>
            </div>
           {/* {rm.participant.userId} */}
            <div className='px-5'>
                <div className=''>
                <h2 className='mt-3 poppins font-medium'>Site Engineer: <span className='font-medium text-gray-700'>{rm.siteEngineerName}</span></h2>
                <h2 className='mt-2 mb-3 poppins font-medium'>Site Location: <span className='font-medium text-gray-700'>{rm.siteLocation} </span></h2>
                </div>
                <div className='labours flex flex-row flex-wrap'>
            {rm.participants.map((participant) => (
              <div key={participant.userId._id} className='flex flex-row items-center mr-10 mb-4'>
                <img src={Profile} alt='' className='h-8 w-8 border p-4 rounded-md' />
                <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2 rounded-md'>
                  {participant.userId.name}
                </h2>
              </div>
            ))}
          </div>
                <h2 className='poppins font-medium text-xl'>Task Progress:</h2>
                <div className='flex flex-row w-full  items-center'>
                        <div className='h-2 w-full bg-gray-600 mr-4'></div>
                        <h2>70%</h2>
                </div>
                <div className='w-2/6 mx-aut0 mt-2 mb-2'>
                    <h2 className=' text-center bgdarkblue px-3 py-3 block text-white font-semibold rounded-lg' onClick={()=>handleaddlabour(rm._id,rm.siteEngineerName)}>Add Labour</h2>
                </div>
                
            </div>
            </div>
                ))
            }
        </div>
       
       
    </div>
    {/* <div className='w-2/5  text-center'>
         
        <div className='h-screen w-full border-blue-950 border-2 flex flex-col'>
    <div className=''>
        <h2 className='px-4 py-2 text-center bgdarkblue text-white font-semibold text-xl'>Messages</h2>
    </div>
    <div className='flex-1 flex flex-col justify-end'>
        <div className='messages flex-1'>
           
        </div>
        <div class="bg-gray-200 ">
           <input type="text" placeholder="Type here!" class="w-full bg-slate-200 px-2 py-2 rounded-lg focus:outline-none focus:ring-0" />

        </div>
    </div>
</div>
    </div> */}
    <Link to="/">home</Link>
 
  </div>
)


}

export default Projects
