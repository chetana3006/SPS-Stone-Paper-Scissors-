import React from 'react'

import Profile from '../../assets/profile.png'

const Projects = () => {
  return (
  <div className='flex gap-2'>
    
    <div className='w-80 bgdarkblue text-center py-5'>
        <div className='py-2'>
            <h2 className='poppins text-white text-2xl font-semibold text-left ml-10 mb-2'>Metro Work</h2>
            <h2 className='poppins text-white text-2xl font-semibold text-left ml-10 mb-2'>Government</h2>
            <h2 className='poppins text-white text-2xl font-semibold text-left ml-10 mb-2'>Chennai</h2>
        </div>
    </div>
    <div className='w-full py-10 px-7  h-full'>
        
        <div className='Header flex flex-row  h-12 w-full mb-10 justify-between'>
            <div>
              <h2 className='poppins font-bold text-3xl'>OnGoinTasks</h2>
            </div>
            <div className='bgdarkblue px-4 py-2  rounded-md text-xl'>
              <h2 className=' text-white poppins font-semibold'>New Tasks</h2>
            </div>
          </div>
        <div className='taskcard pb-2 bglightblue mb-5'>
            <div className='mb-2'>
                <h2 className='bgdarkblue py-2 px-3 text-white font-semibold text-left pl-12'>FLOORING</h2>
            </div>
            <div className='px-5'>
                <div className=''>
                <h2 className='mt-3 poppins font-medium'>Site Engineer: <span className='font-medium text-gray-700'> karthik </span></h2>
                <h2 className='mt-2 mb-3 poppins font-medium'>Site Location: <span className='font-medium text-gray-700'> Site A </span></h2>
                </div>
                <div className='labours flex flex-row flex-wrap'>
                    <div className='flex flex-row items-center mr-10 mb-4'>
                        <img src={Profile} alt="" className='h-8 w-8  border p-4 rounded-md'/>
                        <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2  rounded-md '>Karthik</h2>
                    </div>
                    <div className='flex flex-row items-center mr-10 mb-4'>
                        <img src={Profile} alt="" className='h-8 w-8  border p-4 rounded-md'/>
                        <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2  rounded-md '>Karthik</h2>
                    </div>
                    <div className='flex flex-row items-center mr-10 mb-4'>
                        <img src={Profile} alt="" className='h-8 w-8  border p-4 rounded-md'/>
                        <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2  rounded-md '>Karthik</h2>
                    </div>
                    <div className='flex flex-row items-center mr-10 mb-4'>
                        <img src={Profile} alt="" className='h-8 w-8  border p-4 rounded-md'/>
                        <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2  rounded-md '>Karthik</h2>
                    </div>
                    <div className='flex flex-row items-center mr-10 mb-4'>
                        <img src={Profile} alt="" className='h-8 w-8  border p-4 rounded-md'/>
                        <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2  rounded-md '>Karthik</h2>
                    </div>
                    <div className='flex flex-row items-center mr-10'>
                        <img src={Profile} alt="" className='h-8 w-8  border p-4 rounded-md'/>
                        <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2  rounded-md '>Karthik</h2>
                    </div>
                    
                </div>
                <h2 className='poppins font-medium text-xl'>Task Progress:</h2>
                <div className='flex flex-row w-full  items-center'>
                        <div className='h-2 w-full bg-gray-600 mr-4'></div>
                        <h2>70%</h2>
                </div>
                <div className='w-2/6 mx-aut0 mt-2 mb-2'>
                    <h2 className=' text-center bgdarkblue px-3 py-3 block text-white font-semibold rounded-lg'>Add Labour</h2>
                </div>
            </div>
        </div>
        <div className='taskcard pb-2 bglightblue mb-5'>
            <div className='mb-2'>
                <h2 className='bgdarkblue py-2 px-3 text-white font-semibold text-left pl-12'>FLOORING</h2>
            </div>
            <div className='px-3'>
                <div className=''>
                <h2 className='mt-3 poppins font-medium'>Site Engineer: <span className='font-medium text-gray-700'> karthik </span></h2>
                <h2 className='mt-2 mb-3 poppins font-medium'>Site Location: <span className='font-medium text-gray-700'> Site A </span></h2>
                </div>
                <div className='labours flex flex-row flex-wrap'>
                    <div className='flex flex-row items-center mr-10 mb-4'>
                        <img src={Profile} alt="" className='h-8 w-8  border p-4 rounded-md'/>
                        <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2  rounded-md '>Karthik</h2>
                    </div>
                    <div className='flex flex-row items-center mr-10 mb-4'>
                        <img src={Profile} alt="" className='h-8 w-8  border p-4 rounded-md'/>
                        <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2  rounded-md '>Karthik</h2>
                    </div>
                    <div className='flex flex-row items-center mr-10 mb-4'>
                        <img src={Profile} alt="" className='h-8 w-8  border p-4 rounded-md'/>
                        <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2  rounded-md '>Karthik</h2>
                    </div>
                    <div className='flex flex-row items-center mr-10 mb-4'>
                        <img src={Profile} alt="" className='h-8 w-8  border p-4 rounded-md'/>
                        <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2  rounded-md '>Karthik</h2>
                    </div>
                    <div className='flex flex-row items-center mr-10 mb-4'>
                        <img src={Profile} alt="" className='h-8 w-8  border p-4 rounded-md'/>
                        <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2  rounded-md '>Karthik</h2>
                    </div>
                    <div className='flex flex-row items-center mr-10'>
                        <img src={Profile} alt="" className='h-8 w-8  border p-4 rounded-md'/>
                        <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2  rounded-md '>Karthik</h2>
                    </div>
                    
                </div>
                <h2 className='poppins font-medium text-xl'>Task Progress:</h2>
                <div className='flex flex-row w-full  items-center'>
                        <div className='h-2 w-full bg-gray-600 mr-4'></div>
                        <h2>70%</h2>
                </div>
                <div className='w-2/6 mx-aut0'>
                    <h2 className=' text-center bgdarkblue px-3 py-3 block text-white font-semibold rounded-lg'>Add Labour</h2>
                </div>
            </div>
        </div>
        <div className='taskcard pb-2 bglightblue'>
            <div className='mb-2'>
                <h2 className='bgdarkblue py-2 px-3 text-white font-semibold text-left pl-12'>FLOORING</h2>
            </div>
            <div className='px-3'>
                <div className=''>
                <h2 className='mt-3 poppins font-medium'>Site Engineer: <span className='font-medium text-gray-700'> karthik </span></h2>
                <h2 className='mt-2 mb-3 poppins font-medium'>Site Location: <span className='font-medium text-gray-700'> Site A </span></h2>
                </div>
                <div className='labours flex flex-row flex-wrap'>
                    <div className='flex flex-row items-center mr-10 mb-4'>
                        <img src={Profile} alt="" className='h-8 w-8  border p-4 rounded-md'/>
                        <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2  rounded-md '>Karthik</h2>
                    </div>
                    <div className='flex flex-row items-center mr-10 mb-4'>
                        <img src={Profile} alt="" className='h-8 w-8  border p-4 rounded-md'/>
                        <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2  rounded-md '>Karthik</h2>
                    </div>
                    <div className='flex flex-row items-center mr-10 mb-4'>
                        <img src={Profile} alt="" className='h-8 w-8  border p-4 rounded-md'/>
                        <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2  rounded-md '>Karthik</h2>
                    </div>
                    <div className='flex flex-row items-center mr-10 mb-4'>
                        <img src={Profile} alt="" className='h-8 w-8  border p-4 rounded-md'/>
                        <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2  rounded-md '>Karthik</h2>
                    </div>
                    <div className='flex flex-row items-center mr-10 mb-4'>
                        <img src={Profile} alt="" className='h-8 w-8  border p-4 rounded-md'/>
                        <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2  rounded-md '>Karthik</h2>
                    </div>
                    <div className='flex flex-row items-center mr-10'>
                        <img src={Profile} alt="" className='h-8 w-8  border p-4 rounded-md'/>
                        <h2 className='text-gray-800 text-md border-b border-t border-r pr-2 py-1 pl-2  rounded-md '>Karthik</h2>
                    </div>
                    
                </div>
                <h2 className='poppins font-medium text-xl'>Task Progress:</h2>
                <div className='flex flex-row w-full  items-center'>
                        <div className='h-2 w-full bg-gray-600 mr-4'></div>
                        <h2>70%</h2>
                </div>
                <div className='w-2/6 mx-aut0'>
                    <h2 className=' text-center bgdarkblue px-3 py-3 block text-white font-semibold rounded-lg'>Add Labour</h2>
                </div>
            </div>
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
 
  </div>
)


}

export default Projects
