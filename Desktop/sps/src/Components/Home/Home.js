import React from 'react'
import '../Home/Home.css'
import '../../assets/Metro.jpeg'
import Location from './DropdownLocation'
import Projects from './DropDownproject'
import Departments from './DropdownDepartment'
import Status from './DropdownStatus'

import Profile from '../../assets/profile.png'
import Recents from '../../assets/clock.png'
import Metro from '../../assets/Metro.jpeg'


const Home = () => {
  return (
    <div className='flex flex-col h-full'>
      <div class='flex flex-row justify-between items-center  bg-blue-700 px-5 py-2  '>
            <div className='flex flex-row    items-center   mb-2 border-gray-200 '>
            <img src={Profile} alt="profile" className='h-7 w-7 mr-2'/>
            <h2 class='font-medium poppins text-white text-2xl'>Stone Paper Scissors</h2>
            </div>
            
            <div className='flex flex-row  px-5  items-center   mb-2 border-gray-200 '>
            <img src={Profile} alt="profile" className='h-7 w-7 mr-2'/>
            <h2 className='poppins font-medium text-lg text-white'>Karthik</h2>
          </div>
      </div>
      <div className=' flex flex-row  bglightblue '>
      <div className='flex flex-col w-80 bglightgrey   py-4 mt-5 ml-4 rounded-lg shadow-md'>
        {/* <div className='flex flex-row  px-5  items-center   mb-2 border-gray-200 py-3'>
          <img src={Profile} alt="profile" className='h-7 w-7 mr-2'/>
          <h2 className='poppins font-medium text-lg text-white'>Karthik</h2>
        </div> */}
        {/* <div className='flex row justify-center items-center w-full   mb-2 border-gray-200 py-3'>
          {/* <div className='flex flex-col'>
            <h2 className='poppins text-black font-medium text-2xl'>Stone</h2>
            <h2 className='poppins text-black font-medium text-2xl'>Paper</h2>
            <h2 className='poppins text-black font-medium text-2xl'>Scissors</h2>
          </div> 
          {/* <div className='flex justify-center items-center'>
             <img src={Profile} alt="profile"/>
          </div> 
        </div> */}
        <div><h2 className='poppins text-lg ml-4 font-medium'>Search Project</h2></div>
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
        </div>
        
        <h2 className='font-medium text-black   text-md px-4'>FILTERS</h2>
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
      <div className='flex  flex-col w-full  bglightblue  '>
        
          <div className='px-5 mt-5'>
            <div class='flex flex-row justify-between items-center bg-white px-5 py-4 rounded-md shadow-md mb-5'>
              <h2 class='font-semibold poppins text-3xl'>Projects</h2>
              <h2 class='font-semibold poppins text-2xl bgdarkblue px-4 py-2 text-black rounded-lg'>Create New</h2>
            </div>
            <div className='projectslist'>
              <div className='task mb-6 rounded-lg shadow-md'>
                  <div className='bg-white w-full h-12 px-10 py-3'>
                      <h2 className=' text-black font-medium text-lg poppins'>Chennai Metro work</h2>
                  </div>
                  <div className='flex flex-row bg-white w-full rounded-lg'>
                    {/* <div className='flex items-center justify-center h-74 w-56 '>
                      <img src={Metro} alt='ima' className='h-32 w-32'/>
                    </div> */}
                    <div className='flex flex-col poppins w-full px-10 pb-3 font-semibold'>
                        <h2 className='my-1'>Department: <span className='font-normal text-gray-700'> Highways </span></h2>
                        <h2 className='my-1'>Project <span className='font-normal text-gray-700'> Bridge</span></h2>
                        <h2 className='my-1'>Project Engineer: <span className='font-normal text-gray-700'> karthik </span></h2>
                        <h2 className='my-1'>Location: <span className='font-normal text-gray-700'> Chennai </span></h2>
                        
                        
                    </div>
                  </div>
              </div>
              <div className='task mb-6 rounded-lg shadow-md'>
                  <div className='bg-white w-full h-12 px-10 py-3'>
                      <h2 className=' text-black font-medium text-lg poppins'>Bridge work</h2>
                  </div>
                  <div className='flex flex-row bg-white w-full'>
                    {/* <div className='flex items-center justify-center h-74 w-56 '>
                      <img src={Metro} alt='ima' className='h-32 w-32'/>
                    </div> */}
                    <div className='flex flex-col poppins w-full px-10 pb-5 font-semibold'>
                        <h2 className='my-1'>Department: <span className='font-normal text-gray-700'> Highways </span></h2>
                        <h2 className='my-1'>Project <span className='font-normal text-gray-700'> Bridge</span></h2>
                        <h2 className='my-1'>Project Engineer: <span className='font-normal text-gray-700'> karthik </span></h2>
                        <h2 className='my-1'>Location: <span className='font-normal text-gray-700'> Chennai </span></h2>
                        
                        
                    </div>
                  </div>
              </div>
              <div className='task'>
                  <div className='bg-white w-full h-12 px-10 py-3'>
                      <h2 className=' text-white poppins'>Chennai Metro work</h2>
                  </div>
                  <div className='flex flex-row bg-white w-full'>
                    {/* <div className='flex items-center justify-center h-74 w-56 '>
                      <img src={Metro} alt='ima'  className='h-32 w-32'/>
                    </div> */}
                    <div className='flex flex-col poppins w-full px-10 py-8 font-semibold'>
                        <h2 className='my-1'>Site Engineer: <span className='font-normal text-gray-700'> karthik </span></h2>
                        <h2 className='my-1'>Client: <span className='font-normal text-gray-700'> Government </span></h2>
                        <h2 className='my-1'>Location: <span className='font-normal text-gray-700'> Chennai </span></h2>
                        <h2 className='my-1'>Estimated Time: <span className='font-normal text-gray-700'> karthik </span></h2>
                        <h2 className='my-1'>Estimated Budget: <span className='font-normal text-gray-700'> karthik </span></h2>
                        <h2 className='my-1'>Completion Status:</h2>
                        <div className='flex flex-row w-full  items-center'>
                          <div className='h-2 w-full bgdarkblue mr-4'></div>
                          <h2>70%</h2>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home