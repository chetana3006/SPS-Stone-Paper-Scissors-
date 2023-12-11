import React from 'react'
import '../Home/Home.css'
import '../../assets/Metro.jpeg'


const Home = () => {
  return (
    <div className='flex flex-row h-full'>
      <div className='flex flex-col w-80 bg-white h-full  py-4'>
        <div className='flex flex-row border-b pb-2 mb-2 border-gray-200 px-5'>
          <img src='../../assets/profile.png' alt="profile"/>
          <h2 className='poppins font-semibold'>Karthik</h2>
        </div>
        <div className='flex row justify-center items-center w-full border-b pb-2 mb-2 border-gray-200'>
          <div className='flex flex-col'>
            <h2 className='poppins font-semibold text-2xl'>Stone</h2>
            <h2 className='poppins font-semibold text-2xl'>Paper</h2>
            <h2 className='poppins font-semibold text-2xl'>Scissors</h2>
          </div>
          <div className='flex justify-center items-center'>
             <img src='../../assets/profile.png' alt="profile"/>
          </div>
        </div>
        <div className='searchbar py-2 px-2'>
            <div className="bg-gray-200 px-3 py-1 rounded-full flex items-center">
            <div className="w-2 h-4 mr-2 bg-contain bg-no-repeat" style={{ backgroundImage: "url('../../profile.png')" }}></div>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none flex-1"
            />
          </div>
        </div>
        <div className='border-b pb-2 mb-2 border-gray-200'>
          <h3 className='poppins font-light text-md'>Recents</h3>
        </div>
        <div className='filters'>
          <div className='flex items-center mb-2'>
            <input type='checkbox' id='completed' className='mr-2' />
            <label htmlFor='completed'>Completed</label>
          </div>
          <div className='flex items-center mb-2'>
            <input type='checkbox' id='pending' className='mr-2' />
            <label htmlFor='pending'>Pending</label>
          </div>
          <div className='flex items-center'>
            <input type='checkbox' id='pending' className='mr-2' />
            <label htmlFor='pending'>Recent Deadline</label>
          </div>
        </div>
        
      </div>
      <div className='flex  flex-col w-full bglightgrey h-full px-10 py-10'>
          <div className='Header flex flex-row  h-12 w-full mb-10 justify-between'>
            <div>
              <h2 className='poppins font-bold text-3xl'>Projects</h2>
            </div>
            <div className='bgdarkblue px-4 py-2  rounded-md text-xl'>
              <h2 className=' text-white poppins font-semibold'>New Project</h2>
            </div>
          </div>
          <div className='projectslist'>
            <div className='task mb-6'>
                <div className='bgdarkblue w-full h-12 px-10 py-3'>
                    <h2 className=' text-white poppins'>Chennai Metro work</h2>
                </div>
                <div className='flex flex-row bg-white w-full'>
                  <div className='flex items-center justify-center h-74 w-56 bg-red-200'>
                    <img src='../../assets/Metro.jpeg' alt='ima' />
                  </div>
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
            <div className='task'>
                <div className='bgdarkblue w-full h-12 px-10 py-3'>
                    <h2 className=' text-white poppins'>Chennai Metro work</h2>
                </div>
                <div className='flex flex-row bg-white w-full'>
                  <div className='flex items-center justify-center h-74 w-56 bg-red-200'>
                    <img src='../../assets/Metro.jpeg' alt='ima' />
                  </div>
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
  )
}

export default Home