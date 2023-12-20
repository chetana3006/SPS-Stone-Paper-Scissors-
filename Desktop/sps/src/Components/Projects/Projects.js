import React, { useEffect, useState } from 'react'

import Profile from '../../assets/profile.png'

import Persons from '../../assets/persons.png'
import Safety from '../../assets/safety.png'
import Tools from '../../assets/tools.png'
import { Link, useNavigate } from 'react-router-dom';
import back from "../../assets/back.png"
import LastButton12 from '../LastButton12'
const Projects = () => {
    const [rooms, setRooms] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
      fetch('http://localhost:8000/site/dataforhome')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.rooms[0].participants[0].userId.name);
          setRooms(data.rooms); // Assuming the data structure matches the response received
    // Assuming the data structure matches the response received
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
    
    <div className='w-80 h-screen text-center py-5 bglightblue'>
        {/* <div className='py-2 border-b'>
            <h2 className='poppins text-white text-2xl font-medium text-left ml-10 mb-2'>Metro Work</h2>
            <h2 className='poppins text-white text-2xl font-medium text-left ml-10 mb-2'>Government</h2>
            <h2 className='poppins text-white text-2xl font-medium text-left ml-10 mb-2'>Chennai</h2>
            <h2 className='poppins text-white text-2xl font-medium text-left ml-10 mb-2'>Karthik</h2>
        </div> */}
        <div className='flex align-'>
          <img src={back} className='w-6 h-6  ml-3 mr-2' onClick={()=>{navigate("/home")}}/>
          <h1 className=' font-semibold text-lg cursor-pointer' onClick={()=>{navigate("/home")}}>Back</h1>
        </div>
        <div className='mt-4  pb-4'>

            <div className=' flex flex-row justify-start poppins  text-xl font-medium text-left py-2   text-gray-600   mb-1 '>
              <img src={Persons} alt="labour" className='h-8 w-8 mr-3 ml-5'/>
              <Link to="/Projects/Labour" className='text-left hover:hoverclr text-black'>Labour</Link>
              </div>
            <div className=' flex flex-row justify-start poppins  text-xl font-medium text-left py-2   text-gray-600   mb-1 '>
              <img src={Tools} alt="labour" className='h-7 w-7 mr-3 ml-5'/>
              <Link to="/equipment" className='text-left text-black'>Equipment</Link>
              </div>
            <div className=' flex flex-row justify-start poppins  text-xl font-medium text-left py-2   text-gray-600   mb-1 '>
              <img src={Safety} alt="labour" className='h-8 w-8 mr-3 ml-5'/>
              <Link to="/safety" className='text-left text-black'>Safety</Link>
              </div>
            <div className=' flex flex-row justify-start poppins  text-xl font-medium text-left py-2   text-gray-600   mb-1 '>
              <img src={Tools} alt="labour" className='h-8 w-8 mr-3 ml-5'/>
              <Link to="/complaint" className='text-left text-black'>Complaint</Link>
              </div>
        </div>
    </div>
    <div className='w-full py-10 px-7 h-screen overflow-y-auto bglightgrey'>
        
        <div className='Header flex flex-row  h-12 w-full mb-10 justify-between'>
            <div>
              <h2 className='poppins font-medium text-2xl text-black'>OnGoinTasks</h2>
            </div>
            
            <div className='green px-4 py-2  rounded-md text-xl borderplain'  >
              <h2 className=' text-white  poppins font-semibold' onClick={()=>navigate("/taskallocation")}>New Tasks</h2>
            </div>
          </div>
          <div className='taskcard pb-2 bglightblue mb-5 w-full'>
            
            {/* <div> */}
            {/* <div className='mb-2' >
                <h2 className='green py-2 px-3 text-white font-semibold text-left pl-12 text-xl'>Plumbing</h2>
            </div> */}
           {/* {rm.participant.userId} */}
            {/* <div className='px-5'>
                <div className=''>
                <h2 className='mt-3 poppins font-medium'>Site Engineer: <span className='font-medium text-gray-700'></span></h2>
                <h2 className='mt-2 mb-3 poppins font-medium'>Site Location: <span className='font-medium text-gray-700'> </span></h2>
                </div>
                <div className='labours flex flex-row flex-wrap'>
            
              <div  className='flex flex-row items-center mr-10 mb-4'>
                <img src={Profile} alt='' className='h-8 w-8 border p-4 rounded-md' />
                <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2 rounded-md'>
                  sameer
                </h2>
              </div>
            
          </div>
                <h2 className='poppins font-medium text-xl'>Task Progress:</h2>
                <div className='flex flex-row w-full  items-center'>
                        <div className='h-2 w-full green mr-4'></div>
                        <h2>70%</h2>
                </div>
                <div className='w-2/6 mx-aut0 mt-2 mb-2'>
                    <h2 className=' text-center green px-3 py-3 block text-white font-semibold rounded-lg' >Add Labour</h2>
                </div>
                
            </div> */}
            {/* </div> */}
                
            
        </div>
        <div className='taskcard pb-2 '>
            {
                rooms.map((rm)=>(
                    <div className='mb-7 bg-white pb-5 rounded-2xl '>
            <div className='mb-2' key={rm._id}>
                <h2 className='green py-2 px-3 text-white font-semibold text-left pl-12 text-xl  rounded-t-2xl roomtest'  >{rm.roomName}</h2>
            </div>
           {/* {rm.participant.userId} */}
            <div className='px-5'>
                <div className=''>
                <h2 className='mt-3 poppins font-bold'>Site Engineer: <span className='font-medium text-gray-700'>{rm.siteEngineerName}</span></h2>
                <h2 className='mt-2 mb-3 poppins font-bold'>Site Location: <span className='font-medium text-gray-700'>{rm.siteLocation} </span></h2>
                </div>
                <div className='labours flex flex-row flex-wrap'>
            {/* {rm.participants.map((parti) => {
              return(
                <div key={parti.userId._id} className='flex flex-row items-center mr-10 mb-4'>
                <img src={Profile} alt='' className='h-8 w-8 border p-4 rounded-md' />
                <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2 rounded-md'>
                  {parti.userId.name}
                </h2>
              </div>
              )
            })} */}
           {
  rm.participants.map((parti) => {
    return <div className='text-gray-800 text-md border-b border-t  mr-2 pr-2 py-1 pl-2 rounded-md mb-4 labours2'  id='' >{parti.userId && parti.userId.name ? parti.userId.name : ''}</div>;

 }) 
}

          </div>
                <h2 className='poppins font-medium text-xl'>Task Progress:</h2>
                <div className='flex flex-row w-full  items-center'>
                        <div className='h-2 w-full  mr-4 bg-neutral-200 ' id=""></div>
                        <h2>70%</h2>
                </div>
                <div className='w-1/6 mx-aut0 mt-2 mb-2'>
                    <h2 className=' text-center lightgreen green px-1 py-2 block text-white font-semibold rounded-lg labourclr' onClick={()=>handleaddlabour(rm._id,rm.siteEngineerName)}>Add Labour</h2>
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
  <LastButton12/>
  </div>
)


}

export default Projects
