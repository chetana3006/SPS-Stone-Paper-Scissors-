import React from 'react'
import WeatherImpactScatterPlot from './WeatherImpactScatterPlot'
import HealthWellnessDashboard from './HealthWellnessDasboard'

import DualAxisLineChart from './DualAxisLineChart'
// import EfficiencyDashboard from './Efficiency'
import LabourGanttChart from './LabourGanttChart'


const Labour = () => {
  return (
    <div className='text-black py-4 px-5 bg-gray-100 '>
      <div class='flex flex-row justify-between items-center lightgreen green px-5 py-4 rounded-md shadow-md'>
        <h2 class='font-semibold poppins text-2xl lightgreen text-white'>Labour workspace</h2>
        <input type='text' placeholder='Search Labour' className='px-4 py-2 rounded-lg'/>
      </div>
      <div className='flex flex-row gap-5 h-96  my-5'>
        <div className='w-4/5 bg-white shadow-md rounded-lg'>
          <WeatherImpactScatterPlot/>
        </div>
        <div className=' w-full bg-white shadow-md rounded-sm px-4 py-3'>
          <HealthWellnessDashboard/>
        </div>

      </div>
      <div className='flex flex-row gap-5 h-96  my-5'>
        <div className='w-3/5 bg-white shadow-md rounded-lg'>
          <LabourGanttChart/>
        </div>
        <div className=' w-full bg-white shadow-md rounded-lg'>
          <DualAxisLineChart/>
        </div>
        <div className=' w-2/4 bg-white shadow-md rounded-lg'></div>
      </div>
      <div class='flex  flex-col  bg-gray-100 px-5 py-4 rounded-md shadow-md'>
        <h2 class='font-semibold poppins text-2xl'>Generate Report</h2>
        <div className='flex flex-row  mr-10 mt-5'>
          <h2 class='font-semibold poppins text-2xl bg-blue-600 text-white px-3 py-2 rounded-md'>Weekly</h2>
          <h2 class='font-semibold poppins text-2xl ml-10 bg-blue-600 text-white px-3 py-2 rounded-md'>Monthly</h2>
        </div>
      </div>
    </div>
  )
}

export default Labour