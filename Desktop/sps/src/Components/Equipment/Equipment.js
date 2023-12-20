import React from 'react';
import './equip.css'
// import img from '../../assets/alert2png.png'
import Equip from '../../assets/equipment.png'
import notinuse from '../../assets/sleep.png'
import service from '../../assets/outofservice.png'
import inuse from '../../assets/tools.png'
import Chart from 'react-apexcharts';
import { Link, useNavigate } from 'react-router-dom';
import back from "../../assets/back.png"
import LastButton12 from '../LastButton12';
const Equipment = () => {
  const navigate=useNavigate();

  const weeklyPowerData = {
    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    series: [
      {
        name: 'Power Consumption',
        data: [120, 150, 110, 130], // Sample power consumption values
      },
    ],
  };

  const weeklyFuelData = {
    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    series: [
      {
        name: 'Fuel Consumption',
        data: [60, 80, 70, 75], // Sample fuel consumption values
      },
    ],
  };

  // ApexCharts options for weekly power and weekly fuel
  const chartOptions = {
    chart: {
      height: 350,
      type: 'line',
    },
    xaxis: {
      categories: weeklyPowerData.categories,
    },
    yaxis: {
      title: {
        text: 'Consumption',
      },
    },
  };


  return (
    <div className='eq-bg'>
      <div className='flex bg-white mt-1'>
          <img src={back} className='w-6 h-6  ml-3 mr-2' onClick={()=>{navigate("/projects")}}/>
          <h1 className=' font-semibold text-lg cursor-pointer' onClick={()=>{navigate("/projects")}}>Back</h1>
        </div>
      <div className='eq-title-cont'>
        <h1 className='eq-titl text-black text-lg'>Equipment</h1>
      </div>
      <div className='eq-main-cont'>
        <div className='eq-left-cont' >
          <div className='eq-left-site'>
            <h1 className='eq-site-name'> Site A</h1>
            <div className='eq-site-cont'>
              <div className='site-1eq'>
                <Link to = '/jcb'><h1 className='site-1eqname'>JCB-1</h1></Link>
              </div>
              <div className='site-1eq'>
              <Link to = '/road'><h1 className='site-1eqname'>RoadRoller-1</h1></Link>
              </div>
              <div className='site-1eq'>
                <Link to = '/ex'><h1 className='site-1eqname'>Excavator-1</h1></Link>
              </div>
              <div className='site-1eq'>
              <Link to = '/drill'><h1 className='site-1eqname'>Driller-1</h1></Link>
              </div>
            </div>
          </div>
          <div className='eq-left-site'>
            <h1 className='eq-site-name'> Site B</h1>
            <div className='eq-site-cont'>
              <div className='site-1eq'>
                <h1 className='site-1eqname'>JCB-1</h1>
              </div>
              <div className='site-1eq'>
                <h1 className='site-1eqname'>RoadRoller-1</h1>
              </div>
              <div className='site-1eq'>
                <h1 className='site-1eqname'>Excavator-1</h1>
              </div>
              <div className='site-1eq'>
                <h1 className='site-1eqname'>Driller-1</h1>
              </div>
            </div>
          </div>
          <div className='eq-left-site'>
            <h1 className='eq-site-name'> Site C</h1>
            <div className='eq-site-cont'>
              <div className='site-1eq'>
                <h1 className='site-1eqname'>JCB-1</h1>
              </div>
              <div className='site-1eq'>
                <h1 className='site-1eqname'>RoadRoller-1</h1>
              </div>
              <div className='site-1eq'>
                <h1 className='site-1eqname'>Excavator-1</h1>
              </div>
              <div className='site-1eq'>
                <h1 className='site-1eqname'>Driller-1</h1>
              </div>
            </div>
          </div>
          <div className='eq-left-site'>
            <h1 className='eq-site-name'> Site D</h1>
            <div className='eq-site-cont'>
              <div className='site-1eq'>
                <h1 className='site-1eqname'>JCB-1</h1>
              </div>
              <div className='site-1eq'>
                <h1 className='site-1eqname'>RoadRoller-1</h1>
              </div>
              <div className='site-1eq'>
                <h1 className='site-1eqname'>Excavator-1</h1>
              </div>
              <div className='site-1eq'>
                <h1 className='site-1eqname'>Driller-1</h1>
              </div>
            </div>
          </div> 
        </div>
        <div className='eq-right-cont'>
            <div className='flex flex-row justify-around mx-5 mt-10 gap-5 '>
              <div className='bg-white h-20 w-full rounded-md px-4 py-4 flex flex-row justify-between items-center'>
                <div className='flex flex-col'>
                  <img src={Equip} className='h-7 w-7'/>
                <h2 className='font-semibold text-xl text-gray-400 poppins mt-2'>Total </h2>
                </div>
                <h2 className='poppins font-bold text-gray-700 text-3xl'>52</h2>
              </div>
               <div className='bg-white h-20 w-full rounded-md px-4 py-4 flex flex-row justify-between items-center'>
                <div className='flex flex-col'>
                  <img src={inuse} className='h-7 w-7'/>
                <h2 className='font-semibold text-xl text-gray-400 poppins mt-2'>InUse </h2>
                </div>
                <h2 className='poppins font-bold text-gray-700 text-3xl'>52</h2>
              </div>
               <div className='bg-white h-20 w-full rounded-md px-4 py-4 flex flex-row justify-between items-center'>
                <div className='flex flex-col'>
                  <img src={notinuse} className='h-7 w-7'/>
                <h2 className='font-semibold text-xl text-gray-400 poppins mt-2'>Not InUse </h2>
                </div>
                <h2 className='poppins font-bold text-gray-700 text-3xl'>52</h2>
              </div>
               <div className='bg-white h-20 w-full rounded-md px-4 py-4 flex flex-row justify-between items-center'>
                <div className='flex flex-col'>
                  <img src={service} className='h-7 w-7'/>
                <h2 className='font-semibold text-xl text-gray-400 poppins mt-2'>Out Of Service </h2>
                </div>
                <h2 className='poppins font-bold text-gray-700 text-3xl'>52</h2>
              </div>
              </div>
            
            <div className='eq-gra-data'>
              <div className='gra-left' >
                <div className='gra-top' id="bg">
                  <h1 className='gra-text' >WEEKLY POWER</h1>                                  
                </div>
                <div className='gra-bottom'>
                  <Chart options={chartOptions} series={weeklyPowerData.series} type='line' height={350} />
                </div>
              </div>
              <div className='gra-right'>
                <div className='gra-top' id="bg">
                  <h1 className='gra-text'>WEEKLY FUEL</h1>  
                </div>
                <div className='gra-bottom'>
                  <Chart options={chartOptions} series={weeklyFuelData.series} type='line' height={350} />
                </div>
              </div>
            </div>
        </div>
      </div> 
      <LastButton12/>
    </div>
  );
};

export default Equipment;