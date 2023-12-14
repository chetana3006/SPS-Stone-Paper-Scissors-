import React from 'react';
import './driller.css'
import './ROPvsDepthChart'
import ROPvsDepthChart from './ROPvsDepthChart';
// import TemperaturePressureChart from './TemperaturePressureChart';
// import TemperatureChart from './TemperatureChart';
// import FuelConsumptionChart from './FuelConsumptionChart';
// import EmissionChart from './EmissionChart';
// import EngineLoadAreaChart from './EngineLoadAreaChart';

const Driller = () => {
  return (
    <div className='drill-bg'>
      <div className='flex flex-row justify-between items-center lightgreen green px-5 py-4 rounded-md shadow-md mt-5 mx-5 mb-5'>
        <h2 className='font-semibold poppins text-2xl lightgreen text-white'>Drill - 1</h2>
      </div>
      <div className='drill-main bg-gray-100'>
        <div className='drill-top bg-gray-100'>
          <div className='drill-gra-1-cont'>
            <h1 className='drill-gra-head'>Temperature Pressure Chart</h1>
                <ROPvsDepthChart/>
           
          </div>
          <div className='drill-gra-2-cont'>
            <h1 className='drill-gra-head'>Fuel Consumption Chart</h1>
            
          </div>
        </div>
        <div className='drill-down bg-grey-100'>
          <div className='drill-gra-3-cont'>
            <h1 className='drill-gra-head'>Fuel Consumption Chart</h1>
            
          </div>
          <div className='drill-gra-4-cont'>
            <h1 className='drill-gra-head'>Emission Chart</h1>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Driller;
