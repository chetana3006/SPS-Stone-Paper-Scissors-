import React from 'react'
import './jcb.css'
import TemperatureChart from './TemperatureChart'
import FuelConsumptionChart from './FuelConsumptionChart'
import EmissionChart from './EmissionChart'
import EngineLoadAreaChart from './EngineLoadAreaChart'
import jcbIcon from '../../../assets/jcb1.png'
const Jcb = () => {
  return (
    <div className='jcb-bg'>
      <div class='flex flex-row justify-between items-center lightgreen green px-5 py-4 rounded-md shadow-md mt-5 mx-5 mb-5 bglightgrey'>
        <h2 class='font-semibold poppins text-2xl lightgreen text-white'>JCB -1</h2>
      </div>
        <div className='jcb-main bg-gray-100 px-3'>
           <div className='flex flex-row gap-2 h-full w-full px-6'>
            <div className='bg3 text-white w-2/3 px-3 py-7 flex h-full poppins justify-around pl-10 flex-col font-medium text-xl'>
                <h2 className='py-2'>Equipment Id:<span className='ml-3 text-gray-600'>2103</span></h2>
                <h2 className='py-2'>Model Name:<span className='ml-3 text-gray-600'>2103</span></h2>
                <h2 className='py-2'>OwnerShip:<span className='ml-3 text-gray-600'>2103</span></h2>
                <h2 className='py-2'>lastService Date:<span className='ml-3 text-gray-600'>2103</span></h2>
                <h2 className='py-2'>Operational Status:<span className='ml-3 text-gray-600'>2103</span></h2>
                <h2 className='py-2'>Mileage:<span className='ml-3 text-gray-600'>2103</span></h2>
                <h2 className='py-2'>Engine No:<span className='ml-3 text-gray-600'>MS892SKJDSJD822J</span></h2>
                <h2 className='py-2'>Chasis No:<span className='ml-3 text-gray-600'>MDKS38372JSJD</span></h2>
                <h2 className='py-2'>Emission Norm:<span className='ml-3 text-gray-600'>BHARAT STAGE VI</span></h2>
                <h2 className='py-2'>Vehicle Class:<span className='ml-3 text-gray-600'>4WN</span></h2>
            </div>
            <div className='bg-red-200 w-full'>
                <img src={jcbIcon} className='h-full'/>
            </div>
        </div>
          <div className='jcb-top bg-gray-100'>
            <div className='jcb-gra-1-cont'>
              <h1 className='text-gray-500 font-medium text-xl mx-5'>Temperature Graph</h1>
              <TemperatureChart/>
            </div>
            <div className='jcb-gra-2-cont' >
            <h1 className='text-gray-500 font-medium text-xl mx-5'>Fuel Consumption Chart</h1>
              <FuelConsumptionChart/>
            </div>
          </div>
          <div className='jcb-down bg-grey-100'>
            <div className='jcb-gra-3-cont'>
              <h1 className='text-gray-500 font-medium text-xl mx-5'>Engine Load Chart</h1>
              <EngineLoadAreaChart/>
            </div>
            <div className='jcb-gra-4-cont'>
              <h1 className='text-gray-500 font-medium text-xl mx-5'>Emission Chart</h1>
              <EmissionChart/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Jcb