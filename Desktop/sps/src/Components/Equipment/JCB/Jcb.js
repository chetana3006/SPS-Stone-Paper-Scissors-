import React from 'react'
import './jcb.css'
import TemperatureChart from './TemperatureChart'
import FuelConsumptionChart from './FuelConsumptionChart'
import EmissionChart from './EmissionChart'
import EngineLoadAreaChart from './EngineLoadAreaChart'
const Jcb = () => {
  return (
    <div className='jcb-bg'>
      <div class='flex flex-row justify-between items-center lightgreen green px-5 py-4 rounded-md shadow-md mt-5 mx-5 mb-5'>
        <h2 class='font-semibold poppins text-2xl lightgreen text-white'>JCB -1</h2>
      </div>
        <div className='jcb-main bg-gray-100'>
          <div className='jcb-top bg-gray-100'>
            <div className='jcb-gra-1-cont'>
              <h1 className='jcb-gra-head'>Temperature Graph</h1>
              <TemperatureChart/>
            </div>
            <div className='jcb-gra-2-cont' >
            <h1 className='jcb-gra-head'>Fuel Consumption Chart</h1>
              <FuelConsumptionChart/>
            </div>
          </div>
          <div className='jcb-down bg-grey-100'>
            <div className='jcb-gra-3-cont'>
              <h1 className='jcb-gra-head'>Fuel Consumption Chart</h1>
              <EngineLoadAreaChart/>
            </div>
            <div className='jcb-gra-4-cont'>
              <h1 className='jcb-gra-head'>Emission Chart</h1>
              <EmissionChart/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Jcb