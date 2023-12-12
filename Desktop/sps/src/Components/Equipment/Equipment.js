import React from 'react';
import './equip.css'
import img from '../../assets/alert2png.png'
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';

const Equipment = () => {
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
      <div className='eq-title-cont'>
        <h1 className='eq-title'>Equipment</h1>
        <Link to="/complaint">
        <button className='eq-comp-btn'>Complaint</button>
        </Link>
        
      </div>
      <div className='eq-main-cont'>
        <div className='eq-left-cont'>
          <div className='eq-left-site'>
            <h1 className='eq-site-name'> Site A</h1>
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
            <div className='eq-num-data'>
              <div className='eq-total'>
                <div className='eq-num-data-top'>
                  <div className='num-data-left'>
                    <img src={img} className='num-data-img'/>                    
                  </div>
                  <div className='num-data-right'>
                    <h2 className='num-data-count'>78</h2>
                  </div>
                </div>
                <div className='eq-num-data-bottom'>
                  <h3 className='num-data-text'>TOTAL</h3>
                </div>
              </div>
              <div className='eq-in-use'>
                <div className='eq-num-data-top'>
                  <div className='num-data-left'>
                    <img src={img} className='num-data-img'/>
                  </div>
                  <div className='num-data-right'>
                    <h2 className='num-data-count'>78</h2>
                  </div>
                </div>
                <div className='eq-num-data-bottom'>
                  <h3 className='num-data-text'>IN USE</h3>
                </div>
              </div>
              <div className='eq-not-in-use'>
                <div className='eq-num-data-top'>
                  <div className='num-data-left'>
                    <img src={img} className='num-data-img'/>
                  </div>
                  <div className='num-data-right'>
                    <h2 className='num-data-count'>78</h2>
                  </div>
                </div>
                <div className='eq-num-data-bottom'>
                  <h3 className='num-data-text'>NOT IN USE</h3>
                </div>
              </div>
              <div className='eq-service'>
                <div className='eq-num-data-top'>
                  <div className='num-data-left'>
                    <img src={img} className='num-data-img'/>
                  </div>
                  <div className='num-data-right'>
                    <h2 className='num-data-count'>78</h2>
                  </div>
                </div>
                <div className='eq-num-data-bottom'>
                  <h3 className='num-data-text'>TO SERVICE</h3>
  
                </div>
              </div>
            </div>
            <div className='eq-gra-data'>
              <div className='gra-left'>
                <div className='gra-top'>
                  <h1 className='gra-text'>WEEKLY POWER</h1>                                  
                </div>
                <div className='gra-bottom'>
                  <Chart options={chartOptions} series={weeklyPowerData.series} type='line' height={350} />
                </div>
              </div>
              <div className='gra-right'>
                <div className='gra-top'>
                  <h1 className='gra-text'>WEEKLY FUEL</h1>  
                </div>
                <div className='gra-bottom'>
                  <Chart options={chartOptions} series={weeklyFuelData.series} type='line' height={350} />
                </div>
              </div>
            </div>
        </div>
      </div> 
    </div>
  );
};

export default Equipment;