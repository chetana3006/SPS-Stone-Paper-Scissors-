import React from 'react';
import TemperatureChart from './TemperatureChart';
import FuelConsumptionChart from './FuelConsumptionChart';
// import EmissionChart from './EmissionChart';
// import EngineLoadAreaChart from './EngineLoadAreaChart';
import './roadRoller.css'
import NoiseLevelChart from './NoiseLevelChart';
import EquipmentHealthChart from './EquipmentHealthAreaChart';

const RoadRoller = () => {
  return (
    <div className='road-bg'>
      <div className='flex flex-row justify-between items-center lightgreen green px-5 py-4 rounded-md shadow-md mt-5 mx-5 mb-5'>
        <h2 className='font-semibold poppins text-2xl lightgreen text-white'>RoadRoller - 1</h2>
      </div>
      <div className='road-main bg-gray-100'>
        <div className='road-top bg-gray-100'>
          <div className='road-gra-1-cont'>
            <h1 className='road-gra-head'>Temperature Graph</h1>
                <TemperatureChart/>
          </div>
          <div className='road-gra-2-cont'>
            <h1 className='road-gra-head'>Fuel Consumption Chart</h1    >
                <FuelConsumptionChart/>
          </div>
        </div>
        <div className='road-down bg-grey-100'>
          <div className='road-gra-3-cont'>
            <h1 className='road-gra-head'>Noise Level Chart</h1>
                <NoiseLevelChart/>
          </div>
          <div className='road-gra-4-cont'>
            <h1 className='road-gra-head'>Equipment Health</h1>
            <EquipmentHealthChart/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadRoller;
