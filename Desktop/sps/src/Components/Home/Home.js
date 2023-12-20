import React, { useContext, useEffect, useState } from 'react'
import '../Home/Home.css'
import '../../assets/Metro.jpeg'
import Location from './DropdownLocation'
import Projects from './DropDownproject'
import Departments from './DropdownDepartment'
import Status from './DropdownStatus'
import Profile from '../../assets/profile.png'
import Logo from '../../assets/logo2.png'
import Metro from '../../assets/Metro.jpeg'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../Context'
import LastButton12 from '../LastButton12'


const Home = () => {
  const { user,setuser } = useContext(Context);

  const username=user.user;
  console.log(user);
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
    <div className='flex flex-col h-screen'>
      
      <div className=' flex flex-row  bglightblue h-screen '>
      <div className='flex flex-col w-80 bglightgrey   py-4  shadow-md'>
        {/* <div className='flex flex-row  px-5  items-center   mb-2 border-gray-200 py-3'>
          <img src={Profile} alt="profile" className='h-7 w-7 mr-2'/>
          <h2 className='poppins font-medium text-lg text-white'>Karthik</h2>
        </div> */}
        <div className='flex row justify-around items-center w-full   mb-2 border-gray-200 py-3'>
           <div className='flex flex-col text-left'>
            <h2 className='poppins lightgreen font-medium text-2xl'>Stone</h2>
            <h2 className='poppins lightgreen font-medium text-2xl'>Paper</h2>
            <h2 className='poppins lightgreen font-medium text-2xl'>Scissors</h2>
          </div> 
           <div className='flex justify-center items-center'>
             <img src={Logo} alt="profile" className='h-18 w-28'/>
          </div> 
        </div>
        {/* <div><h2 className='poppins text-lg ml-4 font-medium'>Search Project</h2></div>
        <div className='searchbar py-3 px-4'>

            <div className="bglightblue px-3 py-2 rounded-md flex items-center">
            <div className="w-2 h-4 mr-2 bg-contain bg-no-repeat" style={{ backgroundImage: "url('../../profile.png')" }}></div>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none flex-1"
            />
          </div>
        </div>
        <div className='flex flex-row  mx-5 items-center    mb-2 border-gray-200 py-2 border-b'>
          <img src={Recents} alt="profile" className='mr-2 h-5 w-5'/>
          <h3 className='poppins font-light text-black text-md'>Recents</h3>
        </div> */}
        
        <h2 className='font-medium text-black  text-md px-4 md-2'>SEARCH BY</h2>
        <div className="flex flex-col space-y-4 px-4 py-2  pb-6 mb-2 border-gray-200">
          <label htmlFor="projects" className="block text-sm text-black font-medium">LOCATION:</label>
          <Location/>
          <label htmlFor="projects" className="block text-sm text-black font-medium">PROJECTS:</label>
          <Projects/>
          <label htmlFor="projects" className="block text-sm text-black font-medium">DEPARTMENTS:</label>
          <Departments/>
          <label htmlFor="projects" className="block text-sm text-black font-medium">STATUS:</label>
          <Status/>
        </div>

        {/* <div className='filters px-1  pb-4 mb-2 border-gray-200'>
          
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
      <div className='flex  flex-col w-full  bglightblue  h-screen overflow-y-auto'>
        <div class='flex flex-row justify-between items-center  bglightblue px-5 py-2  '>
            
            
            <div>
                <input type='text' placeholder='Search Projects' className='border-none bg-gray-200 px-10 py-1'/>
            </div>
            
            <div className='flex flex-row  px-5  items-center   mb-2 border-gray-200  '>
            
            <h2 className='poppins font-medium text-lg lightgreen mr-2'>Hi!, {username}</h2>
            <img src={Profile} alt="profile" className='h-7 w-7 mr-2'/>

          </div>
      </div>
        
          <div className='px-5 mt-5'>
            <div class='flex flex-row justify-between items-center mb-5'>
              {/* <div>
                <input type='text' placeholder='Search Projects' className='border-none bg-gray-200 px-10 py-1'/>
              </div> */}
              <h2 className='lightgreen font-medium text-2xl'>Overview</h2>
              <Link to="/Newproject"  class='font-normal poppins text-xl green px-4 py-2 text-white rounded-lg borderplain'>Create New</Link>
            </div>
            {/* <div className='bgdarkblue px-4 py-2  rounded-md text-xl'>
              <Link to="Newproject" className=' text-white poppins font-semibold' >New Project</Link>
            </div> */}
          </div>
          <div className='flex flex-row gap-5 justify-around mb-5 px-5'>
              <div className='bg-white h-20 w-full rounded-md px-4 py-4' id="p1">
                 <h2 className='text-xl font-bold text-white '  >Total Projects :7</h2>
              </div>
              <div className='bg-white h-20  w-full rounded-md px-4 py-4' id="p2" >
                <h2 className='text-xl font-bold text-white' >Projects Completed : 4</h2>
              </div>
              <div className='bg-white h-20 w-full  rounded-md px-4 py-4' id="p3" >
                <h2 className='text-xl font-bold text-white' >Projects Pending : 3</h2>
              </div>

            </div>
          <div class="bg-white py-3 px-5 mx-5">
            
  <div class="overflow-x-auto h-full overflow-y-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="green borderplain">
        <tr>
          <th class="py-2 px-4 text-left text-lg text-white">Project Name</th>
          <th class="py-2 px-4 text-left text-lg text-white">Department</th>
          <th class="py-2 px-4 text-left text-lg text-white">Project Engineer</th>
          <th class="py-2 px-4 text-left text-lg text-white">Location</th>
          <th class="py-2 px-4 text-left text-lg text-white">End Date</th>
          <th class="py-2 px-4 text-left text-lg text-white">Details</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
      {
              projects.map(project => (
        <tr className='hover:bg-gray-200'>
          <td class="py-3 px-4 " onClick={()=>postname(project.projectName)} id="roomname">{project.projectName}</td>
          <td class="py-3 px-4">{project.department}</td>
          <td class="py-3 px-4">{project.projectEngineer}</td>
          <td class="py-3 px-4">{project.estimatedTime}</td>
          <td class="py-3 px-4">{project.completionStatus}</td>
          <td class=" py-3 px-4" onClick={()=>postname(project.projectName)}><h1 class="w-30 text-center p-2 view rounded-md" >View More</h1></td>
        </tr>
          ))}
      
      </tbody>
    </table>
  </div>
</div>

          {/* <div className='projectslist px-5 '>
            {
              projects.map(project => (
                <div className='task mb-6 shadow-md rounded-lg' key={project._id} >
                
                <div className='bgdarkblue w-full h-12 px-10 py-3'>
                    <h2 className=' text-black poppins text-md font-medium' onClick={()=>postname(project.projectName)}>{project.projectName}</h2>
                </div>
                <div className='flex flex-row bg-white w-full'>
                  {/* <div className='flex items-center justify-center h-74 w-56 '>
                    <img src={Metro} alt='ima' className='h-32 w-32'/>
                  </div> 
                  <div className='flex flex-col poppins w-full px-10 pb-4 font-normal'>
                      <h2 className='my-1'>Department: <span className='font-normal text-gray-700'> {project.department}</span></h2>
                      <h2 className='my-1'>Project: <span className='font-normal text-gray-700'> {project.projectName}</span></h2>
                      <h2 className='my-1'>Project Engineer: <span className='font-normal text-gray-700'> {project.projectEngineer} </span></h2>
                      <h2 className='my-1'>Location: <span className='font-normal text-gray-700'> {project.location} </span></h2>
                      {/* <h2 className='my-1'>Estimated Time: <span className='font-normal text-gray-700'>{project.estimatedTime} </span></h2>
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
          </div> */}

      </div>
    </div>
    <LastButton12/>
    </div>
  )
}

export default Home