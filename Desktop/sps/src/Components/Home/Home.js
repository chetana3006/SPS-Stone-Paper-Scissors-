import React, { useEffect, useState } from 'react'
import '../Home/Home.css'
import '../../assets/Metro.jpeg'
import Location from './DropdownLocation'
import Projects from './DropDownproject'
import Departments from './DropdownDepartment'
import Status from './DropdownStatus'
import Profile from '../../assets/profile.png'
import Recents from '../../assets/clock.png'
import Metro from '../../assets/Metro.jpeg'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate=useNavigate();
  const postname=(Projectname)=>{
    axios.post('http://localhost:8000/set-db-name',{"dbName":Projectname})
    .then(response => {
    //  alert("sent da")
      navigate("/Projects")
    })
    .catch(error => {
      console.error('Error fetching complaints:', error);
    });
    console.log(Projectname);
  }
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://homepage-uolh.onrender.com/home/all')
      .then(response => {
        setProjects(response.data.projects);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);
  return (
    <div className='flex flex-row h-full'>
      <Link to="/Projects">home 2</Link>
      <div className='flex flex-col w-80 bglightgrey   py-4'>
        <div className='flex flex-row  px-5  items-center border-b  mb-2 border-gray-200 py-3'>
          <img src={Profile} alt="profile" className='h-7 w-7 mr-4'/>
          <h2 className='poppins font-semibold text-white'>Karthik</h2>
        </div>
        <div className='flex row justify-center items-center w-full border-b  mb-2 border-gray-200 py-3'>
          <div className='flex flex-col'>
            <h2 className='poppins text-white font-medium text-2xl'>Stone</h2>
            <h2 className='poppins text-white font-medium text-2xl'>Paper</h2>
            <h2 className='poppins text-white font-medium text-2xl'>Scissors</h2>
          </div>
          {/* <div className='flex justify-center items-center'>
             <img src={Profile} alt="profile"/>
          </div> */}
        </div>
        <div className='searchbar py-3 px-4'>
            <div className="bg-gray-200 px-3 py-1 rounded-full flex items-center">
            <div className="w-2 h-4 mr-2 bg-contain bg-no-repeat" style={{ backgroundImage: "url('../../profile.png')" }}></div>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none flex-1"
            />
          </div>
        </div>
        <div className='flex flex-row  px-5 items-center  border-b  mb-2 border-gray-200 py-3'>
          <img src={Recents} alt="profile" className='mr-2 h-5 w-5'/>
          <h3 className='poppins font-light text-white text-md'>Recents</h3>
        </div>
        
        <h2 className='font-bold text-white   text-xl px-4'>Filters</h2>
        <div className="flex flex-col space-y-4 px-4 py-2 border-b pb-6 mb-2 border-gray-200">
          <label htmlFor="projects" className="block text-xl text-white font-medium">Loactions:</label>
          <Location/>
          <label htmlFor="projects" className="block text-xl text-white font-bold">projects:</label>
          <Projects/>
          <label htmlFor="projects" className="block text-xl text-white font-bold">Departments:</label>
          <Departments/>
          <label htmlFor="projects" className="block text-xl text-white font-bold">Status:</label>
          <Status/>
        </div>

        {/* <div className='filters px-1 border-b pb-4 mb-2 border-gray-200'>
          
          <div className='flex items-center mb-2 px-4 text-xl font-semibold text-gray-700'>
            <input type='checkbox' id='completed' className='mr-2 accent-indigo-900' />
            <label htmlFor='completed'>Completed</label>
          </div>
          <div className='flex items-center mb-2 px-4 text-xl font-semibold text-gray-700'>
            <input type='checkbox' id='pending' className='mr-2 accent-indigo-900' />
            <label htmlFor='pending'>Pending</label>
          </div>
          <div className='flex items-center px-4 text-xl font-semibold text-gray-700'>
            <input type='checkbox' id='deadlines' className='mr-2 accent-indigo-900' />
            <label htmlFor='deadlines'>Deadline</label>
          </div>
        </div>
        */}
        
        
      </div> 
      <div className='flex  flex-col w-full  bglightblue  px-10 py-10'>
          <div className='Header flex flex-row  h-12 w-full mb-10 justify-between'>
            <div>
              <h2 className='poppins font-bold text-3xl'>Projects</h2>
            </div>
            <div className='bgdarkblue px-4 py-2  rounded-md text-xl'>
              <Link to="Newproject" className=' text-white poppins font-semibold' >New Project</Link>
            </div>
          </div>
          <div className='projectslist'>
            {
              projects.map(project => (
                <div className='task mb-6' key={project._id} >
                
                <div className='bgdarkblue w-full h-12 px-10 py-3'>
                    <h2 className=' text-white poppins' onClick={()=>postname(project.projectName)}>{project.projectName}</h2>
                </div>
                <div className='flex flex-row bg-white w-full'>
                  <div className='flex items-center justify-center h-74 w-56 '>
                    <img src={Metro} alt='ima' className='h-32 w-32'/>
                  </div>
                  <div className='flex flex-col poppins w-full px-10 py-8 font-semibold'>
                      <h2 className='my-1'>Department: <span className='font-normal text-gray-700'> {project.department}</span></h2>
                      <h2 className='my-1'>Project <span className='font-normal text-gray-700'> {project.projectName}</span></h2>
                      <h2 className='my-1'>Project Engineer: <span className='font-normal text-gray-700'> {project.projectEngineer} </span></h2>
                      <h2 className='my-1'>Location: <span className='font-normal text-gray-700'> {project.location} </span></h2>
                      <h2 className='my-1'>Estimated Time: <span className='font-normal text-gray-700'>{project.estimatedTime} </span></h2>
                      <h2 className='my-1'>Estimated Budget: <span className='font-normal text-gray-700'> {project.completionStatus} </span></h2>
                      <h2 className='my-1'>Completion Status:</h2>
                      <div className='flex flex-row w-full  items-center'>
                        <div className='h-2 w-full bgdarkblue mr-4'></div>
                        <h2>{project.completionStatus}</h2>
                      </div>
                  </div>
                </div>
            </div>
          
          ))}
          </div>

      </div>
    </div>
  )
}

export default Home