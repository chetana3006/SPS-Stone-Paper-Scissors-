import React from 'react'
import './jcb.css'

import jcbIcon from '../../../assets/jcb1.png'

export default function newJcb() {
  return (
    <div className='h-full w-full flex bg-gray-200 flex-col px-10 pb-6 pt-2'>
        <div className='bgblue text-white py-2 mb-2 px-5 font-bold text-2xl text-black'>
            JCB
        </div>
        <div className='flex flex-row gap-2 h-full w-full'>
            <div className='bgblue text-white w-2/3 px-3 py-7 flex h-full poppins justify-around pl-10 flex-col font-medium text-xl'>
                <h2 className='py-2'>Equipment Id:<span className='ml-3 text-gray-300'>2103</span></h2>
                <h2 className='py-2'>Model Name:<span className='ml-3 text-gray-300'>2103</span></h2>
                <h2 className='py-2'>OwnerShip:<span className='ml-3 text-gray-300'>2103</span></h2>
                <h2 className='py-2'>lastService Date:<span className='ml-3 text-gray-300'>2103</span></h2>
                <h2 className='py-2'>Operational Status:<span className='ml-3 text-gray-300'>2103</span></h2>
                <h2 className='py-2'>Mileage:<span className='ml-3 text-gray-300'>2103</span></h2>
                <h2 className='py-2'>Engine No:<span className='ml-3 text-gray-300'>MS892SKJDSJD822J</span></h2>
                <h2 className='py-2'>Chasis No:<span className='ml-3 text-gray-300'>MDKS38372JSJD</span></h2>
                <h2 className='py-2'>Emission Norm:<span className='ml-3 text-gray-300'>BHARAT STAGE VI</span></h2>
                <h2 className='py-2'>Vehicle Class:<span className='ml-3 text-gray-300'>4WN</span></h2>
            </div>
            <div className='bg-red-200 w-full'>
                <img src={jcbIcon} className='h-full'/>
            </div>
        </div>
        <div className='flex flex-row gap-2  h-72  mt-2 w-full'>
            <div className='bg-red-100 w-full'>
sasa
            </div>
            <div className='bg-red-200 w-2/3'>

            </div>

        </div>
        <div className='flex flex-row gap-2 h-72 w-full mt-2'>
            <div className='bg-red-100 w-2/3'>
sasa
            </div>
            <div className='bg-red-200 w-full'>

            </div>
        </div>
    </div>
  )
}
